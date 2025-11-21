# 🎵 Antakshari Game Platform

**A modern, comprehensive web-based Antakshari (Hindi song game) application with multiple game modes, audio playback, and an extensive song library.**

## 📋 Overview

Antakshari is an interactive game platform featuring 89+ curated Hindi songs spanning from classics to 2025 hits. The application offers:
- 🎮 **Multiple Game Modes**: Word Challenge, Actor Challenge, Tune Challenge, Classic Antakshari, Theme Challenge
- 🎵 **Audio Playback**: Built-in MP3 player for Tune Challenge mode
- 📱 **Mobile-Friendly**: Responsive design works on desktop and mobile browsers
- 🎯 **Interactive Gameplay**: Real-time verification, scoring, and song management
- 🗃️ **Rich Database**: 129+ songs with full metadata (themes, actors, years, movies)

---

## 🚀 Quick Start

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/vik20000in/Antashari.git
   cd Antashari
   ```

2. **Open in Browser**
   ```bash
   # Simply open index.html in your browser, or use a local server:
   
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # Then navigate to: http://localhost:8000
   ```

3. **Start Playing!**
   - Select a game mode from the home screen
   - Follow on-screen instructions
   - Enjoy the game!

### Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Audio files downloaded (for Tune Challenge mode)
- No external dependencies required

---

## 🎮 Game Modes

### 1. 🎯 Word Challenge
- A Hindi word is displayed
- Player must sing a song containing that word
- Tests vocabulary and song knowledge

### 2. 🎬 Actor Challenge
- An actor/actress name is shown
- Player must sing a song from their movie
- Database includes Bollywood legends and modern stars

### 3. 🎵 Tune Challenge (Featured!)
- **89 songs available** with audio playback
- Host plays a tune snippet (3 minutes max)
- Players guess the song title
- Perfect for party mode!

### 4. 🔤 Classic Antakshari
- Traditional letter-based gameplay
- Sing a song starting with given letter
- Next letter determined by last consonant

### 5. 🎨 Theme Challenge
- Songs must match a specific theme
- Themes: Love, Patriotic, Dance, Rain, etc.
- Tests thematic knowledge

---

## 📁 Project Architecture

### Directory Structure
```
Antashari/
├── index.html              # Main game interface
├── README.md               # Documentation
├── .gitignore              # Git ignore rules
│
├── src/                    # Frontend source files
│   ├── script.js           # Game engine & logic
│   └── styles.css          # Responsive styling
│
├── config/                 # Configuration files
│   ├── songsData.js        # Song database (129 songs)
│   ├── musicConfig.js      # Audio file mappings (89 songs)
│   └── tuneConfig.js       # Tune Challenge configuration
│
├── assets/                 # Static assets
│   ├── favicon.svg         # App icon
│   └── audio/              # MP3 files for Tune Challenge
│       ├── tum-hi-ho.mp3
│       ├── kesariya.mp3
│       └── ... (89 total)
│
└── scripts/                # Utility scripts
    ├── download_all_songs.ps1      # Sequential batch downloader
    ├── parallel_download.ps1       # Parallel batch downloader (3x faster)
    ├── trim_audio_files.ps1        # Audio trimming utility
    ├── simple_download.py          # YouTube downloader helper
    ├── youtube_to_mp3.py           # Interactive YouTube to MP3 tool
    └── check_progress.ps1          # Download progress checker
```

### Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Audio**: HTML5 Audio API with MP3 support, mobile-optimized
- **Design**: Responsive CSS Grid and Flexbox
- **Database**: JSON-based song metadata
- **Tools**: PowerShell (downloads), Python (yt-dlp), FFmpeg (trimming)

---

## 💡 Usage Examples

### Basic Gameplay

1. **Start Word Challenge**
   ```
   Home Screen → Click "🎯 Word Challenge"
   → Word appears (e.g., "प्यार")
   → Sing a song with that word
   → Enter song title to verify
   ```

2. **Play Tune Challenge**
   ```
   Home Screen → Click "🎵 Tune Challenge"
   → Host sees song name (hidden from players)
   → Click "▶️ Play Tune"
   → Players listen and guess
   → Reveal answer with "Show Answer"
   ```

3. **Classic Antakshari**
   ```
   Home Screen → Click "🔤 Classic Antakshari"
   → Starting letter shown (e.g., "क")
   → Sing song starting with that letter
   → Next letter calculated automatically
   ```

### Adding New Songs

**Method 1: Using YouTube Downloader**
```bash
# Interactive mode
python scripts/youtube_to_mp3.py

# Enter YouTube URL or video ID
# Song downloads as MP3 automatically
```

**Method 2: Batch Download**
```powershell
# Edit scripts/download_all_songs.ps1 to add song filenames
# Then run:
.\scripts\download_all_songs.ps1
```

**Method 3: Manual Addition**
1. Add song to `config/songsData.js`:
   ```javascript
   {
     id: 130,
     title: "New Song Title",
     firstLine: "Opening lyrics",
     lastWord: "LastWord",
     lastConsonant: "त",
     themes: ["Love", "Romance"],
     singerType: "Male Solo",
     year: 2025,
     movie: "Movie Name"
   }
   ```

2. Add audio config to `config/musicConfig.js`:
   ```javascript
   130: {
     title: 'New Song Title',
     audioUrl: './assets/audio/new-song.mp3',
     duration: 90,
     credit: 'Downloaded from YouTube'
   }
   ```

3. Update `src/script.js` tuneSongIds array:
   ```javascript
   const tuneSongIds = [
     // ... existing IDs
     130  // Add new ID
   ];
   ```

---

## 🛠️ Tools & Utilities

### YouTube to MP3 Downloader
Interactive tool for downloading songs:
```bash
python scripts/youtube_to_mp3.py
# Enter URLs one by one
# Press Ctrl+C to exit
```

### Batch Song Downloader

**Sequential Downloader** (Original):
```powershell
.\scripts\download_all_songs.ps1
# Downloads missing songs sequentially
# Skips existing files
# Shows progress
# Time: ~30-45 minutes for all songs
```

**Parallel Downloader** (Recommended - 3x faster):
```powershell
.\scripts\parallel_download.ps1
# Downloads 3 songs simultaneously
# Real-time progress tracking
# Time: ~10-15 minutes for all songs

# Advanced options:
.\scripts\parallel_download.ps1 -MaxParallelJobs 5    # 5 concurrent downloads
.\scripts\parallel_download.ps1 -Force                # Re-download all files
.\scripts\parallel_download.ps1 -MaxParallelJobs 8 -Force  # Fast mode
```

**Features:**
- ⚡ **3x faster** than sequential downloads
- 📊 Real-time progress with percentage and time
- 🔄 Configurable parallelism (1-10 concurrent downloads)
- 💾 Smart skip logic for existing files
- ✅ Detailed success/failure reporting
- 📦 Audio folder statistics on completion

### Audio Trimmer
Trim all songs to 3 minutes:
```powershell
.\scripts\trim_audio_files.ps1
# Processes all MP3s in assets/audio/
# Converts AAC to MP3
# Preserves files ≤3 minutes
```

---

## 🎨 Customization

### Changing Colors
Edit `src/styles.css`:
```css
:root {
  --primary-color: #d63031;    /* Main red */
  --secondary-color: #ff6348;  /* Orange accent */
  --success-color: #27ae60;    /* Valid/correct */
  --danger-color: #e74c3c;     /* Invalid/wrong */
}
```

### Modifying Game Modes
Edit `src/script.js` to add/remove modes in `updateModeTitle()` function.

### Database Expansion
- Current: 129 songs total
- Tune Challenge: 89 songs with audio
- Easy to add more via `songsData.js`

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Adding Songs
1. Fork the repository
2. Add song metadata to `songsData.js`
3. Add music config to `musicConfig.js`
4. Download and add MP3 to `audio/` folder
5. Update `download_all_songs.ps1`
6. Submit pull request

### Reporting Issues
- Use GitHub Issues
- Include browser/device info
- Describe steps to reproduce
- Screenshots help!

### Code Contributions
1. **Fork & Clone**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Antashari.git
   ```

2. **Create Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Changes**
   - Follow existing code style
   - Test on multiple browsers
   - Update README if needed

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

5. **Submit PR**
   - Describe changes clearly
   - Reference any related issues
   - Wait for review

### Development Guidelines
- **Code Style**: Use consistent indentation (2 spaces)
- **Comments**: Add comments for complex logic
- **Testing**: Test on Chrome, Firefox, Safari
- **Mobile**: Verify responsive design
- **Audio**: Ensure MP3 compatibility

---

## 📱 Mobile Support

The application is fully responsive:
- **Touch-friendly** buttons and controls
- **Auto-scaling** fonts and layouts
- **Mobile audio** playback with `playsinline` attribute
- **Portrait mode** optimized for phones
- **Landscape mode** for tablets

### Known Mobile Issues
- iOS Safari may require user tap before audio plays
- Background audio may pause on iOS lock screen
- Use Chrome/Firefox on Android for best experience

---

## 🐛 Troubleshooting

### Audio Not Playing
1. Check browser console (F12) for errors
2. Verify MP3 file exists in `audio/` folder
3. Try using built-in player controls
4. On mobile: tap the audio player first

### Songs Not Verifying
1. Ensure `songsData.js` is loaded
2. Check browser console for JavaScript errors
3. Try entering first 2-3 words only
4. Check for typos in song title

### Performance Issues
1. Clear browser cache
2. Reduce number of songs in database
3. Compress/trim audio files
4. Use local server instead of file://

---

## 📄 License

This project is created for educational and entertainment purposes.

**Audio Content**: Songs downloaded from YouTube are for personal use only. Respect copyright laws.

**Code**: Open source - feel free to modify and distribute with attribution.

---

## 🙏 Acknowledgments

- Song database curated from popular Bollywood hits
- Built with vanilla JavaScript (no frameworks)
- Audio processing powered by FFmpeg
- Downloads powered by yt-dlp

---

## 📞 Support & Contact

- **GitHub Issues**: [Report bugs or request features](https://github.com/vik20000in/Antashari/issues)
- **Repository**: https://github.com/vik20000in/Antashari
- **Version**: 2.0
- **Last Updated**: November 2025

---

## 🎊 Have Fun!

Antakshari is all about enjoying Hindi music together. Whether you're hosting a party, playing with family, or just testing your Bollywood knowledge - have a great time! 🎵

**Pro Tip**: Use Tune Challenge mode for the most engaging experience with built-in audio playback!

---

---

## 🎮 Core Features (Detailed)

### Song Database
- **129 total songs** with comprehensive metadata
- **89 songs** with audio files for Tune Challenge
- Songs span from classics (1950s) to latest hits (2025)
- Each song includes: title, lyrics, themes, actors, year, movie

### Game Modes
- **5 distinct modes** for varied gameplay
- Real-time song verification
- Score tracking per session
- Prevent duplicate songs

### Audio Playback
- HTML5 Audio with MP3 support
- Mobile-friendly with `playsinline` attribute  
- 3-minute trimmed clips for optimal gameplay
- Built-in player controls for manual playback

### User Interface
- Clean, modern design
- Responsive layout (desktop + mobile)
- Intuitive navigation
- Visual feedback for all actions

---

## 📊 Song Statistics

**By Era:**
- 1950s-1990s: 40 songs (Classics)
- 2000s: 19 songs
- 2010-2020: 14 songs
- 2020-2025: 16 songs (Latest hits)

**By Category:**
- Love/Romance: ~60%
- Dance/Party: ~15%
- Patriotic: ~5%
- Devotional: ~5%
- Others: ~15%

**Audio Coverage:**
- Total songs with audio: 89/129 (69%)
- All audio files trimmed to 3 minutes max
- Average file size: 2.5-3 MB per song

---

**🎉 Ready to play? Open `index.html` and start your Antakshari journey!**
