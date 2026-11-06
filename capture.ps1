param(
    [ValidateSet('desktop', 'window', 'restore', 'restore-state', 'show')]
    [string]$Mode = 'desktop',
    [string]$Out,
    [string]$TitleMatch = 'DeepSeek Harness',
    [int]$HideDelayMs = 260,
    [string]$StatePath,
    [switch]$HoldFullscreen,
    [switch]$KeepHidden
)

$ErrorActionPreference = 'Stop'
$ProgressPreference = 'SilentlyContinue'

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

Add-Type -TypeDefinition @'
using System;
using System.Text;
using System.Collections.Generic;
using System.Runtime.InteropServices;

public static class WeChatShotNative
{
    public delegate bool EnumWindowsProc(IntPtr hWnd, IntPtr lParam);

    [StructLayout(LayoutKind.Sequential)]
    public struct RECT
    {
        public int Left;
        public int Top;
        public int Right;
        public int Bottom;
    }

    [StructLayout(LayoutKind.Sequential)]
    public struct POINT
    {
        public int X;
        public int Y;
    }

    [DllImport("user32.dll")]
    public static extern bool EnumWindows(EnumWindowsProc callback, IntPtr lParam);

    [DllImport("user32.dll")]
    public static extern bool IsWindowVisible(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool IsIconic(IntPtr hWnd);

    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    public static extern int GetWindowText(IntPtr hWnd, StringBuilder text, int count);

    [DllImport("user32.dll", CharSet = CharSet.Unicode)]
    public static extern int GetClassName(IntPtr hWnd, StringBuilder text, int count);

    [DllImport("user32.dll")]
    public static extern bool GetWindowRect(IntPtr hWnd, out RECT rect);

    [DllImport("user32.dll")]
    public static extern bool GetClientRect(IntPtr hWnd, out RECT rect);

    [DllImport("user32.dll")]
    public static extern bool ClientToScreen(IntPtr hWnd, ref POINT point);

    [DllImport("user32.dll")]
    public static extern bool IsWindow(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool IsZoomed(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool ShowWindow(IntPtr hWnd, int command);

    [DllImport("user32.dll")]
    public static extern bool SetForegroundWindow(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern bool SetWindowPos(IntPtr hWnd, IntPtr after, int x, int y, int width, int height, uint flags);

    [DllImport("user32.dll")]
    public static extern int GetWindowLong(IntPtr hWnd, int index);

    [DllImport("user32.dll")]
    public static extern bool SetProcessDPIAware();

    [DllImport("user32.dll")]
    public static extern bool SetProcessDpiAwarenessContext(IntPtr value);

    [DllImport("shcore.dll")]
    public static extern int SetProcessDpiAwareness(int value);

    [DllImport("dwmapi.dll")]
    public static extern int DwmFlush();

    [DllImport("dwmapi.dll")]
    public static extern int DwmGetWindowAttribute(IntPtr hWnd, int attribute, out RECT rect, int size);

    [DllImport("dwmapi.dll")]
    public static extern int DwmGetWindowAttribute(IntPtr hWnd, int attribute, out int value, int size);

    private const int GWL_EXSTYLE = -20;
    private const int WS_EX_TOOLWINDOW = 0x00000080;
    private const int WS_EX_APPWINDOW = 0x00040000;
    private const int DWMWA_EXTENDED_FRAME_BOUNDS = 9;
    private const int DWMWA_CLOAKED = 14;

    public static void EnableDpi()
    {
        try { SetProcessDpiAwarenessContext(new IntPtr(-4)); return; } catch { }
        try { if (SetProcessDpiAwareness(2) == 0) return; } catch { }
        try { SetProcessDPIAware(); } catch { }
    }

    public static IntPtr FindDshWindow(string titleMatch)
    {
        IntPtr best = IntPtr.Zero;
        long bestScore = -1;
        EnumWindows(delegate(IntPtr hWnd, IntPtr lParam)
        {
            if (!IsWindowVisible(hWnd) || IsIconic(hWnd)) return true;
            StringBuilder className = new StringBuilder(256);
            GetClassName(hWnd, className, 256);
            if (className.ToString() != "Chrome_WidgetWin_1") return true;
            StringBuilder title = new StringBuilder(512);
            GetWindowText(hWnd, title, 512);
            if (title.Length == 0) return true;
            if (titleMatch != null && titleMatch.Length > 0 && title.ToString().IndexOf(titleMatch, StringComparison.OrdinalIgnoreCase) < 0) return true;
            RECT rect;
            if (!GetFrameBounds(hWnd, out rect)) return true;
            long area = (long)(rect.Right - rect.Left) * (rect.Bottom - rect.Top);
            if (area < 10000) return true;
            if (area > bestScore)
            {
                bestScore = area;
                best = hWnd;
            }
            return true;
        }, IntPtr.Zero);
        return best;
    }

    public static bool GetFrameBounds(IntPtr hWnd, out RECT rect)
    {
        rect = new RECT();
        int result = DwmGetWindowAttribute(hWnd, DWMWA_EXTENDED_FRAME_BOUNDS, out rect, Marshal.SizeOf(typeof(RECT)));
        if (result != 0 || rect.Right <= rect.Left || rect.Bottom <= rect.Top)
        {
            rect = new RECT();
            if (!GetWindowRect(hWnd, out rect)) return false;
        }
        return rect.Right > rect.Left && rect.Bottom > rect.Top;
    }

    public static void HideWindow(IntPtr hWnd)
    {
        if (hWnd != IntPtr.Zero) ShowWindow(hWnd, 0);
    }

    public static void ShowRestore(IntPtr hWnd, bool wasIconic)
    {
        if (hWnd == IntPtr.Zero) return;
        if (wasIconic || IsIconic(hWnd))
        {
            ShowWindow(hWnd, 9);
        }
        else
        {
            ShowWindow(hWnd, 5);
        }
        SetForegroundWindow(hWnd);
    }

    public static void BringToFront(IntPtr hWnd)
    {
        if (hWnd == IntPtr.Zero) return;
        if (IsIconic(hWnd)) ShowWindow(hWnd, 9);
        SetForegroundWindow(hWnd);
        SetWindowPos(hWnd, new IntPtr(-2), 0, 0, 0, 0, 0x0001 | 0x0002);
    }

    /**
     * Turn the hidden window into a screen-covering, borderless-looking
     * surface by positioning its CLIENT area over the whole monitor. The
     * title bar/frame is moved off-screen, so no style mutation is needed.
     */
    public static bool MakeClientFullscreen(IntPtr hWnd, int screenLeft, int screenTop, int screenWidth, int screenHeight, bool showWindow)
    {
        if (hWnd == IntPtr.Zero) return false;
        if (IsZoomed(hWnd) || IsIconic(hWnd)) ShowWindow(hWnd, 9);

        RECT windowRect;
        if (!GetWindowRect(hWnd, out windowRect)) return false;
        RECT clientRect;
        if (!GetClientRect(hWnd, out clientRect)) return false;
        POINT clientOrigin = new POINT();
        if (!ClientToScreen(hWnd, ref clientOrigin)) return false;

        int offsetLeft = clientOrigin.X - windowRect.Left;
        int offsetTop = clientOrigin.Y - windowRect.Top;
        int offsetRight = windowRect.Right - (clientOrigin.X + clientRect.Right);
        int offsetBottom = windowRect.Bottom - (clientOrigin.Y + clientRect.Bottom);

        int left = screenLeft - offsetLeft;
        int top = screenTop - offsetTop;
        int width = screenWidth + offsetLeft + offsetRight;
        int height = screenHeight + offsetTop + offsetBottom;

        uint flags = 0x0010;
        if (showWindow) flags |= 0x0040;
        bool placed = SetWindowPos(hWnd, new IntPtr(-1), left, top, width, height, flags);
        if (showWindow) SetForegroundWindow(hWnd);
        return placed;
    }

    public static string[] ListWindows(int screenX, int screenY, int screenWidth, int screenHeight, IntPtr exclude)
    {
        List<string> rows = new List<string>();
        EnumWindows(delegate(IntPtr hWnd, IntPtr lParam)
        {
            if (hWnd == exclude) return true;
            if (!IsWindowVisible(hWnd) || IsIconic(hWnd)) return true;

            int exStyle = GetWindowLong(hWnd, GWL_EXSTYLE);
            if ((exStyle & WS_EX_TOOLWINDOW) != 0 && (exStyle & WS_EX_APPWINDOW) == 0) return true;

            int cloaked = 0;
            DwmGetWindowAttribute(hWnd, DWMWA_CLOAKED, out cloaked, 4);
            if (cloaked != 0) return true;

            StringBuilder title = new StringBuilder(512);
            GetWindowText(hWnd, title, 512);
            if (title.Length == 0) return true;

            StringBuilder className = new StringBuilder(256);
            GetClassName(hWnd, className, 256);
            string cls = className.ToString();
            if (IsShellClass(cls)) return true;

            RECT rect;
            if (!GetFrameBounds(hWnd, out rect)) return true;

            int left = Math.Max(rect.Left, screenX);
            int top = Math.Max(rect.Top, screenY);
            int right = Math.Min(rect.Right, screenX + screenWidth);
            int bottom = Math.Min(rect.Bottom, screenY + screenHeight);
            int width = right - left;
            int height = bottom - top;
            if (width < 80 || height < 40) return true;

            rows.Add(hWnd.ToInt64().ToString() + "|" + Clean(title.ToString()) + "|" + cls + "|" + left + "|" + top + "|" + width + "|" + height);
            return true;
        }, IntPtr.Zero);
        return rows.ToArray();
    }

    private static bool IsShellClass(string name)
    {
        return name == "Progman"
            || name == "WorkerW"
            || name == "Shell_TrayWnd"
            || name == "Shell_SecondaryTrayWnd"
            || name == "Windows.UI.Core.CoreWindow"
            || name == "ApplicationManager_DesktopShellWindow";
    }

    private static string Clean(string value)
    {
        StringBuilder builder = new StringBuilder(value.Length);
        foreach (char c in value)
        {
            if (c == '|' || c == '\r' || c == '\n' || c == '\t')
            {
                builder.Append(' ');
            }
            else if (!char.IsControl(c))
            {
                builder.Append(c);
            }
        }
        if (builder.Length > 200) return builder.ToString(0, 200);
        return builder.ToString();
    }
}
'@

[WeChatShotNative]::EnableDpi() | Out-Null

$hwnd = [WeChatShotNative]::FindDshWindow($TitleMatch)
if ($hwnd -eq [IntPtr]::Zero -and -not [string]::IsNullOrWhiteSpace($TitleMatch)) {
    $hwnd = [WeChatShotNative]::FindDshWindow('')
}

if ($Mode -eq 'restore') {
    if ($hwnd -ne [IntPtr]::Zero) {
        [WeChatShotNative]::ShowRestore($hwnd, [WeChatShotNative]::IsIconic($hwnd)) | Out-Null
    }
    Write-Output '{"ok":true,"mode":"restore"}'
    exit 0
}

if ($Mode -eq 'restore-state') {
    if ([string]::IsNullOrWhiteSpace($StatePath) -or -not (Test-Path -LiteralPath $StatePath)) {
        throw 'restore-state requires an existing StatePath'
    }
    $state = Get-Content -LiteralPath $StatePath -Raw | ConvertFrom-Json
    $target = [IntPtr]::new([long]$state.hwnd)
    if (-not [WeChatShotNative]::IsWindow($target)) {
        $target = [WeChatShotNative]::FindDshWindow($TitleMatch)
    }
    if ($target -ne [IntPtr]::Zero) {
        [WeChatShotNative]::ShowWindow($target, 0) | Out-Null
        if (-not [bool]$state.topmost) {
            [WeChatShotNative]::SetWindowPos($target, [IntPtr](-2), 0, 0, 0, 0, 0x0001 -bor 0x0002 -bor 0x0010) | Out-Null
        }
        if ([bool]$state.iconic) {
            [WeChatShotNative]::ShowWindow($target, 6) | Out-Null
        }
        elseif ([bool]$state.zoomed) {
            [WeChatShotNative]::ShowWindow($target, 3) | Out-Null
            [WeChatShotNative]::SetForegroundWindow($target) | Out-Null
        }
        else {
            $rect = $state.rect
            $width = [int]$rect.right - [int]$rect.left
            $height = [int]$rect.bottom - [int]$rect.top
            [WeChatShotNative]::SetWindowPos($target, [IntPtr]::Zero, [int]$rect.left, [int]$rect.top, $width, $height, 0x0004 -bor 0x0010 -bor 0x0040) | Out-Null
            [WeChatShotNative]::SetForegroundWindow($target) | Out-Null
        }
    }
    Remove-Item -LiteralPath $StatePath -Force -ErrorAction SilentlyContinue
    Write-Output '{"ok":true,"mode":"restore-state"}'
    exit 0
}

if ($Mode -eq 'show') {
    if ([string]::IsNullOrWhiteSpace($StatePath) -or -not (Test-Path -LiteralPath $StatePath)) {
        throw 'show requires an existing StatePath'
    }
    $state = Get-Content -LiteralPath $StatePath -Raw | ConvertFrom-Json
    $target = [IntPtr]::new([long]$state.hwnd)
    if (-not [WeChatShotNative]::IsWindow($target)) {
        $target = [WeChatShotNative]::FindDshWindow($TitleMatch)
    }
    if ($target -ne [IntPtr]::Zero) {
        $current = New-Object WeChatShotNative+RECT
        [WeChatShotNative]::GetWindowRect($target, [ref]$current) | Out-Null
        $currentWidth = $current.Right - $current.Left
        $currentHeight = $current.Bottom - $current.Top
        [WeChatShotNative]::SetWindowPos($target, [IntPtr](-1), $current.Left, $current.Top, $currentWidth, $currentHeight, 0x0010 -bor 0x0040) | Out-Null
        [WeChatShotNative]::ShowWindow($target, 5) | Out-Null
        [WeChatShotNative]::SetForegroundWindow($target) | Out-Null
        Start-Sleep -Milliseconds 80
        if (-not [WeChatShotNative]::IsWindowVisible($target)) {
            [WeChatShotNative]::ShowWindow($target, 9) | Out-Null
            [WeChatShotNative]::SetWindowPos($target, [IntPtr](-1), $current.Left, $current.Top, $currentWidth, $currentHeight, 0x0010 -bor 0x0040) | Out-Null
            Start-Sleep -Milliseconds 80
        }
        if (-not [WeChatShotNative]::IsWindowVisible($target)) {
            throw 'the screenshot window did not become visible'
        }
    }
    else {
        throw 'the screenshot window could not be located'
    }
    Write-Output '{"ok":true,"mode":"show","visible":true}'
    exit 0
}

if ([string]::IsNullOrWhiteSpace($Out)) {
    throw 'Out is required for capture modes'
}

if ($hwnd -ne [IntPtr]::Zero) {
    $screen = [System.Windows.Forms.Screen]::FromHandle($hwnd)
} else {
    $screen = [System.Windows.Forms.Screen]::PrimaryScreen
}
if ($null -eq $screen) {
    $screen = [System.Windows.Forms.Screen]::PrimaryScreen
}

$bounds = $screen.Bounds
$wasIconic = ($hwnd -ne [IntPtr]::Zero) -and [WeChatShotNative]::IsIconic($hwnd)
$hidden = $false
$held = $false
$stateSaved = $false
$windows = @()

if ($Mode -eq 'desktop' -and $hwnd -ne [IntPtr]::Zero -and $HoldFullscreen) {
    if ([string]::IsNullOrWhiteSpace($StatePath)) {
        throw 'StatePath is required when HoldFullscreen is set'
    }
    $original = New-Object WeChatShotNative+RECT
    [WeChatShotNative]::GetWindowRect($hwnd, [ref]$original) | Out-Null
    $state = [ordered]@{
        hwnd    = $hwnd.ToInt64()
        rect    = [ordered]@{ left = $original.Left; top = $original.Top; right = $original.Right; bottom = $original.Bottom }
        zoomed  = [bool][WeChatShotNative]::IsZoomed($hwnd)
        iconic  = [bool][WeChatShotNative]::IsIconic($hwnd)
        topmost = (([WeChatShotNative]::GetWindowLong($hwnd, -20) -band 0x8) -ne 0)
    }
    $state | ConvertTo-Json -Depth 6 | Set-Content -LiteralPath $StatePath -Encoding UTF8
    $stateSaved = $true
}

try {
    if ($Mode -eq 'desktop' -and $hwnd -ne [IntPtr]::Zero) {
        [WeChatShotNative]::HideWindow($hwnd) | Out-Null
        $hidden = $true
        Start-Sleep -Milliseconds $HideDelayMs
        [WeChatShotNative]::DwmFlush() | Out-Null
    }
    elseif ($Mode -eq 'window' -and $hwnd -ne [IntPtr]::Zero) {
        [WeChatShotNative]::BringToFront($hwnd) | Out-Null
        Start-Sleep -Milliseconds 160
        [WeChatShotNative]::DwmFlush() | Out-Null
    }

    $rows = [WeChatShotNative]::ListWindows($bounds.Left, $bounds.Top, $bounds.Width, $bounds.Height, $hwnd)
    foreach ($row in $rows) {
        $parts = [regex]::Split($row, '\|', 7)
        if ($parts.Length -eq 7) {
            $windows += [ordered]@{
                title     = $parts[1]
                className = $parts[2]
                x         = [int]$parts[3]
                y         = [int]$parts[4]
                width     = [int]$parts[5]
                height    = [int]$parts[6]
            }
        }
    }

    $bitmap = New-Object System.Drawing.Bitmap($bounds.Width, $bounds.Height)
    try {
        $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
        try {
            $graphics.CopyFromScreen($bounds.Location, [System.Drawing.Point]::Empty, $bounds.Size)
        }
        finally {
            $graphics.Dispose()
        }

        $directory = [System.IO.Path]::GetDirectoryName($Out)
        if ($directory -and -not (Test-Path -LiteralPath $directory)) {
            New-Item -ItemType Directory -Path $directory -Force | Out-Null
        }
        $bitmap.Save($Out, [System.Drawing.Imaging.ImageFormat]::Png)
    }
    finally {
        $bitmap.Dispose()
    }

    if ($Mode -eq 'desktop' -and $hwnd -ne [IntPtr]::Zero -and $HoldFullscreen) {
        $placed = [WeChatShotNative]::MakeClientFullscreen($hwnd, $bounds.Left, $bounds.Top, $bounds.Width, $bounds.Height, (-not $KeepHidden))
        if ($placed) {
            $held = $true
        }
    }
}
finally {
    if ($hidden -and -not $held) {
        [WeChatShotNative]::ShowRestore($hwnd, $wasIconic) | Out-Null
        Start-Sleep -Milliseconds 30
        if ($stateSaved) {
            Remove-Item -LiteralPath $StatePath -Force -ErrorAction SilentlyContinue
        }
    }
}

$result = [ordered]@{
    ok         = $true
    mode       = $Mode
    windowHeld = $held
    screen     = [ordered]@{
        x      = $bounds.X
        y      = $bounds.Y
        width  = $bounds.Width
        height = $bounds.Height
    }
    windows    = @($windows)
}

$result | ConvertTo-Json -Compress -Depth 8
