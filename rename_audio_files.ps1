# Rename audio files to match correct song names

Write-Host "Renaming audio files to match actual song names..." -ForegroundColor Cyan
Write-Host ""

$renames = @(
    @{Old="aashiqui-aa-gai.mp3"; New="piya-tu-ab-to-aaja.mp3"},
    @{Old="baarish-ban-jaana.mp3"; New="prem-se-bhara-hai.mp3"},
    @{Old="chandni-o-meri-chandni.mp3"; New="funtoosh-banaya-tune.mp3"},
    @{Old="dil-diwana.mp3"; New="baarish-mein-tume-dekha.mp3"},
    @{Old="ek-haseena-thi.mp3"; New="badi-mushkil-hai.mp3"},
    @{Old="faisal-khan.mp3"; New="barso-re-megha.mp3"},
    @{Old="gaata-rahe-mera-dil.mp3"; New="bhole-shankara.mp3"},
    @{Old="haan-main-tumhara.mp3"; New="maa-tujhe-salaam.mp3"},
    @{Old="itna-toh-mujhe.mp3"; New="mere-haath-mein-teri-bansuri.mp3"},
    @{Old="jaadu-teri-nazar.mp3"; New="mere-sapno-ki-rani.mp3"},
    @{Old="kambal-leke-udta.mp3"; New="mohabbat-barsa-dena-tu.mp3"},
    @{Old="lag-ja-gale.mp3"; New="yeh-kya-hua.mp3"},
    @{Old="madhuban-madhuban.mp3"; New="yeh-dua-hai-meri.mp3"},
    @{Old="naina-bhar-gaye.mp3"; New="raaz-ki-baat.mp3"},
    @{Old="om-shanti-om.mp3"; New="raat-bhar-jaagta-hoon-main.mp3"},
    @{Old="pyar-ka-rog.mp3"; New="roli-roli-gulal-khelo.mp3"}
)

$success = 0
$failed = 0
$skipped = 0

foreach ($rename in $renames) {
    $oldPath = "audio\$($rename.Old)"
    $newPath = "audio\$($rename.New)"
    
    if (Test-Path $oldPath) {
        try {
            Move-Item $oldPath $newPath -Force
            Write-Host "✅ $($rename.Old) → $($rename.New)" -ForegroundColor Green
            $success++
        } catch {
            Write-Host "❌ Failed to rename $($rename.Old): $_" -ForegroundColor Red
            $failed++
        }
    } else {
        Write-Host "⏭️  Skipped $($rename.Old) (not found)" -ForegroundColor Yellow
        $skipped++
    }
}

Write-Host ""
Write-Host "Summary:" -ForegroundColor Cyan
Write-Host "  ✅ Renamed: $success" -ForegroundColor Green
Write-Host "  ⏭️  Skipped: $skipped" -ForegroundColor Yellow
Write-Host "  ❌ Failed: $failed" -ForegroundColor Red
Write-Host ""
Write-Host "Files that were NOT renamed (correct already):" -ForegroundColor Cyan
Write-Host "  - awaara-hoon.mp3" -ForegroundColor White
Write-Host "  - kal-ho-naa-ho.mp3" -ForegroundColor White
Write-Host "  - chaiya-chaiya.mp3" -ForegroundColor White
Write-Host "  - jo-jeeta-wohi-sikandar.mp3" -ForegroundColor White
Write-Host "  - laila-o-laila.mp3" -ForegroundColor White
