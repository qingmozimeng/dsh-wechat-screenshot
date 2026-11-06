$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Drawing
[Console]::InputEncoding=New-Object System.Text.UTF8Encoding($false)
[Console]::OutputEncoding=New-Object System.Text.UTF8Encoding($false)
. (Join-Path $PSScriptRoot '..\native.ps1')
[WeChatShotNative]::EnableDpi() | Out-Null
while($null -ne ($line=[Console]::In.ReadLine())) {
 try {
  $r=$line|ConvertFrom-Json
  $clock=[System.Diagnostics.Stopwatch]::StartNew()
  if($r.out){
   [WeChatShotNative]::DwmFlush() | Out-Null
   $bitmap=New-Object System.Drawing.Bitmap([int]$r.width,[int]$r.height)
   try {
    $graphics=[System.Drawing.Graphics]::FromImage($bitmap)
    try{$graphics.CopyFromScreen([int]$r.x,[int]$r.y,0,0,(New-Object System.Drawing.Size([int]$r.width,[int]$r.height)))}finally{$graphics.Dispose()}
    $bitmap.Save([string]$r.out,[System.Drawing.Imaging.ImageFormat]::Bmp)
   }finally{$bitmap.Dispose()}
  }
  $rows=[WeChatShotNative]::ListWindows([int]$r.x,[int]$r.y,[int]$r.width,[int]$r.height,[IntPtr]([long]$r.hwnd))
  $windows=@(foreach($row in $rows){$p=[regex]::Split($row,'\|',7);if($p.Length -eq 7){@{x=[int]$p[3];y=[int]$p[4];width=[int]$p[5];height=[int]$p[6]}}})
  [Console]::Out.WriteLine((@{id=$r.id;windows=$windows;captureMs=$clock.Elapsed.TotalMilliseconds}|ConvertTo-Json -Compress -Depth 5));[Console]::Out.Flush()
 }catch{[Console]::Out.WriteLine((@{id=$r.id;windows=@();error=$_.Exception.Message}|ConvertTo-Json -Compress));[Console]::Out.Flush()}
}
