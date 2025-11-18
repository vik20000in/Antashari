// ===== ROYALTY-FREE MUSIC CONFIGURATION =====
// Using Creative Commons and royalty-free Bollywood-style instrumental music
// Sources: Free Music Archive, Incompetech, YouTube Audio Library

const musicConfiguration = {
  // Kal Ho Naa Ho - Bollywood style instrumental
  // ID 14 in songsData
  14: {
    title: 'Kal Ho Naa Ho',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', // Placeholder - royalty-free
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Awaara Hoon - Romantic classical Indian music
  // ID 5 in songsData
  5: {
    title: 'Awaara Hoon',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', // Placeholder - royalty-free
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Jo Jeeta Wohi Sikandar - Energetic Indian music
  // ID 31 in songsData
  31: {
    title: 'Jo Jeeta Wohi Sikandar',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', // Placeholder - royalty-free
    duration: 90,
    credit: 'Royalty-free instrumental'
  },

  // Chaiya Chaiya - Upbeat dance-inspired music
  // ID 26 in songsData
  26: {
    title: 'Chaiya Chaiya',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', // Placeholder - royalty-free
    duration: 90,
    credit: 'Royalty-free instrumental'
  }
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
// - Incompetech: https://incompetech.com/ (needs attribution)
// - YouTube Audio Library: In YouTube Studio > Audio Library
// - Pixabay Music: https://pixabay.com/music/ (CC0 - no attribution needed)
// - Freepd: https://www.freepd.com/ (Creative Commons)
