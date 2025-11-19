# Download Remaining Songs from YouTube

You've already downloaded: ✅ `awaara-hoon.mp3`

## How to Download Each Song

Use the `simple_download.py` script for each song:

```powershell
python simple_download.py "YOUTUBE_URL_HERE" "filename.mp3"
```

## Songs to Download (20 remaining)

### 1. Kal Ho Naa Ho
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "kal-ho-naa-ho.mp3"
```
**Search YouTube for:** "Kal Ho Naa Ho song" or "Kal Ho Naa Ho instrumental"

### 2. Chaiya Chaiya
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "chaiya-chaiya.mp3"
```
**Search YouTube for:** "Chaiya Chaiya Dil Se" or "Chaiya Chaiya song"

### 3. Jo Jeeta Wohi Sikandar
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "jo-jeeta-wohi-sikandar.mp3"
```
**Search YouTube for:** "Jo Jeeta Wohi Sikandar title song"

### 4. Aashiqui Aa Gai
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "aashiqui-aa-gai.mp3"
```
**Search YouTube for:** "Aashiqui Aa Gai song"

### 5. Baarish Ban Jaana
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "baarish-ban-jaana.mp3"
```
**Search YouTube for:** "Baarish Ban Jaana Payal Dev"

### 6. Chandni O Meri Chandni
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "chandni-o-meri-chandni.mp3"
```
**Search YouTube for:** "Chandni O Meri Chandni Sridevi"

### 7. Dil Diwana
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "dil-diwana.mp3"
```
**Search YouTube for:** "Dil Diwana Bin Sajna Ke song"

### 8. Ek Haseena Thi
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "ek-haseena-thi.mp3"
```
**Search YouTube for:** "Ek Haseena Thi Karz"

### 9. Faisal Khan
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "faisal-khan.mp3"
```
**Search YouTube for:** "Faisal Khan song" (Note: This might be a specific song - verify the exact title)

### 10. Gaata Rahe Mera Dil
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "gaata-rahe-mera-dil.mp3"
```
**Search YouTube for:** "Gaata Rahe Mera Dil Kishore Kumar Guide"

### 11. Haan Main Tumhara
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "haan-main-tumhara.mp3"
```
**Search YouTube for:** "Haan Main Tumhara song"

### 12. Itna Toh Mujhe Khud Pe Yakeen Hai
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "itna-toh-mujhe.mp3"
```
**Search YouTube for:** "Itna Toh Mujhe Khud Pe Yakeen Hai song"

### 13. Jaadu Teri Nazar
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "jaadu-teri-nazar.mp3"
```
**Search YouTube for:** "Jaadu Teri Nazar Darr Shah Rukh Khan"

### 14. Kambal Leke Udta Hoon
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "kambal-leke-udta.mp3"
```
**Search YouTube for:** "Kambal Leke Udta Hoon song"

### 15. Lag Ja Gale
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "lag-ja-gale.mp3"
```
**Search YouTube for:** "Lag Ja Gale Lata Mangeshkar Woh Kaun Thi"

### 16. Madhuban Madhuban
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "madhuban-madhuban.mp3"
```
**Search YouTube for:** "Madhuban Madhuban song"

### 17. Naina Bhar Gaye
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "naina-bhar-gaye.mp3"
```
**Search YouTube for:** "Naina Bhar Gaye song"

### 18. Om Shanti Om
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "om-shanti-om.mp3"
```
**Search YouTube for:** "Om Shanti Om title song Shah Rukh Khan"

### 19. Pyar Ka Rog
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "pyar-ka-rog.mp3"
```
**Search YouTube for:** "Pyar Ka Rog song"

### 20. Raaz Ki Baat
```powershell
python simple_download.py "https://www.youtube.com/watch?v=YOUR_URL" "raaz-ki-baat.mp3"
```
**Search YouTube for:** "Raaz Ki Baat song"

## Quick Workflow

1. **Search YouTube** for the song using the search terms above
2. **Copy the YouTube URL** from your browser (the full URL like `https://www.youtube.com/watch?v=abc123`)
3. **Run the download command** replacing `YOUR_URL` with the actual YouTube URL
4. **Wait for download** - the script will save it to the `audio/` folder with the correct filename
5. **Repeat** for the next song

## Check Your Progress

Run this command to see which songs you've downloaded:
```powershell
Get-ChildItem audio\*.mp3 | Select-Object Name, @{Name="Size (MB)";Expression={[math]::Round($_.Length/1MB, 2)}}
```

## Tips

- Download songs one at a time to avoid issues
- Make sure you have enough disk space (about 5-10 MB per song)
- If a download fails, try a different YouTube video for that song
- Some songs might be available as "instrumental" or "karaoke" versions
- The script automatically converts to MP3 format

## Progress Tracker

- [x] awaara-hoon.mp3 ✅
- [ ] kal-ho-naa-ho.mp3
- [ ] chaiya-chaiya.mp3
- [ ] jo-jeeta-wohi-sikandar.mp3
- [ ] aashiqui-aa-gai.mp3
- [ ] baarish-ban-jaana.mp3
- [ ] chandni-o-meri-chandni.mp3
- [ ] dil-diwana.mp3
- [ ] ek-haseena-thi.mp3
- [ ] faisal-khan.mp3
- [ ] gaata-rahe-mera-dil.mp3
- [ ] haan-main-tumhara.mp3
- [ ] itna-toh-mujhe.mp3
- [ ] jaadu-teri-nazar.mp3
- [ ] kambal-leke-udta.mp3
- [ ] lag-ja-gale.mp3
- [ ] madhuban-madhuban.mp3
- [ ] naina-bhar-gaye.mp3
- [ ] om-shanti-om.mp3
- [ ] pyar-ka-rog.mp3
- [ ] raaz-ki-baat.mp3

**Total: 1/21 complete** 🎵
