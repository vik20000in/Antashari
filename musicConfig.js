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

  // Aashiqui Aa Gai (Various)
  // ID 45 in songsData
  45: {
    title: 'Aashiqui Aa Gai',
    audioUrl: './audio/aashiqui-aa-gai.mp3',
    duration: 90,
    credit: 'Bensound - Jazzy Frenchy'
  },

  // Baarish Ban Jaana (Various)
  // ID 46 in songsData
  46: {
    title: 'Baarish Ban Jaana',
    audioUrl: './audio/baarish-ban-jaana.mp3',
    duration: 90,
    credit: 'Bensound - Little Idea'
  },

  // Chandni O Meri Chandni (Various)
  // ID 47 in songsData
  47: {
    title: 'Chandni O Meri Chandni',
    audioUrl: './audio/chandni-o-meri-chandni.mp3',
    duration: 90,
    credit: 'Bensound - Memories'
  },

  // Dil Diwana (Various)
  // ID 48 in songsData
  48: {
    title: 'Dil Diwana',
    audioUrl: './audio/dil-diwana.mp3',
    duration: 90,
    credit: 'Bensound - Slow Motion'
  },

  // Ek Haseena Thi (Various)
  // ID 49 in songsData
  49: {
    title: 'Ek Haseena Thi',
    audioUrl: './audio/ek-haseena-thi.mp3',
    duration: 90,
    credit: 'Bensound - Tenderness'
  },

  // Faisal Khan (Various)
  // ID 50 in songsData
  50: {
    title: 'Faisal Khan',
    audioUrl: './audio/faisal-khan.mp3',
    duration: 90,
    credit: 'Bensound - Energy'
  },

  // Gaata Rahe Mera Dil (Various)
  // ID 51 in songsData
  51: {
    title: 'Gaata Rahe Mera Dil',
    audioUrl: './audio/gaata-rahe-mera-dil.mp3',
    duration: 90,
    credit: 'Bensound - A New Beginning'
  },

  // Haan Main Tumhara (Various)
  // ID 52 in songsData
  52: {
    title: 'Haan Main Tumhara',
    audioUrl: './audio/haan-main-tumhara.mp3',
    duration: 90,
    credit: 'Bensound - Buddy'
  },

  // Itna Toh Mujhe Khud Pe Yakeen Hai (Various)
  // ID 53 in songsData
  53: {
    title: 'Itna Toh Mujhe Khud Pe Yakeen Hai',
    audioUrl: './audio/itna-toh-mujhe.mp3',
    duration: 90,
    credit: 'Bensound - Cute'
  },

  // Jaadu Teri Nazar (Various)
  // ID 54 in songsData
  54: {
    title: 'Jaadu Teri Nazar',
    audioUrl: './audio/jaadu-teri-nazar.mp3',
    duration: 90,
    credit: 'Bensound - Sweet'
  },

  // Kambal Leke Udta Hoon (Various)
  // ID 55 in songsData
  55: {
    title: 'Kambal Leke Udta Hoon',
    audioUrl: './audio/kambal-leke-udta.mp3',
    duration: 90,
    credit: 'Bensound - Actionable'
  },

  // Lag Ja Gale (Various)
  // ID 56 in songsData
  56: {
    title: 'Lag Ja Gale',
    audioUrl: './audio/lag-ja-gale.mp3',
    duration: 90,
    credit: 'Bensound - The Elevator Bossa Nova'
  },

  // Madhuban Madhuban (Various)
  // ID 57 in songsData
  57: {
    title: 'Madhuban Madhuban',
    audioUrl: './audio/madhuban-madhuban.mp3',
    duration: 90,
    credit: 'Bensound - Going Higher'
  },

  // Naina Bhar Gaye (Various)
  // ID 58 in songsData
  58: {
    title: 'Naina Bhar Gaye',
    audioUrl: './audio/naina-bhar-gaye.mp3',
    duration: 90,
    credit: 'Bensound - Hey'
  },

  // Om Shanti Om (Various)
  // ID 59 in songsData
  59: {
    title: 'Om Shanti Om',
    audioUrl: './audio/om-shanti-om.mp3',
    duration: 90,
    credit: 'Bensound - Dubstep'
  },

  // Pyar Ka Rog (Various)
  // ID 60 in songsData
  60: {
    title: 'Pyar Ka Rog',
    audioUrl: './audio/pyar-ka-rog.mp3',
    duration: 90,
    credit: 'Bensound - Funky Suspense'
  },

  // Raaz Ki Baat (Various)
  // ID 61 in songsData
  61: {
    title: 'Raaz Ki Baat',
    audioUrl: './audio/raaz-ki-baat.mp3',
    duration: 90,
    credit: 'Bensound - Better Days'
  },

};

// Get music configuration for a specific song ID
function getMusicForSong(songId) {
  return musicConfiguration[songId] || null;
}

// ===== SETUP INSTRUCTIONS =====
// 
// OPTION 1: Automatic Download (Recommended)
// Run in PowerShell: .\download_sample_audio.ps1
//
// OPTION 2: Manual Setup
// 1. Download 21 MP3 files from:
//    - Bensound: https://www.bensound.com/royalty-free-music
//    - Free Music Archive: https://freemusicarchive.org/
//    - YouTube Audio Library: https://studio.youtube.com
//
// 2. Rename files to match the exact names in this config
//    (e.g., awaara-hoon.mp3, kal-ho-naa-ho.mp3, etc.)
//
// 3. Place all files in: audio/ folder
//
// 4. Refresh browser - Tune Challenge will work!
//
// Note: Music by Bensound.com - Attribution required
