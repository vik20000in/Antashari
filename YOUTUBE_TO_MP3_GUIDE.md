# YouTube to MP3 Converter - Quick Start Guide

This Python script downloads YouTube videos and converts the first 2 minutes to MP3 format.

## Installation

1. **Install Python** (if not already installed)
   - Download from: https://www.python.org/downloads/

2. **Install required package:**
   ```powershell
   pip install yt-dlp
   ```

## Usage

### Interactive Mode (Recommended)

Run the script and follow the prompts:

```powershell
python youtube_to_mp3.py
```

The script will ask for:
1. YouTube URL
2. Output filename (e.g., `awaara-hoon.mp3`)

It will automatically:
- Download only the first 2 minutes
- Convert to MP3
- Save to the `audio/` folder

### Example Session

```
YouTube URL: https://www.youtube.com/watch?v=example123
Save as: awaara-hoon.mp3

🎵 Downloading: https://www.youtube.com/watch?v=example123
📁 Saving to: audio/awaara-hoon.mp3
⏱️  Duration: First 2 minutes only

✅ Success! Saved as: audio/awaara-hoon.mp3
```

## Tips

1. **Use official songs or karaoke versions** for best quality
2. **Search for instrumental versions** if available
3. The script automatically limits to 2 minutes to keep file sizes small
4. Files are saved directly to the `audio/` folder
5. You can convert multiple songs in one session

## Filenames for Tune Challenge

Use these exact filenames when saving (from MANUAL_AUDIO_SETUP.html):

- awaara-hoon.mp3
- kal-ho-naa-ho.mp3
- chaiya-chaiya.mp3
- jo-jeeta-wohi-sikandar.mp3
- aashiqui-aa-gai.mp3
- baarish-ban-jaana.mp3
- chandni-o-meri-chandni.mp3
- dil-diwana.mp3
- ek-haseena-thi.mp3
- faisal-khan.mp3
- gaata-rahe-mera-dil.mp3
- haan-main-tumhara.mp3
- itna-toh-mujhe.mp3
- jaadu-teri-nazar.mp3
- kambal-leke-udta.mp3
- lag-ja-gale.mp3
- madhuban-madhuban.mp3
- naina-bhar-gaye.mp3
- om-shanti-om.mp3
- pyar-ka-rog.mp3
- raaz-ki-baat.mp3

## Troubleshooting

**Error: "yt-dlp not found"**
- Run: `pip install yt-dlp`

**Error: "ffmpeg not found"**
- yt-dlp should include ffmpeg automatically
- If not, download from: https://ffmpeg.org/download.html

**Download is slow**
- This is normal for video downloads
- Be patient, especially for HD videos

**Video unavailable**
- Some videos may be region-locked or private
- Try a different video or search for alternatives

## Legal Notice

Only download content you have the right to use. This is for personal/educational purposes only.
