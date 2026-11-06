import { execFile } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import { readFile, unlink, mkdir, writeFile } from 'node:fs/promises'
import { homedir, tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import JsonWorker from './native-gpu/worker.cjs'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const execFileAsync = promisify(execFile)
const HERE = dirname(fileURLToPath(import.meta.url))
const COPY_SCRIPT = join(HERE, 'copy-image.ps1')
const OVERLAY_SCRIPT = join(HERE, 'overlay.ps1')
const POWERSHELL = join(
  process.env.SystemRoot ?? 'C:\\Windows',
  'System32',
  'WindowsPowerShell',
  'v1.0',
  'powershell.exe',
)
const MAX_BODY_BYTES = 64 * 1024 * 1024

export const name = 'dsh-wechat-screenshot'
export const inject = ['webServer']

function sendJson(response, status, value) {
  const body = Buffer.from(JSON.stringify(value), 'utf8')
  response.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'content-length': String(body.length),
    'cache-control': 'no-store',
  })
  response.end(body)
}

function sendPng(response, buffer, meta) {
  const headers = {
    'content-type': 'image/png',
    'content-length': String(buffer.length),
    'cache-control': 'no-store',
  }
  if (meta) {
    const encoded = Buffer.from(JSON.stringify(meta), 'utf8').toString('base64url')
    headers['x-dsh-shot-meta'] = encoded
  }
  response.writeHead(200, headers)
  response.end(buffer)
}

function httpError(message, statusCode) {
  const error = new Error(message)
  error.statusCode = statusCode
  return error
}

async function readBody(request) {
  const chunks = []
  let size = 0
  for await (const chunk of request) {
    size += chunk.length
    if (size > MAX_BODY_BYTES) throw httpError('请求体过大', 413)
    chunks.push(chunk)
  }
  return Buffer.concat(chunks)
}

async function readJson(request) {
  const body = await readBody(request)
  if (body.length === 0) return {}
  try {
    return JSON.parse(body.toString('utf8'))
  } catch {
    throw httpError('请求体必须是 JSON', 400)
  }
}

function assertWindows() {
  if (process.platform !== 'win32') throw httpError('截图只在 Windows 上可用', 501)
}

function requirePost(request) {
  if (request.method !== 'POST') throw httpError('method not allowed', 405)
}

function requireClient(request) {
  if (request.headers['x-dsh-shot'] === '1') return
  const referer = request.headers.referer
  if (typeof referer === 'string') {
    try {
      const url = new URL(referer)
      if (url.protocol === 'dsh-app:' && url.hostname === 'app') return
      if (
        (url.protocol === 'http:' || url.protocol === 'https:') &&
        (url.hostname === '127.0.0.1' || url.hostname === 'localhost' || url.hostname === '[::1]')
      ) {
        return
      }
    } catch {
      /* fall through */
    }
  }
  throw httpError('forbidden', 403)
}

function timestamp() {
  const now = new Date()
  const pad = (value) => String(value).padStart(2, '0')
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`
}

function cleanPowerShellError(error) {
  const stderr = typeof error?.stderr === 'string' ? error.stderr.trim() : ''
  if (stderr.length > 0) {
    const line = stderr
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean)
      .find((item) => !item.startsWith('At line:') && !item.startsWith('+') && !item.startsWith('CategoryInfo') && !item.startsWith('FullyQualifiedErrorId'))
      ?? stderr.split(/\r?\n/).find((item) => item.trim().length > 0)
    if (line) return line
  }
  return error instanceof Error ? error.message : String(error)
}

export function apply(ctx, config) {
  const options = {
    windowTitle: 'DeepSeek Harness',
    hideDelayMs: 60,
    ...(config ?? {}),
  }
  let disposed = false
  let busy = false
  const copyAbort = new AbortController()
  const log = (message) => ctx.logger?.('dsh-wechat-screenshot')?.warn?.(message)
  const worker = new JsonWorker(POWERSHELL, [
    '-NoProfile', '-NonInteractive', '-STA', '-ExecutionPolicy', 'Bypass',
    '-File', OVERLAY_SCRIPT, '-TitleMatch', options.windowTitle,
  ], { log })
  const enqueue = async (operation) => {
    if (disposed) throw httpError('截图插件已卸载', 503)
    if (busy) throw httpError('截图操作正在进行，请稍后重试', 409)
    busy = true
    try { return await operation() } finally { busy = false }
  }
  // Browser mode never hides, resizes or raises any native window.
  const restoreHeldWindow = async () => {}
  const showHeldWindow = async () => {}
  const capture = async (mode) => {
    assertWindows()
    const output = join(tmpdir(), 'dsh-wechat-screenshot-' + randomUUID() + '.png')
    try {
      const result = await worker.request({ command: 'capture', mode, out: output }, 15000)
      const png = await readFile(output)
      if (!png.length) throw new Error('截图服务返回了空图片')
      return { png, meta: { ok: true, mode, windowHeld: false,
        screen: result.screen, windows: Array.isArray(result.windows) ? result.windows : [] } }
    } finally {
      worker.stop()
      await unlink(output).catch(() => undefined)
    }
  }

  const copyImage = async (buffer) => {
    assertWindows()
    if (!buffer.length) throw httpError('图片内容为空', 400)
    const path = join(tmpdir(), `dsh-wechat-screenshot-copy-${randomUUID()}.png`)
    await writeFile(path, buffer)
    try {
      await execFileAsync(POWERSHELL, ['-NoProfile', '-NonInteractive', '-STA', '-ExecutionPolicy', 'Bypass', '-File', COPY_SCRIPT, '-Path', path], {
        cwd: HERE,
        windowsHide: true,
        signal: copyAbort.signal,
        timeout: 15000,
        maxBuffer: 1024 * 1024,
        env: { ...process.env, DSH_WECHAT_SHOT: '1' },
      })
    } catch (error) {
      throw new Error(cleanPowerShellError(error))
    } finally {
      await unlink(path).catch(() => undefined)
    }
  }

  const saveImage = async (buffer) => {
    if (!buffer.length) throw httpError('图片内容为空', 400)
    const directory = join(homedir(), 'Pictures', 'Screenshots')
    await mkdir(directory, { recursive: true })
    const base = `微信截图-${timestamp()}`
    let path = join(directory, `${base}.png`)
    let index = 1
    while (true) {
      try {
        await writeFile(path, buffer, { flag: 'wx' })
        return path
      } catch (error) {
        if (error?.code !== 'EEXIST') throw error
        path = join(directory, `${base}-${index}.png`)
        index += 1
      }
    }
  }

  const register = (path, handler) =>
    ctx.webServer.register({
      kind: 'exact',
      path,
      handler: async (request, response) => {
        try {
          await handler(request, response)
        } catch (error) {
          const message = cleanPowerShellError(error)
          const status = Number.isInteger(error?.statusCode) ? error.statusCode : 500
          log(`request failed: ${message}`)
          if (!response.headersSent) sendJson(response, status, { ok: false, error: message })
          else response.destroy()
        }
      },
    })

  ctx.effect(
    () => {
      const disposers = [
        register('/dsh-wechat-screenshot/health', async (_request, response) => {
          sendJson(response, 200, {
            ok: true,
            version: '1.3.1',
            platform: process.platform,
            pid: process.pid,
            powershell: process.platform === 'win32',
            helper: Boolean(worker.child),
          })
        }),
        register('/dsh-wechat-screenshot/capture', async (request, response) => {
          requirePost(request)
          requireClient(request)
          const payload = await readJson(request)
          if (payload?.mode !== 'desktop' && payload?.mode !== 'window') {
            throw httpError('mode 必须是 desktop 或 window', 400)
          }
          const { png, meta } = await enqueue(() => capture(payload.mode))
          sendPng(response, png, {
            ...meta,
            mode: payload.mode,
            capturedAt: Date.now(),
          })
        }),
        register('/dsh-wechat-screenshot/show', async (request, response) => {
          requirePost(request)
          requireClient(request)
          await enqueue(showHeldWindow)
          sendJson(response, 200, { ok: true })
        }),
        register('/dsh-wechat-screenshot/restore', async (request, response) => {
          requirePost(request)
          requireClient(request)
          await enqueue(restoreHeldWindow)
          sendJson(response, 200, { ok: true })
        }),
        register('/dsh-wechat-screenshot/copy', async (request, response) => {
          requirePost(request)
          requireClient(request)
          const body = await readBody(request)
          await enqueue(() => copyImage(body))
          sendJson(response, 200, { ok: true })
        }),
        register('/dsh-wechat-screenshot/save', async (request, response) => {
          requirePost(request)
          requireClient(request)
          const body = await readBody(request)
          const path = await enqueue(() => saveImage(body))
          sendJson(response, 200, { ok: true, path })
        }),
      ]
      return () => {
        disposed = true
        copyAbort.abort()
        worker.dispose()
        for (const dispose of disposers) dispose()
      }
    },
    'dsh-wechat-screenshot routes',
  )
}
