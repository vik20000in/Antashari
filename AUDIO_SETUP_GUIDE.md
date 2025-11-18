# 🎵 Audio Setup Guide for Antakshari

This guide explains how to add local audio files to the Antakshari game for the Tune Challenge mode.

## Why Local Audio?

✅ **No YouTube restrictions** - Works without embedding issues  
✅ **Offline playback** - Works even without internet  
✅ **Full control** - You choose the exact clips  
✅ **Better performance** - No loading delays  

## Folder Structure

```
Antashari/
├── audio/                    ← Create this folder
│   ├── kal-ho-naa-ho.mp3
│   ├── awaara-hoon.mp3
│   ├── jo-jeeta-wohi.mp3
│   └── chaiya-chaiya.mp3
├── index.html
├── script.js
├── musicConfig.js
└── ... (other files)
```

## Step 1: Create the Audio Folder

### On Windows (PowerShell):
```powershell
cd "c:\Users\vikra\Documents\Applications\Antashari"
New-Item -ItemType Directory -Name "audio" -Force
```

### Or manually:
1. Open `C:\Users\vikra\Documents\Applications\Antashari`
2. Right-click → New → Folder
3. Name it `audio`

## Step 2: Find Royalty-Free Bollywood Music

You have several options:

### Option A: Pixabay Music (Recommended - CC0, No Attribution Needed)
1. Go to https://pixabay.com/music/
2. Search: "bollywood", "hindi", "indian classical"
3. Download MP3 files (30-60 seconds is ideal)
4. Look for songs like:
   - "Kal Ho Naa Ho" theme
   - "Awaara" style music
   - "Jo Jeeta Wohi Sikandar" remix
   - "Chaiya Chaiya" version

### Option B: Free Music Archive
1. Go to https://freemusicarchive.org/
2. Filter by license: Creative Commons
3. Search: "bollywood", "hindi", "instrumental"
4. Download the MP3 files

### Option C: YouTube Audio Library
1. Go to YouTube Studio (youtube.com/studio)
2. Left sidebar → Audio Library
3. Search: "bollywood", "hindi", "instrumental"
4. Download clips directly

### Option D: Incompetech
1. Go to https://incompetech.com/
2. Search: "bollywood", "indian", "exotic"
3. Download MP3 (requires attribution in code comments)

## Step 3: Prepare Audio Files

### Ideal Specifications:
- **Format:** MP3 (most compatible)
- **Duration:** 30-90 seconds per clip
- **Quality:** 128 kbps - 320 kbps
- **Naming:** Keep simple (no spaces)

### How to Trim Audio:

#### Using Audacity (Free):
1. Download: https://www.audacityteam.org/
2. Open → File → Open audio file
3. Select portion you want (drag handles)
4. Edit → Delete to remove excess
5. File → Export → Export as MP3
6. Save to `Antashari/audio/` folder

#### Using Online Tools:
- https://www.freeconvert.com/mp3-cutter (no installation needed)
- Upload MP3 → Select start/end time → Download

## Step 4: Name Your Audio Files

Place files in the `audio/` folder with these exact names:

```
kal-ho-naa-ho.mp3          (for ID 14)
awaara-hoon.mp3            (for ID 5)
jo-jeeta-wohi.mp3          (for ID 31)
chaiya-chaiya.mp3          (for ID 26)
```

## Step 5: Update musicConfig.js

Edit `musicConfig.js` and update the audio URLs:

### Current (placeholder):
```javascript
14: {
  title: 'Kal Ho Naa Ho',
  audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  duration: 90,
  credit: 'Royalty-free instrumental'
},
```

### After local setup:
```javascript
14: {
  title: 'Kal Ho Naa Ho',
  audioUrl: './audio/kal-ho-naa-ho.mp3',
  duration: 90,
  credit: 'Local audio file'
},
```

## Step 6: Full Example

Here's the complete updated `musicConfig.js`:

```javascript
// ===== ROYALTY-FREE MUSIC CONFIGURATION =====
// Using local audio files from /audio folder

const musicConfiguration = {
  // Kal Ho Naa Ho (Shah Rukh Khan, Sonu Nigam)
  14: {
    title: 'Kal Ho Naa Ho',
    audioUrl: './audio/kal-ho-naa-ho.mp3',
    duration: 90,
    credit: 'Local audio file'
  },

  // Awaara Hoon (Raj Kapoor, Rafi)
  5: {
    title: 'Awaara Hoon',
    audioUrl: './audio/awaara-hoon.mp3',
    duration: 90,
    credit: 'Local audio file'
  },

  // Jo Jeeta Wohi Sikandar (Aamir Khan)
  31: {
    title: 'Jo Jeeta Wohi Sikandar',
    audioUrl: './audio/jo-jeeta-wohi.mp3',
    duration: 90,
    credit: 'Local audio file'
  },

  // Chaiya Chaiya (Shah Rukh Khan)
  26: {
    title: 'Chaiya Chaiya',
    audioUrl: './audio/chaiya-chaiya.mp3',
    duration: 90,
    credit: 'Local audio file'
  }
};

// Get music configuration for a specific song ID
function getMusicForSong(songId) {
  return musicConfiguration[songId] || null;
}
```

## Step 7: Test the Setup

1. Place audio files in `Antashari/audio/` folder
2. Update `musicConfig.js` with `./audio/` paths
3. Save the file
4. Open `index.html` in browser
5. Click "🎵 Tune Challenge"
6. Click "▶️ Play Tune" button
7. Audio should play! 🎉

## Troubleshooting

### Audio doesn't play:
- ❌ File path is wrong → Check file names match exactly
- ❌ File format wrong → Use MP3 format only
- ❌ File doesn't exist → Verify file is in `/audio` folder
- ✅ Solution: Use `./audio/filename.mp3` path

### CORS Error (if hosting online):
- Move audio files to same domain
- Or use a CDN (Cloudinary, Imgix)
- Or use online royalty-free URLs

### File size too large:
- Compress MP3: Use https://www.freeconvert.com/compress-mp3
- Trim to 30 seconds: Use Audacity or online tool
- Reduce bitrate to 128 kbps

## Adding More Songs

To add more tunes later:

1. Find royalty-free audio (30-60 seconds)
2. Name it: `song-name.mp3`
3. Place in `audio/` folder
4. Find the song ID in `songsData.js`
5. Add to `musicConfig.js`:

```javascript
  // Your new song (ID XX)
  XX: {
    title: 'Song Name',
    audioUrl: './audio/song-name.mp3',
    duration: 60,
    credit: 'Your credit here'
  },
```

6. Update `script.js` line with new ID:

```javascript
const tuneSongIds = [5, 14, 26, 31, XX]; // Add new ID here
```

## Attribution Notes

- **Pixabay**: CC0 - No attribution needed
- **Free Music Archive**: Check each song's license
- **Incompetech**: Include artist name in comments
- **Custom music**: Add your own credit

## File Size Reference

- 30 seconds @ 128 kbps MP3 ≈ 500 KB
- 60 seconds @ 128 kbps MP3 ≈ 1 MB
- Total for 4 songs ≈ 2-4 MB

## Next Steps

After setting up local audio:

1. Test all 4 tunes in Tune Challenge
2. Verify audio quality
3. Commit changes: `git add audio/` and `git commit -m "Add local audio files"`
4. Push to GitHub: `git push`

Enjoy your offline-ready Antakshari game! 🎉
