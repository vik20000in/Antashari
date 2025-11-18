// ===== YOUTUBE TUNE CONFIGURATION =====
// YouTube video IDs for official movie song clips
// These are official clips from YouTube that can be embedded

const tuneConfiguration = {
  // Kal Ho Naa Ho (Shah Rukh Khan, Sonu Nigam)
  1: {
    title: 'Kal Ho Naa Ho',
    youtubeId: 'uAYoLcKPbzU',
    startTime: 0,
    duration: 90
  },

  // Awaara Hoon (Raj Kapoor, Rafi)
  2: {
    title: 'Awaara Hoon',
    youtubeId: 'VvQ_Ky5ixwo',
    startTime: 0,
    duration: 90
  },

  // Jo Jeeta Wohi Sikandar (Aamir Khan)
  3: {
    title: 'Jo Jeeta Wohi Sikandar',
    youtubeId: 'Z7dFLjEBsqI',
    startTime: 0,
    duration: 90
  },

  // Chaiya Chaiya (Shah Rukh Khan)
  4: {
    title: 'Chaiya Chaiya',
    youtubeId: '0XqMcVHgvOc',
    startTime: 0,
    duration: 90
  },

  // Yeh Dil Na Hota Badvaa Hua (Rajesh Khanna)
  5: {
    title: 'Yeh Dil Na Hota Badvaa Hua',
    youtubeId: 'HYWMuYqM83A',
    startTime: 0,
    duration: 90
  },

  // Dishoom Dishoom (Amitabh Bachchan)
  6: {
    title: 'Dishoom Dishoom',
    youtubeId: 'xMi3dZFiKVE',
    startTime: 0,
    duration: 90
  },

  // Main Hoon Don (Amitabh Bachchan)
  7: {
    title: 'Main Hoon Don',
    youtubeId: 'aQ06Gw7qqzo',
    startTime: 0,
    duration: 90
  },

  // Yeh Jawani Hai Deewani (Ranbir Kapoor)
  8: {
    title: 'Yeh Jawani Hai Deewani',
    youtubeId: 'EYz0VqmKLqQ',
    startTime: 0,
    duration: 90
  },

  // Dil Cheez Baat Karo (Raj Kapoor)
  9: {
    title: 'Dil Cheez Baat Karo',
    youtubeId: 'GpJzX9jJrKk',
    startTime: 0,
    duration: 90
  },

  // Lag Ja Gale (Lata & Mukesh)
  10: {
    title: 'Lag Ja Gale',
    youtubeId: 'bM8YrxdYvEI',
    startTime: 0,
    duration: 90
  }
};

// Get YouTube embed URL with autoplay disabled (for safety)
function getYouTubeEmbedUrl(videoId, startTime = 0) {
  // Using nocookie domain for better privacy and compatibility
  return `https://www.youtube-nocookie.com/embed/${videoId}?start=${startTime}&autoplay=0&controls=1&modestbranding=1&rel=0`;
}

// Get YouTube direct play URL
function getYouTubePlayUrl(videoId, startTime = 0) {
  return `https://www.youtube.com/watch?v=${videoId}&t=${startTime}s`;
}

// Get direct audio stream from YouTube (using yt-dlp URL format)
// Note: This requires backend support
function getYouTubeAudioUrl(videoId) {
  // This would be handled by a backend service
  return `https://www.youtube.com/watch?v=${videoId}`;
}
