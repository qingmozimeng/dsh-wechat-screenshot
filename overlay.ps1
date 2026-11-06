param(
    [string]$TitleMatch = 'DeepSeek Harness',
    [int]$HideDelayMs = 60
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

[Console]::InputEncoding = New-Object System.Text.UTF8Encoding($false)
[Console]::OutputEncoding = New-Object System.Text.UTF8Encoding($false)

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing
. (Join-Path $PSScriptRoot 'native.ps1')
[WeChatShotNative]::EnableDpi() | Out-Null

function Send-Result($id, $payload) {
    if ($null -ne $id) { $payload['id'] = $id }
    $json = $payload | ConvertTo-Json -Compress -Depth 8
    [Console]::Out.WriteLine($json)
    [Console]::Out.Flush()
}

function Send-Error($id, $message) {
    Send-Result $id @{ ok = $false; error = [string]$message }
}

function Find-Target {
    if ([string]::IsNullOrWhiteSpace($TitleMatch)) { return [IntPtr]::Zero }
    return [WeChatShotNative]::FindDshWindow($TitleMatch)
}

function Capture-Screen($bounds, $outPath) {
    $bitmap = New-Object System.Drawing.Bitmap($bounds.Width, $bounds.Height)
    try {
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        try {
            $graphics.CopyFromScreen($bounds.Location, [System.Drawing.Point]::Empty, $bounds.Size)
        }
        finally {
            $graphics.Dispose()
        }
        $directory = [System.IO.Path]::GetDirectoryName($outPath)
        if ($directory -and -not (Test-Path -LiteralPath $directory)) {
            New-Item -ItemType Directory -Path $directory -Force | Out-Null
        }
        $bitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    finally {
        $bitmap.Dispose()
    }
}

function List-WindowRects($bounds, $exclude) {
    $rows = [WeChatShotNative]::ListWindows($bounds.Left, $bounds.Top, $bounds.Width, $bounds.Height, $exclude)
    $result = @()
    foreach ($row in $rows) {
        $parts = [regex]::Split($row, '\|', 7)
        if ($parts.Length -eq 7) {
            $result += @{
                x      = [int]$parts[3]
                y      = [int]$parts[4]
                width  = [int]$parts[5]
                height = [int]$parts[6]
            }
        }
    }
    return $result
}

Send-Result $null @{ type = 'ready'; pid = $PID }

while ($true) {
    $line = [Console]::In.ReadLine()
    if ($null -eq $line) { break }
    if ([string]::IsNullOrWhiteSpace($line)) { continue }

    $request = $null
    $id = $null
    try {
        $request = $line | ConvertFrom-Json
        $id = $request.id
        $command = [string]$request.command

        if ($command -eq 'capture') {
            $mode = [string]$request.mode
            if ($mode -ne 'desktop' -and $mode -ne 'window') { throw 'invalid capture mode' }
            $outPath = [string]$request.out
            if ([string]::IsNullOrWhiteSpace($outPath)) { throw 'out is required' }

            $target = Find-Target
            if ($target -ne [IntPtr]::Zero) {
                $screen = [System.Windows.Forms.Screen]::FromHandle($target)
            }
            else {
                $screen = [System.Windows.Forms.Screen]::PrimaryScreen
            }
            if ($null -eq $screen) { $screen = [System.Windows.Forms.Screen]::PrimaryScreen }
            $bounds = $screen.Bounds

            $windows = @(List-WindowRects $bounds ([IntPtr]::Zero))
            Capture-Screen $bounds $outPath
            Send-Result $id @{
                ok = $true; mode = $mode; windowHeld = $false
                screen = @{ x = $bounds.X; y = $bounds.Y; width = $bounds.Width; height = $bounds.Height }
                windows = @($windows)
            }
        }
        elseif ($command -eq 'show' -or $command -eq 'restore') {
            Send-Result $id @{ ok = $true; mode = $command }
        }
        elseif ($command -eq 'shutdown') {
            Send-Result $id @{ ok = $true; mode = 'shutdown' }
            break
        }
        else {
            throw "unknown command: $command"
        }
    }
    catch {
        # No native window state is changed by this worker.
        Send-Error $id $_.Exception.Message
    }
}
