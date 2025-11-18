# 🎵 Audio File Download Instructions

## Quick Download Guide

This file lists all songs that need audio files. Follow these steps:

### Step 1: Visit Royalty-Free Music Sites

Choose one source:
- **Pixabay Music** (CC0, no attribution): https://pixabay.com/music/
- **Free Music Archive** (check licenses): https://freemusicarchive.org/
- **Freepd** (Creative Commons): https://www.freepd.com/
- **YouTube Audio Library** (sign in to YouTube Studio)

### Step 2: Download These Songs

Below is a list of songs to search for. Download 30-90 second instrumental clips:


#### Awaara Hoon (ID: 5)
- Artist: Raj Kapoor
- Save as: `audio/awaara-hoon.mp3`
- Search query: "awaara hoon bollywood instrumental"
- Duration: 30-90 seconds

#### Kal Ho Naa Ho (ID: 14)
- Artist: Shah Rukh Khan
- Save as: `audio/kal-ho-naa-ho.mp3`
- Search query: "kal ho naa ho instrumental"
- Duration: 30-90 seconds

#### Chaiya Chaiya (ID: 26)
- Artist: Shah Rukh Khan
- Save as: `audio/chaiya-chaiya.mp3`
- Search query: "chaiya chaiya instrumental"
- Duration: 30-90 seconds

#### Jo Jeeta Wohi Sikandar (ID: 31)
- Artist: Aamir Khan
- Save as: `audio/jo-jeeta-wohi-sikandar.mp3`
- Search query: "jo jeeta wohi sikandar instrumental"
- Duration: 30-90 seconds

#### Aashiqui Aa Gai (ID: 45)
- Artist: Various
- Save as: `audio/aashiqui-aa-gai.mp3`
- Search query: "aashiqui aa gai bollywood remix"
- Duration: 30-90 seconds

#### Baarish Ban Jaana (ID: 46)
- Artist: Various
- Save as: `audio/baarish-ban-jaana.mp3`
- Search query: "baarish ban jaana bollywood"
- Duration: 30-90 seconds

#### Chandni O Meri Chandni (ID: 47)
- Artist: Various
- Save as: `audio/chandni-o-meri-chandni.mp3`
- Search query: "chandni instrumental"
- Duration: 30-90 seconds

#### Dil Diwana (ID: 48)
- Artist: Various
- Save as: `audio/dil-diwana.mp3`
- Search query: "dil diwana bollywood"
- Duration: 30-90 seconds

#### Ek Haseena Thi (ID: 49)
- Artist: Various
- Save as: `audio/ek-haseena-thi.mp3`
- Search query: "ek haseena thi instrumental"
- Duration: 30-90 seconds

#### Faisal Khan (ID: 50)
- Artist: Various
- Save as: `audio/faisal-khan.mp3`
- Search query: "faisal khan bollywood remix"
- Duration: 30-90 seconds

#### Gaata Rahe Mera Dil (ID: 51)
- Artist: Various
- Save as: `audio/gaata-rahe-mera-dil.mp3`
- Search query: "gaata rahe mera dil"
- Duration: 30-90 seconds

#### Haan Main Tumhara (ID: 52)
- Artist: Various
- Save as: `audio/haan-main-tumhara.mp3`
- Search query: "haan main tumhara instrumental"
- Duration: 30-90 seconds

#### Itna Toh Mujhe Khud Pe Yakeen Hai (ID: 53)
- Artist: Various
- Save as: `audio/itna-toh-mujhe-khud-pe-yakeen-hai.mp3`
- Search query: "itna toh mujhe khud pe yakeen hai"
- Duration: 30-90 seconds

#### Jaadu Teri Nazar (ID: 54)
- Artist: Various
- Save as: `audio/jaadu-teri-nazar.mp3`
- Search query: "jaadu teri nazar instrumental"
- Duration: 30-90 seconds

#### Kambal Leke Udta Hoon (ID: 55)
- Artist: Various
- Save as: `audio/kambal-leke-udta-hoon.mp3`
- Search query: "kambal leke udta hoon"
- Duration: 30-90 seconds

#### Lag Ja Gale (ID: 56)
- Artist: Various
- Save as: `audio/lag-ja-gale.mp3`
- Search query: "lag ja gale instrumental"
- Duration: 30-90 seconds

#### Madhuban Madhuban (ID: 57)
- Artist: Various
- Save as: `audio/madhuban-madhuban.mp3`
- Search query: "madhuban madhuban instrumental"
- Duration: 30-90 seconds

#### Naina Bhar Gaye (ID: 58)
- Artist: Various
- Save as: `audio/naina-bhar-gaye.mp3`
- Search query: "naina bhar gaye instrumental"
- Duration: 30-90 seconds

#### Om Shanti Om (ID: 59)
- Artist: Various
- Save as: `audio/om-shanti-om.mp3`
- Search query: "om shanti om song"
- Duration: 30-90 seconds

#### Pyar Ka Rog (ID: 60)
- Artist: Various
- Save as: `audio/pyar-ka-rog.mp3`
- Search query: "pyar ka rog bollywood instrumental"
- Duration: 30-90 seconds

#### Raaz Ki Baat (ID: 61)
- Artist: Various
- Save as: `audio/raaz-ki-baat.mp3`
- Search query: "raaz ki baat instrumental"
- Duration: 30-90 seconds


### Step 3: Save to Audio Folder

After downloading each file:
1. Move to: `Antashari/audio/` folder
2. Rename to match the filename shown above
3. Verify it's MP3 format

### Step 4: Verify Setup

Run this command to check:
```powershell
cd Antashari
Get-ChildItem audio/*.mp3 | Measure-Object
```

Should show 20 files.

### Step 5: Test in Browser

Open `index.html` → Click "🎵 Tune Challenge" → Click "▶️ Play Tune"

Audio should play! 🎉

## Alternative: Automated Download (Advanced)

If you want to automate downloads using a script:

```python
# Install required library
pip install yt-dlp

# Use this to download from YouTube music
yt-dlp "search query" -x --audio-format mp3 --audio-quality 128K
```

## File Size Reference

- Per file (30 sec @ 128 kbps): ~500 KB
- Per file (60 sec @ 128 kbps): ~1 MB
- Total for 20 songs: ~10-20 MB

## Troubleshooting

**Files not playing?**
- Check filename matches exactly (case-sensitive on Linux)
- Verify MP3 format (use VLC player to test)
- Check file exists in `audio/` folder

**Files too large?**
- Compress using: https://www.freeconvert.com/compress-mp3
- Target: 128 kbps bitrate

**Not finding songs?**
- Search for instrumental/music version
- Try artist name + "instrumental"
- Try partial title matches

## Questions?

Refer to AUDIO_SETUP_GUIDE.md for detailed instructions.
