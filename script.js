// ============ ANTAKSHARI HOST GAME LOGIC ============

class AntakshariGame {
  constructor() {
    // Game State
    this.requiredLetter = 'क';
    this.songsPlayed = [];
    this.timerInterval = null;
    this.timeRemaining = 60;
    this.isTimerRunning = false;
    this.currentRoundMode = 'classic';
    this.specialChallenge = '';
    this.lastVerifiedSong = null;

    // Initialize
    this.initializeUI();
    this.setupEventListeners();
    this.updateGameState();
  }

  // ============ INITIALIZATION ============
  initializeUI() {
    // Set initial values
    document.getElementById('required-letter').textContent = this.requiredLetter;
    document.getElementById('current-letter-display').textContent = this.requiredLetter;
    document.getElementById('total-songs-count').textContent = songsData.length;
  }

  setupEventListeners() {
    // Verification
    document.getElementById('verify-btn').addEventListener('click', () => this.verifySong());
    document.getElementById('host-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.verifySong();
    });

    // Timer
    document.getElementById('start-timer-btn').addEventListener('click', () => this.startTimer());
    document.getElementById('pause-timer-btn').addEventListener('click', () => this.pauseTimer());
    document.getElementById('reset-timer-btn').addEventListener('click', () => this.resetTimer());
    document.getElementById('set-timer-duration-btn').addEventListener('click', () => this.setTimerDuration());

    // Actions
    document.getElementById('confirm-next-btn').addEventListener('click', () => this.confirmAndNext());
    document.getElementById('skip-song-btn').addEventListener('click', () => this.skipSong());

    // Letter Override
    document.getElementById('set-manual-letter-btn').addEventListener('click', () => this.setManualLetter());
    document.getElementById('manual-letter-input').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.setManualLetter();
    });

    // Round Modes
    document.getElementById('mode-classic-btn').addEventListener('click', () => this.setRoundMode('classic'));
    document.getElementById('mode-theme-btn').addEventListener('click', () => this.setRoundMode('theme'));
    document.getElementById('mode-word-btn').addEventListener('click', () => this.setRoundMode('word'));
    document.getElementById('mode-rapid-btn').addEventListener('click', () => this.setRoundMode('rapid'));
    document.getElementById('mode-duet-btn').addEventListener('click', () => this.setRoundMode('duet'));

    // Theme/Word/Actor inputs
    document.getElementById('set-theme-btn').addEventListener('click', () => this.displayTheme());
    document.getElementById('set-word-btn').addEventListener('click', () => this.displayWord());
    document.getElementById('set-actor-btn').addEventListener('click', () => this.displayActor());

    // Game Control
    document.getElementById('reset-game-btn').addEventListener('click', () => this.resetGame());
    document.getElementById('show-stats-btn').addEventListener('click', () => this.showStats());

    // Panel Toggle
    document.getElementById('toggle-panel-btn').addEventListener('click', () => this.togglePanel());

    // Modal
    document.querySelector('.close-modal').addEventListener('click', () => this.closeModal());
  }

  // ============ SONG VERIFICATION ============
  verifySong() {
    const input = document.getElementById('host-input').value.trim();
    const resultDiv = document.getElementById('verification-result');
    const resultMessage = document.getElementById('result-message');
    const resultDetails = document.getElementById('result-details');

    if (!input) {
      resultMessage.textContent = '⚠️ कृपया गीत के शब्द दर्ज करें';
      resultDiv.style.display = 'block';
      return;
    }

    // Search for song
    const foundSong = this.searchSong(input);

    if (!foundSong) {
      resultMessage.textContent = '❌ गीत नहीं मिला';
      resultDetails.innerHTML = '<p>डेटाबेस में यह गीत मौजूद नहीं है।</p>';
      resultDiv.style.display = 'block';
      return;
    }

    // Check letter match
    const startsWithRequiredLetter = foundSong.title.toLowerCase().startsWith(this.requiredLetter.toLowerCase()) ||
                                      this.isHindiCharacterMatch(foundSong.title[0], this.requiredLetter);

    if (!startsWithRequiredLetter) {
      resultMessage.textContent = '❌ अक्षर का मेल नहीं है';
      resultDetails.innerHTML = `
        <div class="result-details-item">
          <strong>गीत:</strong> ${foundSong.title}
        </div>
        <div class="result-details-item">
          <strong>शुरुआत:</strong> ${foundSong.firstLine}
        </div>
        <div class="result-details-item">
          <strong>आवश्यक अक्षर:</strong> ${this.requiredLetter} | <strong>वास्तविक:</strong> ${foundSong.title[0]}
        </div>
      `;
      resultDiv.style.display = 'block';
      return;
    }

    // Check if already played
    if (this.isSongAlreadyPlayed(foundSong.id)) {
      resultMessage.textContent = '❌ गीत पहले ही खेला जा चुका है';
      resultDetails.innerHTML = `
        <div class="result-details-item">
          <strong>गीत:</strong> ${foundSong.title}
        </div>
      `;
      resultDiv.style.display = 'block';
      return;
    }

    // Check for duet round constraint
    if (this.currentRoundMode === 'duet') {
      if (foundSong.singerType !== 'Duet') {
        resultMessage.textContent = '❌ यह एक युगल गीत नहीं है';
        resultDetails.innerHTML = `
          <div class="result-details-item">
            <strong>गीत:</strong> ${foundSong.title}
          </div>
          <div class="result-details-item">
            <strong>प्रकार:</strong> ${foundSong.singerType}
          </div>
        `;
        resultDiv.style.display = 'block';
        return;
      }
    }

    // Valid song!
    this.lastVerifiedSong = foundSong;
    resultMessage.textContent = '✅ वैध गीत!';
    resultDetails.innerHTML = `
      <div class="result-details-item">
        <strong>गीत:</strong> ${foundSong.title}
      </div>
      <div class="result-details-item">
        <strong>पहली पंक्ति:</strong> ${foundSong.firstLine}
      </div>
      <div class="result-details-item">
        <strong>अंतिम शब्द:</strong> ${foundSong.lastWord}
      </div>
      <div class="result-details-item">
        <strong>अगला अक्षर:</strong> ${foundSong.lastConsonant}
      </div>
      ${foundSong.singerType ? `<div class="result-details-item"><strong>प्रकार:</strong> ${foundSong.singerType}</div>` : ''}
    `;

    resultDiv.style.display = 'block';

    // Show confirm button
    document.getElementById('confirm-next-btn').style.display = 'block';
    
    // Stop timer
    this.pauseTimer();
  }

  searchSong(input) {
    const searchLower = input.toLowerCase();
    return songsData.find(song => {
      const titleWords = song.title.toLowerCase().split(' ');
      const firstLineWords = song.firstLine.toLowerCase().split(' ');
      
      // Check if input matches first one or two words
      if (titleWords[0].includes(searchLower) || titleWords[0].startsWith(searchLower.split(' ')[0])) {
        return true;
      }
      if (titleWords.length > 1 && (titleWords[0] + ' ' + titleWords[1]).includes(searchLower)) {
        return true;
      }
      if (firstLineWords[0].includes(searchLower)) {
        return true;
      }
      
      return false;
    });
  }

  isHindiCharacterMatch(char1, char2) {
    // Simple comparison for Hindi characters
    return char1.toLowerCase() === char2.toLowerCase();
  }

  isSongAlreadyPlayed(songId) {
    return this.songsPlayed.some(s => s.id === songId);
  }

  // ============ TIMER FUNCTIONS ============
  startTimer() {
    if (this.isTimerRunning) return;

    this.isTimerRunning = true;
    document.getElementById('start-timer-btn').style.display = 'none';
    document.getElementById('pause-timer-btn').style.display = 'block';

    this.timerInterval = setInterval(() => {
      this.timeRemaining--;
      document.getElementById('timer-display').textContent = this.timeRemaining;

      if (this.timeRemaining <= 0) {
        this.pauseTimer();
        this.showTimerExpiredMessage();
      }
    }, 1000);
  }

  pauseTimer() {
    this.isTimerRunning = false;
    clearInterval(this.timerInterval);
    document.getElementById('start-timer-btn').style.display = 'block';
    document.getElementById('pause-timer-btn').style.display = 'none';
  }

  resetTimer() {
    this.pauseTimer();
    this.timeRemaining = parseInt(document.getElementById('timer-duration').value) || 60;
    document.getElementById('timer-display').textContent = this.timeRemaining;
    document.getElementById('verification-result').style.display = 'none';
    document.getElementById('confirm-next-btn').style.display = 'none';
    this.lastVerifiedSong = null;
  }

  setTimerDuration() {
    const newDuration = parseInt(document.getElementById('timer-duration').value);
    if (newDuration && newDuration > 0) {
      this.timeRemaining = newDuration;
      document.getElementById('timer-display').textContent = this.timeRemaining;
    }
  }

  showTimerExpiredMessage() {
    const resultDiv = document.getElementById('verification-result');
    resultDiv.style.display = 'block';
    document.getElementById('result-message').textContent = '⏰ समय समाप्त!';
    document.getElementById('result-details').innerHTML = '<p>टाइमर समाप्त हो गया। अगली टीम का बारी है।</p>';
  }

  // ============ GAME ACTIONS ============
  confirmAndNext() {
    if (!this.lastVerifiedSong) return;

    const song = this.lastVerifiedSong;
    
    // Add to played songs
    this.songsPlayed.push({
      id: song.id,
      title: song.title,
      timestamp: new Date().toLocaleTimeString('hi-IN')
    });

    // Update last song info
    document.getElementById('last-song-info').innerHTML = `
      <p class="song-title">${song.title}</p>
      <p class="song-line">${song.firstLine}</p>
    `;

    // Update required letter
    this.requiredLetter = song.lastConsonant;
    document.getElementById('required-letter').textContent = this.requiredLetter;
    document.getElementById('current-letter-display').textContent = this.requiredLetter;

    // Update UI
    document.getElementById('host-input').value = '';
    document.getElementById('verification-result').style.display = 'none';
    document.getElementById('confirm-next-btn').style.display = 'none';

    // Reset timer
    this.resetTimer();
    this.updateGameState();
  }

  skipSong() {
    document.getElementById('host-input').value = '';
    document.getElementById('verification-result').style.display = 'none';
    document.getElementById('confirm-next-btn').style.display = 'none';
    this.resetTimer();
    this.lastVerifiedSong = null;
  }

  setManualLetter() {
    const input = document.getElementById('manual-letter-input').value.trim();
    if (input && input.length === 1) {
      this.requiredLetter = input;
      document.getElementById('required-letter').textContent = this.requiredLetter;
      document.getElementById('current-letter-display').textContent = this.requiredLetter;
      document.getElementById('manual-letter-input').value = '';
      this.showNotification('अक्षर अपडेट किया गया: ' + this.requiredLetter);
    }
  }

  // ============ ROUND MODES ============
  setRoundMode(mode) {
    this.currentRoundMode = mode;

    // Update button states
    document.querySelectorAll('.btn-mode').forEach(btn => btn.classList.remove('active'));
    document.getElementById('mode-' + mode + '-btn').classList.add('active');

    // Hide all special inputs
    document.getElementById('theme-input-group').style.display = 'none';
    document.getElementById('word-input-group').style.display = 'none';
    document.getElementById('actor-input-group').style.display = 'none';
    document.getElementById('special-challenge-section').style.display = 'none';

    // Show relevant inputs and update display
    switch (mode) {
      case 'classic':
        document.getElementById('round-mode-display').textContent = '1️⃣ Classic Akshar-Gyan';
        this.specialChallenge = '';
        break;
      case 'theme':
        document.getElementById('round-mode-display').textContent = '2️⃣ Bhaav-Ras (Theme Round)';
        document.getElementById('theme-input-group').style.display = 'flex';
        break;
      case 'word':
        document.getElementById('round-mode-display').textContent = '3️⃣ Shabd-Bandh (Word Challenge)';
        document.getElementById('word-input-group').style.display = 'flex';
        break;
      case 'rapid':
        document.getElementById('round-mode-display').textContent = '4️⃣ Sitaron Ke Naam (Rapid Fire)';
        document.getElementById('actor-input-group').style.display = 'flex';
        break;
      case 'duet':
        document.getElementById('round-mode-display').textContent = '5️⃣ Jodi-Daar (Duet Round)';
        break;
    }
  }

  displayTheme() {
    const theme = document.getElementById('theme-input').value.trim();
    if (theme) {
      this.specialChallenge = theme;
      document.getElementById('special-challenge-display').textContent = theme;
      document.getElementById('special-challenge-section').style.display = 'block';
      this.showNotification('विषय: ' + theme);
    }
  }

  displayWord() {
    const word = document.getElementById('word-input').value;
    if (word) {
      this.specialChallenge = word;
      document.getElementById('special-challenge-display').textContent = 'शब्द: ' + word;
      document.getElementById('special-challenge-section').style.display = 'block';
      this.showNotification('चुनौती शब्द: ' + word);
    }
  }

  displayActor() {
    const actor = document.getElementById('actor-input').value;
    if (actor) {
      this.specialChallenge = actor;
      document.getElementById('special-challenge-display').textContent = actor + ' के गीत';
      document.getElementById('special-challenge-section').style.display = 'block';
      this.showNotification('अभिनेता: ' + actor);
    }
  }

  // ============ GAME CONTROL ============
  resetGame() {
    if (confirm('क्या आप पूरा खेल रीसेट करना चाहते हैं?')) {
      this.songsPlayed = [];
      this.requiredLetter = 'क';
      this.lastVerifiedSong = null;
      this.currentRoundMode = 'classic';
      this.specialChallenge = '';

      // Reset UI
      this.resetTimer();
      document.getElementById('required-letter').textContent = this.requiredLetter;
      document.getElementById('current-letter-display').textContent = this.requiredLetter;
      document.getElementById('last-song-info').innerHTML = '<p class="song-title">शुरुआत</p><p class="song-line">कोई गीत नहीं</p>';
      document.getElementById('host-input').value = '';
      document.getElementById('verification-result').style.display = 'none';
      document.getElementById('confirm-next-btn').style.display = 'none';
      document.getElementById('special-challenge-section').style.display = 'none';
      document.getElementById('round-mode-display').textContent = 'Classic Akshar-Gyan';

      this.updateGameState();
      this.showNotification('खेल रीसेट किया गया!');
    }
  }

  showStats() {
    const modal = document.getElementById('stats-modal');
    const statsContent = document.getElementById('stats-content');

    const availableSongs = songsData.length - this.songsPlayed.length;
    const playedPercentage = ((this.songsPlayed.length / songsData.length) * 100).toFixed(1);

    let html = `
      <h3>📊 खेल के आंकड़े</h3>
      <p><strong>कुल गीत डेटाबेस में:</strong> ${songsData.length}</p>
      <p><strong>खेले गए गीत:</strong> ${this.songsPlayed.length}</p>
      <p><strong>शेष उपलब्ध गीत:</strong> ${availableSongs}</p>
      <p><strong>प्रतिशत खेले गए:</strong> ${playedPercentage}%</p>
      <p><strong>वर्तमान अक्षर:</strong> ${this.requiredLetter}</p>
      <p><strong>वर्तमान Round Mode:</strong> ${this.currentRoundMode.toUpperCase()}</p>
      <hr>
      <h3>🎵 हाल ही के गीत</h3>
    `;

    if (this.songsPlayed.length > 0) {
      html += '<ol>';
      [...this.songsPlayed].reverse().slice(0, 10).forEach(song => {
        html += `<li>${song.title} (${song.timestamp})</li>`;
      });
      html += '</ol>';
    } else {
      html += '<p>कोई गीत खेला नहीं गया</p>';
    }

    statsContent.innerHTML = html;
    modal.style.display = 'flex';
  }

  closeModal() {
    document.getElementById('stats-modal').style.display = 'none';
  }

  togglePanel() {
    const panel = document.getElementById('host-control-panel');
    const btn = document.getElementById('toggle-panel-btn');
    const isHidden = panel.style.display === 'none';

    panel.style.display = isHidden ? 'block' : 'none';
    btn.textContent = isHidden ? 'छुपाएं' : 'दिखाएं';
  }

  // ============ UI UPDATE ============
  updateGameState() {
    document.getElementById('songs-played-count').textContent = this.songsPlayed.length;
    this.updateSongsPlayedList();
  }

  updateSongsPlayedList() {
    const list = document.getElementById('songs-played-list');
    
    if (this.songsPlayed.length === 0) {
      list.innerHTML = '<p class="empty-message">अभी कोई गीत नहीं खेला गया</p>';
      return;
    }

    list.innerHTML = '';
    [...this.songsPlayed].reverse().slice(0, 5).forEach(song => {
      const item = document.createElement('div');
      item.className = 'song-item';
      item.innerHTML = `<strong>${song.title}</strong> <span style="font-size: 0.8rem; color: #95a5a6;">${song.timestamp}</span>`;
      list.appendChild(item);
    });
  }

  showNotification(message) {
    // Simple console notification (could be enhanced with UI toast)
    console.log('Notification:', message);
  }
}

// ============ INITIALIZE GAME ON PAGE LOAD ============
document.addEventListener('DOMContentLoaded', () => {
  window.game = new AntakshariGame();
  console.log('Antakshari Game Initialized!');
  console.log('Songs in Database:', songsData.length);
});
