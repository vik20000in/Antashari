Write-Host "Downloading Sample Royalty-Free Audio Files..." -ForegroundColor Cyan

if (!(Test-Path "audio")) {
    New-Item -ItemType Directory -Path "audio" | Out-Null
    Write-Host "Created audio/ directory" -ForegroundColor Green
}

$files = @(
    @{name="awaara-hoon.mp3"; url="https://www.bensound.com/bensound-music/bensound-ukulele.mp3"},
    @{name="kal-ho-naa-ho.mp3"; url="https://www.bensound.com/bensound-music/bensound-creativeminds.mp3"},
    @{name="chaiya-chaiya.mp3"; url="https://www.bensound.com/bensound-music/bensound-sunny.mp3"},
    @{name="jo-jeeta-wohi-sikandar.mp3"; url="https://www.bensound.com/bensound-music/bensound-happyrock.mp3"},
    @{name="aashiqui-aa-gai.mp3"; url="https://www.bensound.com/bensound-music/bensound-jazzyfrenchy.mp3"},
    @{name="baarish-ban-jaana.mp3"; url="https://www.bensound.com/bensound-music/bensound-littleidea.mp3"},
    @{name="chandni-o-meri-chandni.mp3"; url="https://www.bensound.com/bensound-music/bensound-memories.mp3"},
    @{name="dil-diwana.mp3"; url="https://www.bensound.com/bensound-music/bensound-slowmotion.mp3"},
    @{name="ek-haseena-thi.mp3"; url="https://www.bensound.com/bensound-music/bensound-tenderness.mp3"},
    @{name="faisal-khan.mp3"; url="https://www.bensound.com/bensound-music/bensound-energy.mp3"},
    @{name="gaata-rahe-mera-dil.mp3"; url="https://www.bensound.com/bensound-music/bensound-anewbeginning.mp3"},
    @{name="haan-main-tumhara.mp3"; url="https://www.bensound.com/bensound-music/bensound-buddy.mp3"},
    @{name="itna-toh-mujhe.mp3"; url="https://www.bensound.com/bensound-music/bensound-cute.mp3"},
    @{name="jaadu-teri-nazar.mp3"; url="https://www.bensound.com/bensound-music/bensound-sweet.mp3"},
    @{name="kambal-leke-udta.mp3"; url="https://www.bensound.com/bensound-music/bensound-actionable.mp3"},
    @{name="lag-ja-gale.mp3"; url="https://www.bensound.com/bensound-music/bensound-theelevatorbossanova.mp3"},
    @{name="madhuban-madhuban.mp3"; url="https://www.bensound.com/bensound-music/bensound-goinghigher.mp3"},
    @{name="naina-bhar-gaye.mp3"; url="https://www.bensound.com/bensound-music/bensound-hey.mp3"},
    @{name="om-shanti-om.mp3"; url="https://www.bensound.com/bensound-music/bensound-dubstep.mp3"},
    @{name="pyar-ka-rog.mp3"; url="https://www.bensound.com/bensound-music/bensound-funkysuspense.mp3"},
    @{name="raaz-ki-baat.mp3"; url="https://www.bensound.com/bensound-music/bensound-betterdays.mp3"}
)

$count = 0
foreach ($f in $files) {
    $path = "audio\$($f.name)"
    if (Test-Path $path) {
        Write-Host "Skipping $($f.name) (exists)" -ForegroundColor Yellow
    } else {
        Write-Host "Downloading $($f.name)..." -ForegroundColor Cyan
        try {
            Invoke-WebRequest -Uri $f.url -OutFile $path
            $count++
            Write-Host "Downloaded $($f.name)" -ForegroundColor Green
        } catch {
            Write-Host "Failed: $($f.name)" -ForegroundColor Red
        }
        Start-Sleep -Milliseconds 300
    }
}

Write-Host "`nDownload Complete! Downloaded $count files" -ForegroundColor Green
