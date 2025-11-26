# Download 2023-2025 Songs with Enhanced Search Terms
# Includes movie names and artists for better YouTube search results

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🎵 Downloading 2023-2025 Bollywood Hits" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Array of songs with enhanced search terms (filename, search query)
$songs = @(
    @{File="satranga.mp3"; Query="Satranga Animal movie Arijit Singh"},
    @{File="pehle-bhi-main.mp3"; Query="Pehle Bhi Main Animal Vishal Mishra"},
    @{File="o-maahi.mp3"; Query="O Maahi Dunki Shah Rukh Khan Arijit Singh"},
    @{File="lutt-putt-gaya.mp3"; Query="Lutt Putt Gaya Dunki Arijit Singh"},
    @{File="jamal-kudu.mp3"; Query="Jamal Kudu Animal Bobby Deol"},
    @{File="ajaa-sajna-milke.mp3"; Query="Ajaa Sajna Milke Satyaprem Ki Katha"},
    @{File="naseeb-se.mp3"; Query="Naseeb Se Satyaprem Ki Katha Payal Dev"},
    @{File="aaj-ki-raat-stree2.mp3"; Query="Aaj Ki Raat Stree 2 Madhuri Dixit Tamannaah"},
    @{File="tauba-tauba.mp3"; Query="Tauba Tauba Bad Newz Vicky Kaushal Karan Aujla"},
    @{File="husn-tera-tauba-tauba.mp3"; Query="Husn Tera Tauba Tauba Bad Newz"},
    @{File="akhiyaan-gulaab.mp3"; Query="Akhiyaan Gulaab Teri Baaton Mein Mitraz"},
    @{File="laal-peeli-akhiyaan.mp3"; Query="Laal Peeli Akhiyaan Teri Baaton Mein Shahid Kapoor"},
    @{File="o-sajni-re.mp3"; Query="O Sajni Re Laapataa Ladies Arijit Singh"},
    @{File="angaaron.mp3"; Query="Angaaron Pushpa 2 Allu Arjun"},
    @{File="peelings.mp3"; Query="Peelings Pushpa 2 Allu Arjun"},
    @{File="sooseki.mp3"; Query="Sooseki Pushpa 2 Sreeleela"},
    @{File="saami-saami-pushpa.mp3"; Query="Saami Saami Pushpa Allu Arjun item song"},
    @{File="kasam-se.mp3"; Query="Kasam Se Animal Arijit Singh"},
    @{File="chal-kudiye.mp3"; Query="Chal Kudiye Jigra Alia Bhatt Diljit"},
    @{File="phoolon-ka-taaron-ka.mp3"; Query="Phoolon Ka Taaron Ka Khel Khel Mein Akshay Kumar"},
    @{File="hauli-hauli.mp3"; Query="Hauli Hauli Khel Khel Mein dance song"},
    @{File="tu-hai-kahan.mp3"; Query="Tu Hai Kahan Yodha Sidharth Malhotra"},
    @{File="arjan-vailly-reprise.mp3"; Query="Arjan Vailly reprise Animal"},
    @{File="deva-deva.mp3"; Query="Deva Deva Brahmastra Ranbir Kapoor Amitabh"},
    @{File="sun-sajni.mp3"; Query="Sun Sajni Maidaan Ajay Devgn"},
    @{File="khudaya-ve.mp3"; Query="Khudaya Ve Satyaprem Ki Katha Arijit Singh"},
    @{File="chaleya-reprise.mp3"; Query="Chaleya reprise Jawan Shah Rukh Khan"},
    @{File="sajni-laapataa.mp3"; Query="Sajni Laapataa Ladies Arijit Singh"},
    @{File="tere-pyaar-mein.mp3"; Query="Tere Pyaar Mein Tu Jhoothi Main Makkaar Arijit Singh"},
    @{File="pyaar-hota-kayi-baar-hai.mp3"; Query="Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar"}
)

$total = $songs.Count
$successful = 0
$failed = 0
$current = 0

foreach ($song in $songs) {
    $current++
    $filename = $song.File
    $searchQuery = $song.Query
    
    Write-Host "[$current/$total] Downloading: $filename" -ForegroundColor Cyan
    Write-Host "  Search: $searchQuery" -ForegroundColor Gray
    
    # Check if file already exists
    if (Test-Path "assets\audio\$filename") {
        Write-Host "  ⏭️  Already exists, skipping..." -ForegroundColor Yellow
        $successful++
        continue
    }
    
    try {
        # Use Python script with search query
        # First, search for the song
        Write-Host "  🔍 Searching YouTube..." -ForegroundColor Gray
        
        # Create a temporary Python script to search and download
        $tempScript = @"
import sys
import os
sys.path.insert(0, 'scripts')
from simple_download import search_youtube, download_audio

# Search for the video
video_url, video_title, duration = search_youtube('$searchQuery', max_duration_minutes=10)

if video_url:
    print(f'Found: {video_title} ({duration})')
    print(f'URL: {video_url}')
    
    # Download
    if download_audio(video_url, '$filename'):
        sys.exit(0)
    else:
        sys.exit(1)
else:
    print('No suitable video found')
    sys.exit(1)
"@
        
        $tempFile = "temp_download_$current.py"
        $tempScript | Out-File -FilePath $tempFile -Encoding UTF8
        
        $output = python $tempFile 2>&1
        $exitCode = $LASTEXITCODE
        
        Remove-Item $tempFile -ErrorAction SilentlyContinue
        
        if ($exitCode -eq 0) {
            Write-Host "  ✅ Downloaded successfully!" -ForegroundColor Green
            $successful++
            
            # Small delay to avoid rate limiting
            Start-Sleep -Seconds 1
        } else {
            Write-Host "  ❌ Download failed" -ForegroundColor Red
            Write-Host "  Error: $output" -ForegroundColor Red
            $failed++
        }
    } catch {
        Write-Host "  ❌ Error: $($_.Exception.Message)" -ForegroundColor Red
        $failed++
    }
    
    Write-Host ""
}

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📊 DOWNLOAD SUMMARY" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Total songs:      $total" -ForegroundColor White
Write-Host "✅ Successful:    $successful" -ForegroundColor Green
Write-Host "❌ Failed:        $failed" -ForegroundColor Red
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($successful -gt 0) {
    Write-Host "✨ Successfully downloaded $successful songs!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next step: Run trim script to ensure 3-minute max:" -ForegroundColor Yellow
    Write-Host "  .\scripts\trim_audio_files.ps1" -ForegroundColor Cyan
} else {
    Write-Host "⚠️  No songs were downloaded. Check your internet connection and yt-dlp installation." -ForegroundColor Yellow
}

Write-Host ""
