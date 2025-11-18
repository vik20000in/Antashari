// ===== YOUTUBE TUNE CONFIGURATION =====
// YouTube video IDs for official movie song clips
// These are official clips from YouTube that can be embedded

const tuneConfiguration = {
  // Kal Ho Naa Ho (Shah Rukh Khan, Sonu Nigam)
  // ID 14 in songsData
  14: {
    title: 'Kal Ho Naa Ho',
    youtubeId: 'uAYoLcKPbzU',
    startTime: 0,
    duration: 90
  },

  // Awaara Hoon (Raj Kapoor, Rafi)
  // ID 5 in songsData
  5: {
    title: 'Awaara Hoon',
    youtubeId: 'VvQ_Ky5ixwo',
    startTime: 0,
    duration: 90
  },

  // Jo Jeeta Wohi Sikandar (Aamir Khan)
  // ID 31 in songsData
  31: {
    title: 'Jo Jeeta Wohi Sikandar',
    youtubeId: 'Z7dFLjEBsqI',
    startTime: 0,
    duration: 90
  },

  // Chaiya Chaiya (Shah Rukh Khan)
  // ID 26 in songsData
  26: {
    title: 'Chaiya Chaiya',
    youtubeId: '0XqMcVHgvOc',
    startTime: 0,
    duration: 90
  }
};

// Get YouTube embed URL with autoplay support
function getYouTubeEmbedUrl(videoId, startTime = 0) {
  // Using regular youtube.com domain with autoplay enabled
  // sandbox="allow-same-origin allow-scripts allow-presentation" is required in HTML for autoplay to work
  return `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1&controls=1&modestbranding=1&rel=0`;
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

// Get tune configuration for a specific song ID
function getTuneForSong(songId) {
  return tuneConfiguration[songId] || null;
}
