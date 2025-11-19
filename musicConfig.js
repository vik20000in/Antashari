// ===== LOCAL MUSIC CONFIGURATION =====
// Using local MP3 files from the audio/ folder
// Download audio files using: .\download_sample_audio.ps1
// Or manually add MP3 files to audio/ folder with these exact names

const musicConfiguration = {
  // Awaara Hoon (Raj Kapoor)
  // ID 5 in songsData
  5: {
    title: 'Awaara Hoon',
    audioUrl: './audio/awaara-hoon.mp3',
    duration: 90,
    credit: 'Bensound - Ukulele'
  },

  // Kal Ho Naa Ho (Shah Rukh Khan)
  // ID 14 in songsData
  14: {
    title: 'Kal Ho Naa Ho',
    audioUrl: './audio/kal-ho-naa-ho.mp3',
    duration: 90,
    credit: 'Bensound - Creative Minds'
  },

  // Chaiya Chaiya (Shah Rukh Khan)
  // ID 26 in songsData
  26: {
    title: 'Chaiya Chaiya',
    audioUrl: './audio/chaiya-chaiya.mp3',
    duration: 90,
    credit: 'Bensound - Sunny'
  },

  // Jo Jeeta Wohi Sikandar (Aamir Khan)
  // ID 31 in songsData
  31: {
    title: 'Jo Jeeta Wohi Sikandar',
    audioUrl: './audio/jo-jeeta-wohi-sikandar.mp3',
    duration: 90,
    credit: 'Bensound - Happy Rock'
  },

  // Piya Tu Ab To Aaja
  // ID 45 in songsData
  45: {
    title: 'Piya Tu Ab To Aaja',
    audioUrl: './audio/piya-tu-ab-to-aaja.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Prem Se Bhara Hai
  // ID 46 in songsData
  46: {
    title: 'Prem Se Bhara Hai',
    audioUrl: './audio/prem-se-bhara-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Funtoosh Banaya Tune
  // ID 47 in songsData
  47: {
    title: 'Funtoosh Banaya Tune',
    audioUrl: './audio/funtoosh-banaya-tune.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Baarish Mein Tume Dekha
  // ID 48 in songsData
  48: {
    title: 'Baarish Mein Tume Dekha',
    audioUrl: './audio/baarish-mein-tume-dekha.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Badi Mushkil Hai
  // ID 49 in songsData
  49: {
    title: 'Badi Mushkil Hai',
    audioUrl: './audio/badi-mushkil-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Barso Re Megha
  // ID 50 in songsData
  50: {
    title: 'Barso Re Megha',
    audioUrl: './audio/barso-re-megha.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Bhole Shankara
  // ID 51 in songsData
  51: {
    title: 'Bhole Shankara',
    audioUrl: './audio/bhole-shankara.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Maa Tujhe Salaam
  // ID 52 in songsData
  52: {
    title: 'Maa Tujhe Salaam',
    audioUrl: './audio/maa-tujhe-salaam.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mere Haath Mein Teri Bansuri
  // ID 53 in songsData
  53: {
    title: 'Mere Haath Mein Teri Bansuri',
    audioUrl: './audio/mere-haath-mein-teri-bansuri.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mere Sapno Ki Rani
  // ID 54 in songsData
  54: {
    title: 'Mere Sapno Ki Rani',
    audioUrl: './audio/mere-sapno-ki-rani.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mohabbat Barsa Dena Tu
  // ID 55 in songsData
  55: {
    title: 'Mohabbat Barsa Dena Tu',
    audioUrl: './audio/mohabbat-barsa-dena-tu.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Yeh Kya Hua
  // ID 56 in songsData
  56: {
    title: 'Yeh Kya Hua',
    audioUrl: './audio/yeh-kya-hua.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Yeh Dua Hai Meri
  // ID 57 in songsData
  57: {
    title: 'Yeh Dua Hai Meri',
    audioUrl: './audio/yeh-dua-hai-meri.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Raaz Ki Baat
  // ID 58 in songsData
  58: {
    title: 'Raaz Ki Baat',
    audioUrl: './audio/raaz-ki-baat.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Raat Bhar Jaagta Hoon Main
  // ID 59 in songsData
  59: {
    title: 'Raat Bhar Jaagta Hoon Main',
    audioUrl: './audio/raat-bhar-jaagta-hoon-main.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Roli Roli Gulal Khelo
  // ID 60 in songsData
  60: {
    title: 'Roli Roli Gulal Khelo',
    audioUrl: './audio/roli-roli-gulal-khelo.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Laila O Laila (Rishi Kapoor - Prem Rog)
  // ID 61 in songsData
  61: {
    title: 'Laila O Laila',
    audioUrl: './audio/laila-o-laila.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

};

// Get music configuration for a specific song ID
function getMusicForSong(songId) {
  return musicConfiguration[songId] || null;
}

// INSTRUCTIONS FOR ADDING REAL ROYALTY-FREE MUSIC:
// 1. Visit Free Music Archive: https://freemusicarchive.org/
// 2. Search for Bollywood or Indian instrumental music
// 3. Download tracks and add to /audio folder
// 4. Update audioUrl with: './audio/song-name.mp3'
//
// ALTERNATIVE SOURCES:
// - Pixabay Music: https://pixabay.com/music/ (CC0 - no attribution needed)
// - Freepd: https://www.freepd.com/ (Creative Commons)
// - YouTube Audio Library: In YouTube Studio > Audio Library
