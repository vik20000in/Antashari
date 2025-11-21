# Check download progress
while ($true) {
    Clear-Host
    Write-Host "=" * 60 -ForegroundColor Cyan
    Write-Host "🎵 DOWNLOAD PROGRESS CHECK" -ForegroundColor Cyan
    Write-Host "=" * 60 -ForegroundColor Cyan
    Write-Host ""
    
    $downloaded = Get-ChildItem audio\*.mp3 -ErrorAction SilentlyContinue
    $count = ($downloaded | Measure-Object).Count
    $totalSize = ($downloaded | Measure-Object -Property Length -Sum).Sum / 1MB
    
    Write-Host "Downloaded: $count / 40 songs" -ForegroundColor Yellow
    Write-Host "Total size: $([math]::Round($totalSize, 2)) MB" -ForegroundColor Cyan
    Write-Host ""
    
    if ($count -gt 0) {
        Write-Host "Recent downloads:" -ForegroundColor Green
        $downloaded | Sort-Object LastWriteTime -Descending | Select-Object -First 5 | 
            Select-Object Name, @{Name="Size (MB)";Expression={[math]::Round($_.Length/1MB, 2)}}, LastWriteTime | 
            Format-Table -AutoSize
    }
    
    if ($count -ge 40) {
        Write-Host "✅ ALL 40 SONGS DOWNLOADED!" -ForegroundColor Green
        break
    }
    
    Write-Host "Refreshing in 10 seconds... (Press Ctrl+C to stop monitoring)" -ForegroundColor Gray
    Start-Sleep -Seconds 10
}
