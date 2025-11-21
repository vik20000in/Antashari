# Auto-download all songs from YouTube
# This script runs each download command from DOWNLOAD_COMMANDS.txt

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "🎵 Auto-Download All Songs" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# List of all songs to download
$songs = @(
    "awaara-hoon.mp3",
    "kal-ho-naa-ho.mp3",
    "chaiya-chaiya.mp3",
    "jo-jeeta-wohi-sikandar.mp3",
    "piya-tu-ab-to-aaja.mp3",
    "funtoosh-banaya-tune.mp3",
    "baarish-mein-tume-dekha.mp3",
    "badi-mushkil-hai.mp3",
    "barso-re-megha.mp3",
    "bhole-shankara.mp3",
    "maa-tujhe-salaam.mp3",
    "mere-haath-mein-teri-bansuri.mp3",
    "mere-sapno-ki-rani.mp3",
    "mohabbat-barsa-dena-tu.mp3",
    "yeh-kya-hua.mp3",
    "yeh-dua-hai-meri.mp3",
    "raaz-ki-baat.mp3",
    "raat-bhar-jaagta-hoon-main.mp3",
    "roli-roli-gulal-khelo.mp3",
    "laila-o-laila.mp3",
    "kuch-kuch-hota-hai.mp3",
    "kabhi-kabhi-mere-dil-mein.mp3",
    "jab-tak-hai-jaan.mp3",
    "jaadu-teri-nazar.mp3",
    "dilbar-dilbar.mp3",
    "pehla-nasha.mp3",
    "arre-dekhega-india.mp3",
    "likhe-jo-khat-tumhe.mp3",
    "kahe-toh-pardes.mp3",
    "geet-gata-hoon-main.mp3",
    "jaane-bhi-do-yaaro.mp3",
    "dil-dhoondta-hai.mp3",
    "na-jane-kyon.mp3",
    "tere-haath-mein.mp3",
    "soni-soni-ankh-marey.mp3",
    "ik-teri-muskarahat.mp3",
    "khwaab-ho-tum-ya-koi-khyal.mp3",
    "chod-de-saari-duniya.mp3",
    "gulab-bahar.mp3",
    "vaada-raha-sanam.mp3",
    "tujhe-dekha-to.mp3",
    "koi-mil-gaya.mp3",
    "dil-chahta-hai.mp3",
    "tere-liye.mp3",
    "main-hoon-na.mp3",
    "tumhi-dekho-na.mp3",
    "kajra-re.mp3",
    "rang-de-basanti.mp3",
    "desi-girl.mp3",
    "jai-ho.mp3",
    "rock-on.mp3",
    "tum-se-hi.mp3",
    "mauja-hi-mauja.mp3",
    "om-shanti-om.mp3",
    "kaho-naa-pyaar-hai.mp3",
    "aaj-ki-raat.mp3",
    "pehli-nazar-mein.mp3",
    "maahi-ve.mp3",
    "mitwa.mp3",
    "tum-hi-ho.mp3",
    "badtameez-dil.mp3",
    "naina.mp3",
    "galliyan.mp3",
    "gerua.mp3",
    "channa-mereya.mp3",
    "bulleya.mp3",
    "ae-watan.mp3",
    "pehli-dafa.mp3",
    "tere-sang-yaara.mp3",
    "agar-tum-saath-ho.mp3",
    "bekhayali.mp3",
    "mere-naam-tu.mp3",
    "sanam-re.mp3",
    "kesariya.mp3",
    "apna-bana-le.mp3",
    "srivalli.mp3",
    "raataan-lambiyan.mp3",
    "ranjha.mp3",
    "vai-vai.mp3",
    "chaleya.mp3",
    "tere-vaaste.mp3",
    "maan-meri-jaan.mp3",
    "oo-antava.mp3",
    "besharam-rang.mp3",
    "jhoome-jo-pathaan.mp3",
    "tum-kya-mile.mp3",
    "what-jhumka.mp3",
    "ve-kamleya.mp3",
    "arjan-vailly.mp3"
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
