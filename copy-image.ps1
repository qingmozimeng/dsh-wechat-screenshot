param(
    [Parameter(Mandatory = $true)]
    [string]$Path
)

$ErrorActionPreference = 'Stop'

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$image = [System.Drawing.Image]::FromFile($Path)
try {
    $copied = $false
    for ($attempt = 0; $attempt -lt 8 -and -not $copied; $attempt++) {
        try {
            [System.Windows.Forms.Clipboard]::SetImage($image)
            $copied = $true
        } catch {
            Start-Sleep -Milliseconds 80
        }
    }
    if (-not $copied) {
        throw '剪贴板被其他程序占用，请稍后重试'
    }
} finally {
    $image.Dispose()
}

Write-Output 'ok'
