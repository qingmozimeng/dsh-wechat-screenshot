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
    public static extern IntPtr GetForegroundWindow();

    [DllImport("user32.dll")]
    public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint processId);

    [DllImport("user32.dll")]
    public static extern bool AttachThreadInput(uint idAttach, uint idAttachTo, bool attach);

    [DllImport("user32.dll")]
    public static extern bool BringWindowToTop(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern IntPtr SetActiveWindow(IntPtr hWnd);

    [DllImport("user32.dll")]
    public static extern IntPtr SetFocus(IntPtr hWnd);

    [DllImport("kernel32.dll")]
    public static extern uint GetCurrentThreadId();

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

    public static bool Activate(IntPtr hWnd)
    {
        if (hWnd == IntPtr.Zero) return false;
        uint processId;
        IntPtr foreground = GetForegroundWindow();
        uint foregroundThread = 0;
        if (foreground != IntPtr.Zero)
        {
            foregroundThread = GetWindowThreadProcessId(foreground, out processId);
        }
        uint targetThread = GetWindowThreadProcessId(hWnd, out processId);
        uint currentThread = GetCurrentThreadId();
        bool attachedForeground = false;
        bool attachedTarget = false;
        try
        {
            if (foregroundThread != 0 && foregroundThread != currentThread)
            {
                attachedForeground = AttachThreadInput(currentThread, foregroundThread, true);
            }
            if (targetThread != 0 && targetThread != currentThread)
            {
                attachedTarget = AttachThreadInput(currentThread, targetThread, true);
            }
            ShowWindow(hWnd, 5);
            SetWindowPos(hWnd, IntPtr.Zero, 0, 0, 0, 0, 0x0001 | 0x0002 | 0x0040);
            BringWindowToTop(hWnd);
            SetActiveWindow(hWnd);
            SetForegroundWindow(hWnd);
            SetFocus(hWnd);
            return true;
        }
        finally
        {
            if (attachedTarget) AttachThreadInput(currentThread, targetThread, false);
            if (attachedForeground) AttachThreadInput(currentThread, foregroundThread, false);
        }
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
        bool placed = SetWindowPos(hWnd, IntPtr.Zero, left, top, width, height, flags);
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
