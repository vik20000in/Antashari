# Parallel Download Script with Async Operations
# Downloads multiple songs simultaneously for faster bulk downloads

param(
    [int]$MaxParallelJobs = 3,  # Max simultaneous downloads
    [switch]$Force              # Re-download existing files
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🚀 Parallel Song Downloader" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Max parallel downloads: $MaxParallelJobs" -ForegroundColor Yellow
Write-Host ""

# List of all songs to download
$songs = @(
    "awaara-hoon.mp3", "kal-ho-naa-ho.mp3", "chaiya-chaiya.mp3", "jo-jeeta-wohi-sikandar.mp3",
    "piya-tu-ab-to-aaja.mp3", "funtoosh-banaya-tune.mp3", "baarish-mein-tume-dekha.mp3",
    "badi-mushkil-hai.mp3", "barso-re-megha.mp3", "bhole-shankara.mp3", "maa-tujhe-salaam.mp3",
    "mere-haath-mein-teri-bansuri.mp3", "mere-sapno-ki-rani.mp3", "mohabbat-barsa-dena-tu.mp3",
    "yeh-kya-hua.mp3", "yeh-dua-hai-meri.mp3", "raaz-ki-baat.mp3", "raat-bhar-jaagta-hoon-main.mp3",
    "roli-roli-gulal-khelo.mp3", "laila-o-laila.mp3", "kuch-kuch-hota-hai.mp3",
    "kabhi-kabhi-mere-dil-mein.mp3", "jab-tak-hai-jaan.mp3", "jaadu-teri-nazar.mp3",
    "dilbar-dilbar.mp3", "pehla-nasha.mp3", "arre-dekhega-india.mp3", "likhe-jo-khat-tumhe.mp3",
    "kahe-toh-pardes.mp3", "geet-gata-hoon-main.mp3", "jaane-bhi-do-yaaro.mp3",
    "dil-dhoondta-hai.mp3", "na-jane-kyon.mp3", "tere-haath-mein.mp3", "soni-soni-ankh-marey.mp3",
    "ik-teri-muskarahat.mp3", "khwaab-ho-tum-ya-koi-khyal.mp3", "chod-de-saari-duniya.mp3",
    "gulab-bahar.mp3", "vaada-raha-sanam.mp3", "tujhe-dekha-to.mp3", "koi-mil-gaya.mp3",
    "dil-chahta-hai.mp3", "tere-liye.mp3", "main-hoon-na.mp3", "tumhi-dekho-na.mp3",
    "kajra-re.mp3", "rang-de-basanti.mp3", "desi-girl.mp3", "jai-ho.mp3", "rock-on.mp3",
    "tum-se-hi.mp3", "mauja-hi-mauja.mp3", "om-shanti-om.mp3", "kaho-naa-pyaar-hai.mp3",
    "aaj-ki-raat.mp3", "pehli-nazar-mein.mp3", "maahi-ve.mp3", "mitwa.mp3", "tum-hi-ho.mp3",
    "badtameez-dil.mp3", "naina.mp3", "galliyan.mp3", "gerua.mp3", "channa-mereya.mp3",
    "bulleya.mp3", "ae-watan.mp3", "pehli-dafa.mp3", "tere-sang-yaara.mp3", "agar-tum-saath-ho.mp3",
    "bekhayali.mp3", "mere-naam-tu.mp3", "sanam-re.mp3", "kesariya.mp3", "apna-bana-le.mp3",
    "srivalli.mp3", "raataan-lambiyan.mp3", "ranjha.mp3", "vai-vai.mp3", "chaleya.mp3",
    "tere-vaaste.mp3", "maan-meri-jaan.mp3", "oo-antava.mp3", "besharam-rang.mp3",
    "jhoome-jo-pathaan.mp3", "tum-kya-mile.mp3", "what-jhumka.mp3", "ve-kamleya.mp3",
    "arjan-vailly.mp3"
)

# Filter out existing files unless Force is specified
if (-not $Force) {
    $songsToDownload = $songs | Where-Object { -not (Test-Path "assets\audio\$_") }
    $skippedCount = $songs.Count - $songsToDownload.Count
    
    Write-Host "Existing files: $skippedCount (will skip)" -ForegroundColor Green
    Write-Host "Files to download: $($songsToDownload.Count)" -ForegroundColor Yellow
    Write-Host ""
} else {
    $songsToDownload = $songs
    Write-Host "Force mode: Re-downloading all $($songs.Count) files" -ForegroundColor Yellow
    Write-Host ""
}

if ($songsToDownload.Count -eq 0) {
    Write-Host "✅ All songs already downloaded!" -ForegroundColor Green
    exit 0
}

# Create scriptblock for parallel downloads
$downloadScriptBlock = {
    param($song)
    
    $result = @{
        Song = $song
        Success = $false
        Error = $null
        Size = 0
    }
    
    try {
        $output = python scripts\simple_download.py $song 2>&1
        
        if ($LASTEXITCODE -eq 0) {
            $result.Success = $true
            $filePath = "assets\audio\$song"
            if (Test-Path $filePath) {
                $result.Size = [math]::Round((Get-Item $filePath).Length / 1MB, 2)
            }
        } else {
            $result.Error = "Exit code: $LASTEXITCODE"
        }
    } catch {
        $result.Error = $_.Exception.Message
    }
    
    return $result
}

# Track progress
$total = $songsToDownload.Count
$completed = 0
$successful = 0
$failed = 0
$jobs = @()

Write-Host "Starting parallel downloads..." -ForegroundColor Cyan
Write-Host ""

# Create runspace pool for parallel execution
$runspacePool = [runspacefactory]::CreateRunspacePool(1, $MaxParallelJobs)
$runspacePool.Open()

# Queue all downloads
foreach ($song in $songsToDownload) {
    $powershell = [powershell]::Create().AddScript($downloadScriptBlock).AddArgument($song)
    $powershell.RunspacePool = $runspacePool
    
    $jobs += [PSCustomObject]@{
        Song = $song
        PowerShell = $powershell
        Handle = $powershell.BeginInvoke()
    }
}

# Monitor progress
$startTime = Get-Date

while ($jobs | Where-Object { -not $_.Handle.IsCompleted }) {
    $completedNow = ($jobs | Where-Object { $_.Handle.IsCompleted }).Count
    
    if ($completedNow -ne $completed) {
        $completed = $completedNow
        $percent = [math]::Round(($completed / $total) * 100)
        $elapsed = (Get-Date) - $startTime
        
        Write-Host "`r[Progress] $completed/$total ($percent%) | Elapsed: $($elapsed.ToString('mm\:ss'))" -NoNewline -ForegroundColor Cyan
    }
    
    Start-Sleep -Milliseconds 500
}

Write-Host ""
Write-Host ""

# Collect results
$results = @()
foreach ($job in $jobs) {
    $result = $job.PowerShell.EndInvoke($job.Handle)
    $results += $result
    
    if ($result.Success) {
        Write-Host "✅ $($result.Song) - $($result.Size) MB" -ForegroundColor Green
        $successful++
    } else {
        Write-Host "❌ $($result.Song) - $($result.Error)" -ForegroundColor Red
        $failed++
    }
    
    $job.PowerShell.Dispose()
}

$runspacePool.Close()
$runspacePool.Dispose()

# Summary
$totalTime = (Get-Date) - $startTime

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📊 DOWNLOAD SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Total requested:  $total" -ForegroundColor White
Write-Host "✅ Successful:    $successful" -ForegroundColor Green
Write-Host "❌ Failed:        $failed" -ForegroundColor Red
Write-Host "⏱️  Total time:    $($totalTime.ToString('mm\:ss'))" -ForegroundColor Yellow
Write-Host "⚡ Avg per song:  $([math]::Round($totalTime.TotalSeconds / $total, 1))s" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Show audio folder status
$allFiles = Get-ChildItem assets\audio\*.mp3 -ErrorAction SilentlyContinue
$totalSize = ($allFiles | Measure-Object -Property Length -Sum).Sum / 1MB

Write-Host "📁 Audio folder status:" -ForegroundColor Cyan
Write-Host "   Files: $($allFiles.Count)" -ForegroundColor White
Write-Host "   Total size: $([math]::Round($totalSize, 2)) MB" -ForegroundColor White
Write-Host ""
Write-Host "✨ Parallel download complete!" -ForegroundColor Green
