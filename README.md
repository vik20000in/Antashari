# 🎵 Antakshari: Sur Sanchalak (Host Mode)

**A comprehensive web-based Antakshari game application designed for the host to manage the game efficiently.**

## 📋 Overview

This application serves as the central display and reference tool for Antakshari game hosts. The host manages teams and scores manually while using the app for:
- 📍 **Letter Management**: Displaying the required starting letter
- ✅ **Verification**: Quickly checking if a song is valid and new
- ⏱️ **Time Management**: Enforcing turn limits with a timer
- 🎭 **Round Structuring**: Support for 5 different game modes

---

## 🎮 Core Features

### 1. **Main Display (Audience-Facing)**
The left panel shows what the audience/teams see when the game is projected:
- **Current Required Letter**: Large, pulsing display of the starting letter (Devanagari script)
- **Active Timer**: 60-second countdown clock with golden styling
- **Last Valid Song**: Shows the song title and first line that set the current letter
- **Round Mode Indicator**: Displays which game mode is active
- **Special Challenge Info**: For theme, word, or actor challenges

### 2. **Host Control Panel (Host-Only)**
The right panel contains all host controls, hidden from the audience:

#### **Song Verification Section**
- Input field to enter the first two words of the song
- "Verify" button to search the database
- Results show:
  - ✅ Valid Song! (with next consonant)
  - ❌ Song not found
  - ❌ Letter mismatch
  - ❌ Already played

#### **Timer Controls**
- Start/Pause/Reset buttons
- Customizable duration (default 60 seconds)
- Auto-resets after confirming a song

#### **Action Buttons**
- "Confirm & Next": Accept the verified song and calculate next letter
- "Skip/Pass": Skip current song and reset timer
- Manual letter override for round changes

#### **Round Modes** (5 Different Formats)
1. **Akshar-Gyan**: Classic last-consonant rule
2. **Bhaav-Ras**: Theme-based round (rain songs, patriotic, etc.)
3. **Shabd-Bandh**: Must include specific words
4. **Sitaron Ke Naam**: Rapid-fire naming songs of specific actors
5. **Jodi-Daar**: Must be duet songs only

#### **Game Statistics**
- Total songs in database
- Songs already played
- Recent songs list
- Full stats modal with detailed breakdown

---

## 📁 Project Structure

```
Antashari/
├── index.html        # Main HTML structure with display and controls
├── styles.css        # Complete styling and responsive design
├── script.js         # Game logic, verification, and event handlers
├── songsData.js      # Hindi song database with metadata
└── README.md         # This file
```

---

## 🎯 How to Use

### Starting the Game

1. **Open** `index.html` in any modern web browser
2. The application will initialize with:
   - Required letter: 'क' (Ka)
   - Timer: 60 seconds
   - Database: 80 curated Hindi songs
   - Round Mode: Classic Akshar-Gyan

### Game Flow

1. **Select Round Mode** (optional):
   - Click one of the 5 mode buttons to change rules
   - For special modes, set theme/word/actor

2. **Start Timer**:
   - Click "टाइमर शुरू करें" (Start Timer)
   - Audience sees countdown on main display

3. **Team Sings**:
   - Team sings a song starting with current letter
   - Host listens and prepares to verify

4. **Verify Song**:
   - Host types first 2 words of song into verification field
   - Click "सत्यापित करें" (Verify) or press Enter
   - App checks:
     - ✅ Song exists in database
     - ✅ Starts with required letter
     - ✅ Not already played this game

5. **Accept or Skip**:
   - **Valid**: Click "पुष्टि और अगला अक्षर" to confirm
     - Next letter calculated from last consonant
     - Main display updates for audience
   - **Invalid**: Click "गीत छोड़ें" to skip
     - Timer resets, team gets another chance or pass

6. **Manual Adjustments** (if needed):
   - Use "अक्षर ओवरराइड" to manually set next letter
   - Use "Round Modes" to switch game format mid-game

---

## 🎵 Song Database

**80 curated Hindi songs** with metadata:
- **Title**: Song name in English transliteration
- **First Line**: Opening lyric for reference
- **Last Word**: Final word of the song
- **Last Consonant**: Hindi consonant to be used as next letter
- **Themes**: Category tags (Love, Patriotic, Dance, etc.)
- **Singer Type**: Solo, Male Solo, Female Solo, Duet
- **Year**: Release year
- **Movie**: Film name

### Example Entries:
```javascript
{
  id: 14,
  title: "Kal Ho Naa Ho",
  firstLine: "Kal ho naa ho kal ho naa ho",
  lastWord: "Ho",
  lastConsonant: "ह",
  themes: ["Love", "Tomorrow", "Romance"],
  singerType: "Male Solo",
  year: 2003,
  movie: "Kal Ho Naa Ho"
}
```

---

## 🎭 Round Modes Explained

### 1. **Akshar-Gyan** (Classic)
- **Rule**: Song must start with required letter; next letter is last consonant
- **Host Action**: Use standard verification
- **Difficulty**: Medium

### 2. **Bhaav-Ras** (Theme Round)
- **Rule**: Song must start with letter AND fit the theme
- **Host Action**: Set theme (e.g., "Rain Songs"), listen for thematic relevance
- **Examples**: "Baarish", "Kishore Kumar", "Devotion"
- **Difficulty**: Hard

### 3. **Shabd-Bandh** (Word Challenge)
- **Rule**: Song must contain a specific difficult word
- **Host Action**: Display word, listen if it's sung
- **Word List**: पर्दा, दास्तान, मुसाफिर, फ़रक़, etc.
- **Difficulty**: Very Hard

### 4. **Sitaron Ke Naam** (Rapid Fire)
- **Rule**: Team sings max songs from an actor's filmography
- **Host Action**: Select actor, start timer, count valid songs
- **Time Limit**: 60 seconds
- **Scoring**: Points per song completed
- **Difficulty**: Hard

### 5. **Jodi-Daar** (Duet Round)
- **Rule**: Must be a duet (male + female singers)
- **Host Action**: Database filters for duets only during verification
- **Difficulty**: Hard

---

## 🎨 UI/UX Design

### Color Scheme
- **Primary Red**: #d63031 (Antakshari spirit)
- **Secondary Orange**: #ff6348 (Energy)
- **Success Green**: #27ae60 (Valid)
- **Danger Red**: #e74c3c (Invalid)
- **Gold Accent**: #f1c40f (Timer & highlights)

### Responsive Design
- **Desktop (>1400px)**: Side-by-side display
- **Tablet/Laptop (768px-1400px)**: Stacked layout
- **Mobile (<768px)**: Full-width with reduced font sizes

### Keyboard Shortcuts
- **Enter key**: Submit song verification
- **Enter key**: Set manual letter

---

## ⚙️ Technical Details

### JavaScript Game Logic (`script.js`)

**Main Class**: `AntakshariGame`

**Key Methods**:
- `verifySong()`: Search and validate song
- `startTimer()`, `pauseTimer()`, `resetTimer()`: Timer management
- `confirmAndNext()`: Accept song and calculate next letter
- `setRoundMode()`: Switch between 5 game modes
- `resetGame()`: Full game reset
- `showStats()`: Display game statistics

**Game State Variables**:
- `requiredLetter`: Current starting letter
- `songsPlayed[]`: Array of played songs
- `currentRoundMode`: Active round type
- `isTimerRunning`: Timer status
- `lastVerifiedSong`: Recently verified song object

### Song Search Algorithm
- Matches first 1-2 words of input
- Case-insensitive search
- Supports partial word matching
- Checks both title and first line

### Letter Calculation
- Extracts last word of song
- Identifies last consonant (Devanagari)
- Updates required letter for next turn

---

## 🚀 Getting Started

### Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required (fully client-side)
- No dependencies or external libraries

### Installation
1. Extract all files to a folder
2. Open `index.html` in browser
3. Start playing!

### Optional: Local Server (recommended for projection)
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Then open: http://localhost:8000
```

---

## 💡 Tips for Hosts

1. **Before Starting**: Test verification with a few songs
2. **During Game**: 
   - Keep timer visible to audience
   - Clear verification messages before next turn
   - Note which songs are frequently sung
3. **Difficult Songs**: Use "गीत छोड़ें" if database doesn't have the song
4. **Round Changes**: Use "अक्षर ओवरराइड" to force letter changes for special rules
5. **Theme Rounds**: Set theme clearly before starting; you judge thematic relevance

---

## 🔧 Customization

### Adding More Songs
Edit `songsData.js` and add objects to the array:
```javascript
{
  id: 81,
  title: "Your Song Title",
  firstLine: "First line lyrics",
  lastWord: "LastWord",
  lastConsonant: "ल",
  themes: ["Category1", "Category2"],
  singerType: "Solo/Duet",
  year: 2024,
  movie: "Movie Name"
}
```

### Modifying Themes
Edit theme list in `word-input` dropdown (HTML) for Shabd-Bandh round

### Changing Timer Duration
Modify the default in HTML: `<input type="number" id="timer-duration" value="60">`

### Styling Changes
Edit `styles.css` for colors, fonts, and layout

---

## 📱 Responsive Layout

The app uses CSS Grid and Flexbox for responsive design:
- **Main Display**: Takes full-width on mobile, 50% on desktop
- **Host Panel**: Scrollable with all controls accessible
- **Font Sizes**: Scale down on smaller screens
- **Buttons**: Touch-friendly on mobile

---

## ⚠️ Known Limitations

1. **Song Database**: 80 songs (can be easily expanded)
2. **Letter Calculation**: Uses last consonant only
3. **Hindi Script**: Phonetic transliteration for search
4. **No Multiplayer Sync**: Single-host interface
5. **No Sound**: Host must manually listen to teams

---

## 🎯 Future Enhancement Ideas

- [ ] Add 100+ more songs to database
- [ ] Search by actor/actress filters
- [ ] Score tracking for multiple teams
- [ ] Audio/video playback of songs
- [ ] Network sync for team displays
- [ ] Hindi keyboard input support
- [ ] Export game statistics
- [ ] Theme/dark mode toggle
- [ ] Difficulty levels
- [ ] Multiplayer scoring dashboard

---

## 📄 License

This application is created for entertainment purposes. Songs and data are for educational use in the Antakshari game context.

---

## 🤝 Contributing

To improve this application:
1. Add more songs to `songsData.js`
2. Suggest new round modes
3. Improve UI/UX design
4. Report bugs or issues

---

## 📞 Support

For issues or questions:
1. Check the browser console (F12) for errors
2. Verify all files are in the same directory
3. Ensure JavaScript is enabled
4. Try a different browser

---

## 🎊 Enjoy Your Antakshari Game!

**Remember**: The app is just a tool. The real fun comes from the team spirit, quick thinking, and love for Hindi cinema music! 🎵

---

**Version**: 1.0  
**Last Updated**: 2025  
**Language**: Hindi + English  
**Status**: ✅ Full Production Ready
