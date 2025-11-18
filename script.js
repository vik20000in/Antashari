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
      'tune': '🎵 Tune Challenge',
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
    document.getElementById('tuneHostControls').style.display = 'none';
    
    // Clear input if it exists
    const songInput = document.getElementById('songInput');
    if (songInput) {
      songInput.value = '';
      songInput.focus();
    }
    
    this.answerRevealed = false;

    // Generate new challenge based on mode
    if (this.currentMode === 'word') {
      this.generateWordChallenge();
    } else if (this.currentMode === 'actor') {
      this.generateActorChallenge();
    } else if (this.currentMode === 'tune') {
      this.generateTuneChallenge();
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

    // Extract a word from the song's first line
    const words = song.firstLine.split(' ').filter(w => w.length > 2);
    const word = words[Math.floor(Math.random() * words.length)];

    this.currentChallenge = {
      song: song,
      type: 'word',
      word: word,
      wordHindi: word, // In Hindi - will display as is
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
    const challengeSubtext = document.getElementById('challengeSubtext');
    const challengeHint = document.getElementById('challengeHint');
    const nextWordBtn = document.getElementById('nextWordBtn');
    const inputSection = document.getElementById('inputSection');

    // Hide result and song info
    document.getElementById('resultSection').style.display = 'none';
    document.getElementById('songInfoDisplay').style.display = 'none';
    document.getElementById('tuneHostControls').style.display = 'none';

    if (type === 'word') {
      // Word Challenge: Show word in both languages, no input needed
      challengeText.textContent = `"${word}"`;
      
      // Try to get English translation (for now, show the Hindi word)
      // In a real app, you'd have a translation dictionary
      const englishWord = this.getEnglishTranslation(word);
      challengeSubtext.textContent = `(${englishWord})`;
      challengeSubtext.style.display = 'block';
      
      challengeHint.textContent = '🎤 Sing a song that contains this word!';
      
      // Show next word button, hide input
      nextWordBtn.style.display = 'block';
      inputSection.style.display = 'none';
      
    } else if (type === 'actor') {
      // Actor Challenge: Show actor name in both languages, no input needed
      challengeText.textContent = `${this.currentChallenge.actor}`;
      
      // Try to get English version of actor name if available
      const englishActor = this.getActorEnglishName(this.currentChallenge.actor);
      if (englishActor !== this.currentChallenge.actor) {
        challengeSubtext.textContent = `(${englishActor})`;
        challengeSubtext.style.display = 'block';
      } else {
        challengeSubtext.style.display = 'none';
      }
      
      challengeHint.textContent = '🎤 Sing a song by this actor/actress!';
      
      // Show next word button, hide input
      nextWordBtn.style.display = 'block';
      inputSection.style.display = 'none';
      
    } else if (type === 'tune') {
      // Tune Challenge: Host can see song name, users hear the tune
      challengeText.textContent = 'Listen to the tune...';
      challengeSubtext.style.display = 'none';
      challengeHint.textContent = '🎵 Host will play a tune from a song!';
      
      // Show tune host controls (host only)
      const tuneControls = document.getElementById('tuneHostControls');
      tuneControls.style.display = 'block';
      document.getElementById('hostSongName').textContent = this.currentChallenge.song.title;
      
      // Hide buttons
      nextWordBtn.style.display = 'none';
      inputSection.style.display = 'none';
      
    } else if (type === 'classic') {
      challengeText.textContent = `Find a song starting with:\n${this.currentChallenge.letter}`;
      challengeSubtext.style.display = 'none';
      challengeHint.textContent = 'The song title should start with this letter...';
      nextWordBtn.style.display = 'none';
      inputSection.style.display = 'block';
      
    } else if (type === 'theme') {
      challengeText.textContent = `Find a song from the theme:\n${this.currentChallenge.theme}`;
      challengeSubtext.style.display = 'none';
      challengeHint.textContent = 'Pick any song from this theme!';
      nextWordBtn.style.display = 'none';
      inputSection.style.display = 'block';
      
    } else if (type === 'speed') {
      challengeText.textContent = `Quick! Find this song:\n${this.currentChallenge.hintText}`;
      challengeSubtext.style.display = 'none';
      challengeHint.textContent = '⏱️ Speed mode - You have limited time!';
      nextWordBtn.style.display = 'none';
      inputSection.style.display = 'block';
    }
  }

  getActorEnglishName(hindiName) {
    // Map Hindi actor names to English (Devanagari to Roman)
    const actorNames = {
      'राज कपूर': 'Raj Kapoor',
      'राजेश खन्ना': 'Rajesh Khanna',
      'अमिताभ बच्चन': 'Amitabh Bachchan',
      'शाहरुख खान': 'Shah Rukh Khan',
      'आमिर खान': 'Aamir Khan',
      'अक्षय कुमार': 'Akshay Kumar',
      'सुनील दत्त': 'Sunil Dutt',
      'संजय दत्त': 'Sanjay Dutt',
    };
    
    return actorNames[hindiName] || hindiName;
  }

  getEnglishTranslation(word) {
    // Simple translation map for common Hindi words
    const translations = {
      'आज': 'Today',
      'रात': 'Night',
      'दिन': 'Day',
      'प्यार': 'Love',
      'दिल': 'Heart',
      'जीवन': 'Life',
      'गीत': 'Song',
      'गाना': 'Sing',
      'चाँद': 'Moon',
      'तारे': 'Stars',
      'आ': 'Come',
      'है': 'Is',
      'तु': 'You',
      'मेरा': 'Mine',
      'तुम्हारा': 'Yours',
      'साथ': 'Together',
      'मिलना': 'Meet',
      'बिछड़ना': 'Separation',
      'ख़ुशी': 'Happiness',
      'दुख': 'Sorrow',
    };
    
    // Return translation if available, otherwise return the word as-is
    return translations[word] || word;
  }

  checkAnswer() {
    const input = document.getElementById('songInput').value.toLowerCase().trim();

    if (!input) {
      this.showResult(false, 'Please type a song name!');
      return;
    }

    const challenge = this.currentChallenge;
    const correctSong = challenge.song;
    
    // Find matching songs from database
    const matchingSongs = songsData.filter(s => {
      const titleMatch = s.title.toLowerCase().includes(input) || 
                        input.includes(s.title.toLowerCase().substring(0, 3));
      return titleMatch;
    });

    let isCorrect = false;
    let matchedSong = null;

    if (matchingSongs.length > 0) {
      matchedSong = matchingSongs[0];
      
      // Verify the answer matches the challenge requirement
      switch(challenge.type) {
        case 'word':
          // Song must contain the challenge word
          if (correctSong.firstLine.toLowerCase().includes(challenge.word.toLowerCase())) {
            isCorrect = true;
          }
          break;
          
        case 'actor':
          // Song must be by the challenge actor
          if (matchedSong.actor === correctSong.actor) {
            isCorrect = true;
          }
          break;
          
        case 'classic':
          // Song must start with the challenge letter
          if (matchedSong.title.charAt(0).toLowerCase() === challenge.letter.toLowerCase()) {
            isCorrect = true;
          }
          break;
          
        case 'theme':
          // Song must be in the challenge theme
          if (matchedSong.themes && matchedSong.themes.includes(challenge.theme)) {
            isCorrect = true;
          }
          break;
          
        case 'speed':
          // Any song works in speed mode (basic version)
          isCorrect = true;
          break;
      }
    }

    if (isCorrect && matchedSong && !this.usedSongs.has(matchedSong.id)) {
      this.score += 10;
      this.usedSongs.add(matchedSong.id);
      this.displayResult(true, matchedSong);
    } else if (isCorrect && this.usedSongs.has(matchedSong.id)) {
      this.displayResult(false, null, 'already-played');
    } else {
      this.displayResult(false, null);
    }
  }

  displayResult(isCorrect, song, errorType = null) {
    const resultSection = document.getElementById('resultSection');
    const resultMessage = document.getElementById('resultMessage');
    const resultDetails = document.getElementById('resultDetails');
    const challenge = this.currentChallenge;

    resultSection.style.display = 'block';
    document.getElementById('songInfoDisplay').style.display = 'none';

    if (isCorrect) {
      resultMessage.textContent = '✅ Correct!';
      resultMessage.className = 'result-message correct';
      
      // Different message based on challenge type
      let message = 'Great job! 🎉';
      if (challenge.type === 'word') {
        message = `Found a song with the word "${challenge.word}"!`;
      } else if (challenge.type === 'actor') {
        message = `Found a song by ${challenge.actor}!`;
      } else if (challenge.type === 'classic') {
        message = `Found a song starting with "${challenge.letter}"!`;
      } else if (challenge.type === 'theme') {
        message = `Found a song from theme "${challenge.theme}"!`;
      }
      
      resultDetails.innerHTML = `<strong>${message}</strong>`;
      
      // Show song info
      document.getElementById('songInfoDisplay').style.display = 'block';
      document.getElementById('displayedSongTitle').textContent = `🎵 ${song.title}`;
      document.getElementById('displayedSongLine').textContent = `"${song.firstLine}"`;
      document.getElementById('displayedSongActor').textContent = `🎤 ${song.actor}`;
    } else {
      resultMessage.textContent = '❌ Not quite!';
      resultMessage.className = 'result-message incorrect';
      
      let errorMsg = '';
      if (errorType === 'already-played') {
        errorMsg = '<strong>You already played this song!</strong><br>Try a different one!';
      } else {
        const correct = this.currentChallenge.song;
        let detail = '';
        if (challenge.type === 'word') {
          detail = `needs the word "${challenge.word}"`;
        } else if (challenge.type === 'actor') {
          detail = `should be by ${challenge.actor}`;
        } else if (challenge.type === 'classic') {
          detail = `should start with "${challenge.letter}"`;
        } else if (challenge.type === 'theme') {
          detail = `should be from "${challenge.theme}"`;
        }
        errorMsg = `<strong>The answer was:</strong> ${correct.title}<br><small>(${detail})</small>`;
      }
      resultDetails.innerHTML = errorMsg;
    }

    // Update score
    document.getElementById('score').textContent = this.score;
  }

  // ===== MODE 2: ACTOR CHALLENGE =====
  generateActorChallenge() {
    // Get random song first
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    this.currentChallenge = {
      song: song,
      type: 'actor',
      actor: song.actor,
    };

    this.displayChallenge();
  }

  // ===== MODE 3: TUNE CHALLENGE =====
  generateTuneChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    this.currentChallenge = {
      song: song,
      type: 'tune',
      tuneUrl: this.generateTuneUrl(song), // We'll use a placeholder for now
    };

    this.displayChallenge();
  }

  generateTuneUrl(song) {
    // In a real app, this would return a URL to an audio file
    // For now, we'll simulate it with a data-uri or external audio
    // You can replace this with actual audio URLs from a service
    
    // Placeholder: using a Web Audio API to generate a simple tone
    // In production, you'd host actual song clips
    return `tune-${song.id}`;
  }

  playTune() {
    const song = this.currentChallenge.song;
    
    // Simple notification that tune "played" (visual feedback)
    const playBtn = document.getElementById('playTuneBtn');
    const originalText = playBtn.textContent;
    playBtn.textContent = '🎵 Playing...';
    playBtn.disabled = true;
    
    // Simulate tune playing for 3 seconds
    setTimeout(() => {
      playBtn.textContent = originalText;
      playBtn.disabled = false;
      this.showNotification(`Tune from "${song.title}" finished playing!`);
    }, 3000);
    
    // TODO: Add actual audio playback here
    // Example: const audio = new Audio(this.currentChallenge.tuneUrl);
    // audio.play();
  }

  showNotification(message) {
    // Simple notification display
    alert(message);
  }
  generateClassicChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    // Get first character (Devanagari consonant)
    const letter = song.title.charAt(0);

    this.currentChallenge = {
      song: song,
      type: 'classic',
      letter: letter,
    };

    this.displayChallenge();
  }

  // ===== MODE 4: THEME CHALLENGE =====
  generateThemeChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    // Use first theme from the song
    const theme = song.themes && song.themes.length > 0 ? song.themes[0] : 'Love';

    this.currentChallenge = {
      song: song,
      type: 'theme',
      theme: theme,
    };

    this.displayChallenge();
  }

  // ===== MODE 5: SPEED ROUND =====
  generateSpeedChallenge() {
    let song;
    do {
      song = this.getRandomSong();
    } while (this.usedSongs.has(song.id));

    const hintTypes = [
      `From movie: "${song.movie}"`,
      `Sung by: ${song.actor}`,
      `Starts with letter: "${song.title.charAt(0)}"`,
      `Theme: ${song.themes && song.themes.length > 0 ? song.themes[0] : 'Bollywood'}`
    ];

    const hintText = hintTypes[Math.floor(Math.random() * hintTypes.length)];

    this.currentChallenge = {
      song: song,
      type: 'speed',
      hintText: hintText,
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
