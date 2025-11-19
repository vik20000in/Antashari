# Auto-download all songs from YouTube
# This script runs each download command from DOWNLOAD_COMMANDS.txt

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🎵 Auto-Download All Songs" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# List of all songs to download
$songs = @(
    "chaiya-chaiya.mp3",
    "jo-jeeta-wohi-sikandar.mp3",
    "aashiqui-aa-gai.mp3",
    "baarish-ban-jaana.mp3",
    "chandni-o-meri-chandni.mp3",
    "dil-diwana.mp3",
    "ek-haseena-thi.mp3",
    "faisal-khan.mp3",
    "gaata-rahe-mera-dil.mp3",
    "haan-main-tumhara.mp3",
    "itna-toh-mujhe.mp3",
    "jaadu-teri-nazar.mp3",
    "kambal-leke-udta.mp3",
    "lag-ja-gale.mp3",
    "madhuban-madhuban.mp3",
    "naina-bhar-gaye.mp3",
    "om-shanti-om.mp3",
    "pyar-ka-rog.mp3",
    "raaz-ki-baat.mp3"
)

$total = $songs.Count
$current = 0
$successful = 0
$failed = 0
$skipped = 0

Write-Host "Total songs to download: $total" -ForegroundColor Yellow
Write-Host ""

foreach ($song in $songs) {
    $current++
    
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "[$current/$total] Processing: $song" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Cyan
    
    # Check if file already exists
    $filePath = "audio\$song"
    if (Test-Path $filePath) {
        Write-Host "⏭️  SKIPPED - File already exists" -ForegroundColor Green
        $skipped++
        Write-Host ""
        continue
    }
    
    # Run download command
    Write-Host "Running: python simple_download.py $song" -ForegroundColor Cyan
    
    try {
        python simple_download.py $song
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ SUCCESS - $song downloaded!" -ForegroundColor Green
            $successful++
        } else {
            Write-Host "❌ FAILED - $song download failed" -ForegroundColor Red
            $failed++
        }
    } catch {
        Write-Host "❌ ERROR - $song download error: $_" -ForegroundColor Red
        $failed++
    }
    
    Write-Host ""
    Start-Sleep -Seconds 2  # Brief pause between downloads
}

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📊 DOWNLOAD SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Total songs:     $total" -ForegroundColor White
Write-Host "✅ Successful:   $successful" -ForegroundColor Green
Write-Host "⏭️  Skipped:      $skipped" -ForegroundColor Yellow
Write-Host "❌ Failed:       $failed" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Show final file list
Write-Host "📁 Checking audio folder..." -ForegroundColor Cyan
Get-ChildItem audio\*.mp3 | Select-Object Name, @{Name="Size (MB)";Expression={[math]::Round($_.Length/1MB, 2)}} | Format-Table -AutoSize

Write-Host "✨ Download process complete!" -ForegroundColor Green
