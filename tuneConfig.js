// ===== YOUTUBE TUNE CONFIGURATION =====
// YouTube video IDs for official movie song clips
// These are official clips from YouTube that can be embedded

const tuneConfiguration = {
  // Kal Ho Naa Ho (Shah Rukh Khan, Sonu Nigam)
  1: {
    title: 'Kal Ho Naa Ho',
    youtubeId: 'uAYoLcKPbzU', // Official clip
    startTime: 0,
    duration: 90 // 90 seconds
  },

  // Awaara Hoon (Raj Kapoor, Rafi)
  2: {
    title: 'Awaara Hoon',
    youtubeId: 'VvQ_Ky5ixwo', // Official classic
    startTime: 0,
    duration: 90
  },

  // Jo Jeeta Wohi Sikandar (Aamir Khan)
  3: {
    title: 'Jo Jeeta Wohi Sikandar',
    youtubeId: 'Z7dFLjEBsqI', // Title track
    startTime: 0,
    duration: 90
  },

  // Chaiya Chaiya (Shah Rukh Khan, Dancefloor)
  4: {
    title: 'Chaiya Chaiya',
    youtubeId: '0XqMcVHgvOc', // Official video
    startTime: 0,
    duration: 90
  },

  // Yeh Dil Na Hota Badvaa Hua (Rajesh Khanna, Kishore Kumar)
  5: {
    title: 'Yeh Dil Na Hota Badvaa Hua',
    youtubeId: 'HYWMuYqM83A', // Classic
    startTime: 0,
    duration: 90
  },

  // Dishoom Dishoom (Amitabh Bachchan, Sholay)
  6: {
    title: 'Dishoom Dishoom',
    youtubeId: 'xMi3dZFiKVE', // From Sholay
    startTime: 0,
    duration: 90
  },

  // Main Hoon Don (Amitabh Bachchan, Don)
  7: {
    title: 'Main Hoon Don',
    youtubeId: 'aQ06Gw7qqzo', // Title track
    startTime: 0,
    duration: 90
  },

  // Yeh Jawani Hai Deewani (Ranbir Kapoor, Deepika Padukone)
  8: {
    title: 'Yeh Jawani Hai Deewani',
    youtubeId: 'EYz0VqmKLqQ', // Title track
    startTime: 0,
    duration: 90
  },

  // Dil Cheez Baat Karo (Raj Kapoor, Mukesh)
  9: {
    title: 'Dil Cheez Baat Karo',
    youtubeId: 'GpJzX9jJrKk', // Classic
    startTime: 0,
    duration: 90
  },

  // Lag Ja Gale (Lata Mangeshkar, Mukesh)
  10: {
    title: 'Lag Ja Gale',
    youtubeId: 'bM8YrxdYvEI', // Classic duet
    startTime: 0,
    duration: 90
  },

  // Tum To Ho Paas Mere (Lata & Rafi, classic)
  11: {
    title: 'Tum To Ho Paas Mere',
    youtubeId: 'QYjxVBjjSdE', // Classic
    startTime: 0,
    duration: 90
  },

  // Abhi Na Jao Chhod Kar (Lata Mangeshkar, Ashok Kumar)
  12: {
    title: 'Abhi Na Jao Chhod Kar',
    youtubeId: 'q5Q0LyPl5yQ', // Classic
    startTime: 0,
    duration: 90
  },

  // Ye Kaali Kaali Aankhein (Bhuvan Bam version - popular)
  13: {
    title: 'Ye Kaali Kaali Aankhein',
    youtubeId: 'o5VCWWNgYPE', // Popular version
    startTime: 0,
    duration: 90
  },

  // Nashe Si Chadh Gayi (Shahid Kapoor, Kaminey)
  14: {
    title: 'Nashe Si Chadh Gayi',
    youtubeId: 'Ygxjf7xFVqE', // Official
    startTime: 0,
    duration: 90
  },

  // Baarish Ban Jaana (Arijit Singh, modern)
  15: {
    title: 'Baarish Ban Jaana',
    youtubeId: 'q0VLmUU8F7U', // Modern classic
    startTime: 0,
    duration: 90
  }
};

// Map song IDs to tune configuration
function getTuneForSong(songId) {
  return tuneConfiguration[songId] || null;
}

// Get random tune from available collection
function getRandomTune() {
  const ids = Object.keys(tuneConfiguration);
  const randomId = ids[Math.floor(Math.random() * ids.length)];
  return tuneConfiguration[randomId];
}

// Get YouTube embed URL from video ID
function getYouTubeEmbedUrl(videoId, startTime = 0) {
  return `https://www.youtube.com/embed/${videoId}?start=${startTime}&controls=0&modestbranding=1&rel=0`;
}

// Get YouTube thumbnail URL
function getYouTubeThumbnail(videoId) {
  return `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
}
