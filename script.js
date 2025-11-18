// ===== ANTAKSHARI GAME ENGINE - PHASE 1 =====
// Starting with Word Challenge Mode
// Will add more modes incrementally

class AntakshariGame {
  constructor() {
    this.currentMode = null;
    this.score = 0;
    this.usedSongs = new Set();
    this.currentChallenge = null;
    this.answerRevealed = false;
  }

  startMode(mode) {
    this.currentMode = mode;
    this.score = 0;
    this.usedSongs.clear();
    this.answerRevealed = false;
    
    // Update UI
    this.showGameScreen();
    this.updateModeTitle(mode);
    this.nextChallenge();
  }

  updateModeTitle(mode) {
    const titles = {
      'word': '🎯 Word Challenge',
      'actor': '🎬 Actor Challenge',
      'classic': '🔤 Classic Antakshari',
      'theme': '🎨 Theme Challenge',
      'speed': '⚡ Speed Round'
    };
    document.getElementById('gameModeTitle').textContent = titles[mode] || mode;
  }

  showGameScreen() {
    document.getElementById('homeScreen').classList.remove('active');
    document.getElementById('gameScreen').classList.add('active');
  }

  nextChallenge() {
    // Clear previous result
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('songInfoDisplay').style.display = 'none';
    document.getElementById('songInput').value = '';
    document.getElementById('songInput').focus();
    this.answerRevealed = false;

    // Generate new challenge based on mode
    if (this.currentMode === 'word') {
      this.generateWordChallenge();
    } else if (this.currentMode === 'actor') {
      this.generateActorChallenge();
    } else if (this.currentMode === 'classic') {
      this.generateClassicChallenge();
    } else if (this.currentMode === 'theme') {
      this.generateThemeChallenge();
    } else if (this.currentMode === 'speed') {
      this.generateSpeedChallenge();
    }
  }

  // ===== MODE 1: WORD CHALLENGE =====
  generateWordChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    this.currentChallenge = {
      song: song,
      type: 'word',
      word: this.getRandomWord(song.firstLine),
    };

    this.displayChallenge();
  }

  getRandomWord(sentence) {
    const words = sentence.split(' ').filter(w => w.length > 2);
    return words[Math.floor(Math.random() * words.length)];
  }

  displayChallenge() {
    const { type, word } = this.currentChallenge;
    const challengeText = document.getElementById('challengeText');
    const challengeHint = document.getElementById('challengeHint');

    if (type === 'word') {
      challengeText.textContent = `Find a song with the word:\n"${word}"`;
      challengeHint.textContent = 'Type any song that contains this word...';
    } else if (type === 'actor') {
      challengeText.textContent = `Find a song by:\n${this.currentChallenge.actor}`;
      challengeHint.textContent = 'This actor/actress sang many famous songs!';
    } else if (type === 'classic') {
      challengeText.textContent = `Find a song starting with:\n${this.currentChallenge.letter}`;
      challengeHint.textContent = 'The song title should start with this letter...';
    } else if (type === 'theme') {
      challengeText.textContent = `Find a song from the theme:\n${this.currentChallenge.theme}`;
      challengeHint.textContent = 'Pick any song from this theme!';
    } else if (type === 'speed') {
      challengeText.textContent = `Quick! Find this song:\n${this.currentChallenge.hintText}`;
      challengeHint.textContent = '⏱️ Speed mode - You have limited time!';
    }
  }

  checkAnswer() {
    const input = document.getElementById('songInput').value.toLowerCase().trim();

    if (!input) {
      this.showResult(false, 'Please type a song name!');
      return;
    }

    const challenge = this.currentChallenge;
    const song = challenge.song;
    const songTitle = song.title.toLowerCase();
    const similarSongs = songsData.filter(s => 
      s.title.toLowerCase().includes(input) || input.includes(s.title.toLowerCase().substring(0, 3))
    );

    // Check if answer matches the challenge requirement
    let isCorrect = false;
    let matchedSong = null;

    if (challenge.type === 'word') {
      // Check if any song with the word contains the input
      const correctSongs = songsData.filter(s => 
        s.firstLine.toLowerCase().includes(challenge.word.toLowerCase()) &&
        (s.title.toLowerCase().includes(input) || input.includes(s.title.toLowerCase().substring(0, 3)))
      );
      
      if (correctSongs.length > 0) {
        matchedSong = correctSongs[0];
        isCorrect = true;
      }
    }

    if (isCorrect && matchedSong) {
      this.score += 10;
      this.usedSongs.add(matchedSong.id);
      this.displayResult(true, matchedSong);
    } else {
      this.displayResult(false, null);
    }
  }

  displayResult(isCorrect, song) {
    const resultSection = document.getElementById('resultSection');
    const resultMessage = document.getElementById('resultMessage');
    const resultDetails = document.getElementById('resultDetails');

    resultSection.style.display = 'block';
    document.getElementById('songInfoDisplay').style.display = 'none';

    if (isCorrect) {
      resultMessage.textContent = '✅ Correct!';
      resultMessage.className = 'result-message correct';
      resultDetails.innerHTML = `<strong>Great job!</strong> You found a song with the word "${this.currentChallenge.word}"`;
      
      // Show song info
      document.getElementById('songInfoDisplay').style.display = 'block';
      document.getElementById('displayedSongTitle').textContent = `🎵 ${song.title}`;
      document.getElementById('displayedSongLine').textContent = `"${song.firstLine}"`;
      document.getElementById('displayedSongActor').textContent = `🎤 ${song.actor}`;
    } else {
      resultMessage.textContent = '❌ Not quite!';
      resultMessage.className = 'result-message incorrect';
      const correct = this.currentChallenge.song;
      resultDetails.innerHTML = `<strong>The answer was:</strong> ${correct.title}<br>Keep trying! You got this! 💪`;
    }

    // Update score
    document.getElementById('score').textContent = this.score;
  }

  // ===== MODE 2: ACTOR CHALLENGE (Placeholder) =====
  generateActorChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    const actors = ['राज कपूर', 'राजेश खन्ना', 'अमिताभ बच्चन', 'शाहरुख खान'];
    const actor = actors[Math.floor(Math.random() * actors.length)];

    this.currentChallenge = {
      song: song,
      type: 'actor',
      actor: actor,
    };

    this.displayChallenge();
  }

  // ===== MODE 3: CLASSIC ANTAKSHARI (Placeholder) =====
  generateClassicChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    const letters = 'क ख ग घ च छ ज झ ट ठ ड ढ त थ द ध न प फ ब भ म य र ल व श ष स ह'.split(' ');
    const letter = letters[Math.floor(Math.random() * letters.length)];

    this.currentChallenge = {
      song: song,
      type: 'classic',
      letter: letter,
    };

    this.displayChallenge();
  }

  // ===== MODE 4: THEME CHALLENGE (Placeholder) =====
  generateThemeChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    this.currentChallenge = {
      song: song,
      type: 'theme',
      theme: song.themes[0] || 'Love',
    };

    this.displayChallenge();
  }

  // ===== MODE 5: SPEED ROUND (Placeholder) =====
  generateSpeedChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    const hintTexts = [
      `A song from "${song.movie}"`,
      `By actor ${song.actor}`,
      `Starts with letter "${song.title.charAt(0)}"`,
    ];

    this.currentChallenge = {
      song: song,
      type: 'speed',
      hintText: hintTexts[Math.floor(Math.random() * hintTexts.length)],
    };

    this.displayChallenge();
  }

  // ===== UTILITY FUNCTIONS =====
  getRandomSong() {
    return songsData[Math.floor(Math.random() * songsData.length)];
  }
}

// ===== UI FUNCTIONS =====
let game;

function init() {
  game = new AntakshariGame();
}

function startGame(mode) {
  game.startMode(mode);
}

function goHome() {
  document.getElementById('gameScreen').classList.remove('active');
  document.getElementById('homeScreen').classList.add('active');
}

function nextChallenge() {
  game.nextChallenge();
}

function checkAnswer() {
  game.checkAnswer();
}

function handleEnter(event) {
  if (event.key === 'Enter') {
    checkAnswer();
  }
}

// ===== INITIALIZE ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', init);
