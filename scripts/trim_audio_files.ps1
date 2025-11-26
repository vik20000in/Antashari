# Trim all audio files to maximum 3 minutes (180 seconds)
# Requires ffmpeg to be installed

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Audio File Trimmer (Max 3 minutes)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if ffmpeg is installed
$ffmpegPath = $null

# Try to find ffmpeg in PATH
try {
    $ffmpegPath = (Get-Command ffmpeg -ErrorAction SilentlyContinue).Source
}
catch { }

# If not in PATH, search common locations
if (-not $ffmpegPath) {
    $searchPaths = @(
        "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\Gyan.FFmpeg*\*\bin\ffmpeg.exe",
        "C:\Program Files\ffmpeg\bin\ffmpeg.exe",
        "C:\ffmpeg\bin\ffmpeg.exe"
    )
    
    foreach ($pattern in $searchPaths) {
        $found = Get-ChildItem -Path $pattern -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($found) {
            $ffmpegPath = $found.FullName
            break
        }
    }
}

if (-not $ffmpegPath) {
    Write-Host "ERROR: ffmpeg not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install ffmpeg first:" -ForegroundColor Yellow
    Write-Host "1. Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    Write-Host "2. Or use winget: winget install ffmpeg" -ForegroundColor Yellow
    Write-Host "3. Or use chocolatey: choco install ffmpeg" -ForegroundColor Yellow
    exit 1
}

Write-Host "ffmpeg found: $ffmpegPath" -ForegroundColor Green
Write-Host ""

# Get ffprobe path (should be in same directory as ffmpeg)
$ffprobePath = Join-Path (Split-Path $ffmpegPath) "ffprobe.exe"
if (-not (Test-Path $ffprobePath)) {
    Write-Host "ERROR: ffprobe not found!" -ForegroundColor Red
    exit 1
}

# Get all MP3 files
$audioFiles = Get-ChildItem assets\audio\*.mp3 -ErrorAction SilentlyContinue

if ($audioFiles.Count -eq 0) {
    Write-Host "No MP3 files found in assets/audio folder!" -ForegroundColor Yellow
    exit 0
}

Write-Host "Found $($audioFiles.Count) audio files to process" -ForegroundColor Yellow
Write-Host ""

$total = $audioFiles.Count
$current = 0
$trimmed = 0
$skipped = 0
$failed = 0

# Create temp folder for processing
$tempFolder = "assets\audio\temp_trim"
if (-not (Test-Path $tempFolder)) {
    New-Item -ItemType Directory -Path $tempFolder | Out-Null
}

foreach ($file in $audioFiles) {
    $current++
    
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "[$current/$total] Processing: $($file.Name)" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Cyan
    
    $inputPath = $file.FullName
    $tempPath = Join-Path $tempFolder $file.Name
    
    # Get current duration using ffprobe
    try {
        $durationStr = & $ffprobePath -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$inputPath" 2>&1
        $duration = [math]::Round([decimal]$durationStr, 2)
        
        Write-Host "Current duration: $duration seconds" -ForegroundColor Cyan
        
        if ($duration -le 180) {
            Write-Host "SKIPPED - Already 3 minutes or less" -ForegroundColor Green
            $skipped++
            Write-Host ""
            continue
        }
        
        # Trim to 180 seconds (3 minutes)
        Write-Host "Trimming to 180 seconds..." -ForegroundColor Yellow
        
        $ffmpegArgs = @(
            "-i", "$inputPath",
            "-t", "180",
            "-c:a", "libmp3lame",
            "-b:a", "128k",
            "-y",
            "$tempPath"
        )
        
        $ffmpegProcess = Start-Process -FilePath $ffmpegPath -ArgumentList $ffmpegArgs -NoNewWindow -Wait -PassThru
        
        if ($ffmpegProcess.ExitCode -eq 0 -and (Test-Path $tempPath)) {
            # Get size info
            $oldSize = [math]::Round($file.Length / 1MB, 2)
            $newSize = [math]::Round((Get-Item $tempPath).Length / 1MB, 2)
            
            # Replace original with trimmed version
            Move-Item -Path $tempPath -Destination $inputPath -Force
            
            Write-Host "SUCCESS - Trimmed from $oldSize MB to $newSize MB" -ForegroundColor Green
            $trimmed++
        }
        else {
            Write-Host "FAILED - ffmpeg error" -ForegroundColor Red
            $failed++
            # Clean up temp file if exists
            if (Test-Path $tempPath) {
                Remove-Item $tempPath -Force
            }
        }
    }
    catch {
        Write-Host "ERROR - $_" -ForegroundColor Red
        $failed++
    }
    
    Write-Host ""
}

# Clean up temp folder
if (Test-Path $tempFolder) {
    Remove-Item $tempFolder -Force -Recurse
}

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "TRIM SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Total files:     $total" -ForegroundColor White
Write-Host "Trimmed:         $trimmed" -ForegroundColor Green
Write-Host "Skipped:         $skipped" -ForegroundColor Yellow
Write-Host "Failed:          $failed" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Show final file list
Write-Host "Final audio files:" -ForegroundColor Cyan
Get-ChildItem assets\audio\*.mp3 | Select-Object Name, @{Name="Size (MB)";Expression={[math]::Round($_.Length/1MB, 2)}} | Format-Table -AutoSize

Write-Host "Trim process complete!" -ForegroundColor Green
