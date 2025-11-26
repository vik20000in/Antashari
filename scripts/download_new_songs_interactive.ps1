# Download URLs for 2023-2025 Bollywood Songs
# Manual URL list for reliable downloads

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🎵 Downloading 2023-2025 Bollywood Hits" -ForegroundColor Cyan  
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Please provide YouTube URLs for the following songs:" -ForegroundColor Yellow
Write-Host "You can search YouTube and paste URLs, or skip songs." -ForegroundColor Gray
Write-Host ""

# List of songs to download
$songsNeeded = @(
    "satranga.mp3 - Satranga (Animal)",
    "pehle-bhi-main.mp3 - Pehle Bhi Main (Animal)",
    "o-maahi.mp3 - O Maahi (Dunki)",
    "lutt-putt-gaya.mp3 - Lutt Putt Gaya (Dunki)",
    "jamal-kudu.mp3 - Jamal Kudu (Animal)",
    "ajaa-sajna-milke.mp3 - Ajaa Sajna Milke (Satyaprem Ki Katha)",
    "naseeb-se.mp3 - Naseeb Se (Satyaprem Ki Katha)",
    "aaj-ki-raat-stree2.mp3 - Aaj Ki Raat (Stree 2)",
    "tauba-tauba.mp3 - Tauba Tauba (Bad Newz)",
    "husn-tera-tauba-tauba.mp3 - Husn Tera Tauba Tauba (Bad Newz)",
    "akhiyaan-gulaab.mp3 - Akhiyaan Gulaab (Teri Baaton Mein)",
    "laal-peeli-akhiyaan.mp3 - Laal Peeli Akhiyaan (Teri Baaton Mein)",
    "o-sajni-re.mp3 - O Sajni Re (Laapataa Ladies)",
    "angaaron.mp3 - Angaaron (Pushpa 2)",
    "peelings.mp3 - Peelings (Pushpa 2)",
    "sooseki.mp3 - Sooseki (Pushpa 2)",
    "saami-saami-pushpa.mp3 - Saami Saami (Pushpa)",
    "kasam-se.mp3 - Kasam Se (Animal)",
    "chal-kudiye.mp3 - Chal Kudiye (Jigra)",
    "phoolon-ka-taaron-ka.mp3 - Phoolon Ka Taaron Ka (Khel Khel Mein)",
    "hauli-hauli.mp3 - Hauli Hauli (Khel Khel Mein)",
    "tu-hai-kahan.mp3 - Tu Hai Kahan (Yodha)",
    "arjan-vailly-reprise.mp3 - Arjan Vailly Reprise (Animal)",
    "deva-deva.mp3 - Deva Deva (Brahmastra)",
    "sun-sajni.mp3 - Sun Sajni (Maidaan)",
    "khudaya-ve.mp3 - Khudaya Ve (Satyaprem Ki Katha)",
    "chaleya-reprise.mp3 - Chaleya Reprise (Jawan)",
    "sajni-laapataa.mp3 - Sajni (Laapataa Ladies)",
    "tere-pyaar-mein.mp3 - Tere Pyaar Mein (Tu Jhoothi Main Makkaar)",
    "pyaar-hota-kayi-baar-hai.mp3 - Pyaar Hota Kayi Baar Hai (Tu Jhoothi Main Makkaar)"
)

$successful = 0
$skipped = 0

foreach ($songInfo in $songsNeeded) {
    $parts = $songInfo.Split(" - ")
    $filename = $parts[0].Trim()
    $title = $parts[1].Trim()
    
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
    Write-Host "🎵 $title" -ForegroundColor Cyan
    
    # Check if already exists
    if (Test-Path "assets\audio\$filename") {
        Write-Host "✅ Already downloaded!" -ForegroundColor Green
        $successful++
        Write-Host ""
        continue
    }
    
    Write-Host "Enter YouTube URL (or press Enter to skip): " -NoNewline -ForegroundColor Yellow
    $url = Read-Host
    
    if ([string]::IsNullOrWhiteSpace($url)) {
        Write-Host "⏭️  Skipped" -ForegroundColor Gray
        $skipped++
        Write-Host ""
        continue
    }
    
    Write-Host "⏳ Downloading..." -ForegroundColor Cyan
    
    try {
        $output = python scripts\simple_download.py $filename $url 2>&1 | Out-String
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Downloaded successfully!" -ForegroundColor Green
            $successful++
        } else {
            Write-Host "❌ Download failed" -ForegroundColor Red
            Write-Host $output -ForegroundColor DarkRed
        }
    } catch {
        Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
    }
    
    Write-Host ""
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📊 SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Downloaded/Existing: $successful" -ForegroundColor Green
Write-Host "⏭️  Skipped: $skipped" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($successful -gt 0) {
    Write-Host "Next: Trim audio files to 3 minutes" -ForegroundColor Yellow
    Write-Host "  .\scripts\trim_audio_files.ps1" -ForegroundColor Cyan
}
