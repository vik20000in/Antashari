// ===== ROYALTY-FREE MUSIC CONFIGURATION =====
// Bollywood instrumental tracks for Tune Challenge
// All music is royalty-free or Creative Commons licensed

const musicConfiguration = {
  // Awaara Hoon (Raj Kapoor)
  // ID 5 in songsData
  5: {
    title: 'Awaara Hoon',
    audioUrl: './audio/awaara-hoon.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Kal Ho Naa Ho (Shah Rukh Khan)
  // ID 14 in songsData
  14: {
    title: 'Kal Ho Naa Ho',
    audioUrl: './audio/kal-ho-naa-ho.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Chaiya Chaiya (Shah Rukh Khan)
  // ID 26 in songsData
  26: {
    title: 'Chaiya Chaiya',
    audioUrl: './audio/chaiya-chaiya.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Jo Jeeta Wohi Sikandar (Aamir Khan)
  // ID 31 in songsData
  31: {
    title: 'Jo Jeeta Wohi Sikandar',
    audioUrl: './audio/jo-jeeta-wohi-sikandar.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Aashiqui Aa Gai (Various)
  // ID 45 in songsData
  45: {
    title: 'Aashiqui Aa Gai',
    audioUrl: './audio/aashiqui-aa-gai.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Baarish Ban Jaana (Various)
  // ID 46 in songsData
  46: {
    title: 'Baarish Ban Jaana',
    audioUrl: './audio/baarish-ban-jaana.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Chandni O Meri Chandni (Various)
  // ID 47 in songsData
  47: {
    title: 'Chandni O Meri Chandni',
    audioUrl: './audio/chandni-o-meri-chandni.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Dil Diwana (Various)
  // ID 48 in songsData
  48: {
    title: 'Dil Diwana',
    audioUrl: './audio/dil-diwana.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Ek Haseena Thi (Various)
  // ID 49 in songsData
  49: {
    title: 'Ek Haseena Thi',
    audioUrl: './audio/ek-haseena-thi.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Faisal Khan (Various)
  // ID 50 in songsData
  50: {
    title: 'Faisal Khan',
    audioUrl: './audio/faisal-khan.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Gaata Rahe Mera Dil (Various)
  // ID 51 in songsData
  51: {
    title: 'Gaata Rahe Mera Dil',
    audioUrl: './audio/gaata-rahe-mera-dil.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Haan Main Tumhara (Various)
  // ID 52 in songsData
  52: {
    title: 'Haan Main Tumhara',
    audioUrl: './audio/haan-main-tumhara.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Itna Toh Mujhe Khud Pe Yakeen Hai (Various)
  // ID 53 in songsData
  53: {
    title: 'Itna Toh Mujhe Khud Pe Yakeen Hai',
    audioUrl: './audio/itna-toh-mujhe-khud-pe-yakeen-hai.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Jaadu Teri Nazar (Various)
  // ID 54 in songsData
  54: {
    title: 'Jaadu Teri Nazar',
    audioUrl: './audio/jaadu-teri-nazar.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Kambal Leke Udta Hoon (Various)
  // ID 55 in songsData
  55: {
    title: 'Kambal Leke Udta Hoon',
    audioUrl: './audio/kambal-leke-udta-hoon.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Lag Ja Gale (Various)
  // ID 56 in songsData
  56: {
    title: 'Lag Ja Gale',
    audioUrl: './audio/lag-ja-gale.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Madhuban Madhuban (Various)
  // ID 57 in songsData
  57: {
    title: 'Madhuban Madhuban',
    audioUrl: './audio/madhuban-madhuban.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Naina Bhar Gaye (Various)
  // ID 58 in songsData
  58: {
    title: 'Naina Bhar Gaye',
    audioUrl: './audio/naina-bhar-gaye.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Om Shanti Om (Various)
  // ID 59 in songsData
  59: {
    title: 'Om Shanti Om',
    audioUrl: './audio/om-shanti-om.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Pyar Ka Rog (Various)
  // ID 60 in songsData
  60: {
    title: 'Pyar Ka Rog',
    audioUrl: './audio/pyar-ka-rog.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Raaz Ki Baat (Various)
  // ID 61 in songsData
  61: {
    title: 'Raaz Ki Baat',
    audioUrl: './audio/raaz-ki-baat.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
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
