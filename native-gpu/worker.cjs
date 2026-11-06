'use strict';
const { spawn } = require('node:child_process');
const { createInterface } = require('node:readline');

// A worker belongs to one plugin installation. No process is started at import time.
module.exports = class JsonWorker {
  constructor(executable, args, options = {}) {
    this.executable = executable;
    this.args = args;
    this.options = options;
    this.child = null;
    this.pending = new Map();
    this.sequence = 0;
    this.disposed = false;
  }
  start() {
    if (this.disposed) throw new Error('截图插件已卸载');
    if (this.child) return this.child;
    const child = spawn(this.executable, this.args, { windowsHide: true, stdio: ['pipe', 'pipe', 'pipe'] });
    this.child = child;
    const reader = createInterface({ input: child.stdout });
    reader.on('line', line => {
      if (this.child !== child) return;
      let value;
      try { value = JSON.parse(line); } catch { return; }
      const entry = this.pending.get(value.id);
      if (!entry) return;
      this.pending.delete(value.id);
      clearTimeout(entry.timer);
      if (value.error || value.ok === false) entry.reject(new Error(value.error || '截图失败'));
      else entry.resolve(value);
    });
    const fail = error => {
      if (this.child === child) this.stop(error);
    };
    // Stream errors can arrive asynchronously after write() has returned.
    child.stdin.on('error', fail);
    child.stdout.on('error', fail);
    child.stderr.on('error', fail);
    child.stderr.on('data', chunk => this.options.log?.(String(chunk).slice(0, 2000)));
    child.on('error', fail);
    child.on('exit', () => { reader.close(); fail(new Error('截图辅助进程退出')); });
    return child;
  }
  request(params, timeout = 15000) {
    let child;
    try { child = this.start(); } catch (error) { return Promise.reject(error); }
    const id = ++this.sequence;
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => this.stop(new Error('截图辅助进程超时')), timeout);
      this.pending.set(id, { resolve, reject, timer });
      try {
        child.stdin.write(JSON.stringify({ ...params, id }) + '\n', error => {
          if (error && this.child === child) this.stop(error);
        });
      } catch (error) { this.stop(error); }
    });
  }
  stop(error = new Error('截图辅助进程已停止')) {
    const child = this.child;
    this.child = null;
    for (const entry of this.pending.values()) {
      clearTimeout(entry.timer);
      entry.reject(error);
    }
    this.pending.clear();
    if (child) { try { child.kill(); } catch {} }
  }
  dispose() {
    this.disposed = true;
    this.stop();
  }
};
