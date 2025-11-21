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

  // Kuch Kuch Hota Hai
  // ID 17 in songsData
  17: {
    title: 'Kuch Kuch Hota Hai',
    audioUrl: './audio/kuch-kuch-hota-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kabhi Kabhi Mere Dil Mein
  // ID 18 in songsData
  18: {
    title: 'Kabhi Kabhi Mere Dil Mein',
    audioUrl: './audio/kabhi-kabhi-mere-dil-mein.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jab Tak Hai Jaan
  // ID 30 in songsData
  30: {
    title: 'Jab Tak Hai Jaan',
    audioUrl: './audio/jab-tak-hai-jaan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jaadu Teri Nazar
  // ID 32 in songsData
  32: {
    title: 'Jaadu Teri Nazar',
    audioUrl: './audio/jaadu-teri-nazar.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Dilbar Dilbar
  // ID 36 in songsData
  36: {
    title: 'Dilbar Dilbar',
    audioUrl: './audio/dilbar-dilbar.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pehla Nasha
  // ID 44 in songsData
  44: {
    title: 'Pehla Nasha',
    audioUrl: './audio/pehla-nasha.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Arre Dekhega India (Chak De! India)
  // ID 2 in songsData
  2: {
    title: 'Arre Dekhega India',
    audioUrl: './audio/arre-dekhega-india.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Likhe Jo Khat Tumhe
  // ID 62 in songsData
  62: {
    title: 'Likhe Jo Khat Tumhe',
    audioUrl: './audio/likhe-jo-khat-tumhe.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kahe Toh Pardes
  // ID 15 in songsData
  15: {
    title: 'Kahe Toh Pardes',
    audioUrl: './audio/kahe-toh-pardes.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Geet Gata Hoon Main
  // ID 21 in songsData
  21: {
    title: 'Geet Gata Hoon Main',
    audioUrl: './audio/geet-gata-hoon-main.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jaane Bhi Do Yaaro
  // ID 29 in songsData
  29: {
    title: 'Jaane Bhi Do Yaaro',
    audioUrl: './audio/jaane-bhi-do-yaaro.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Dil Dhoondta Hai
  // ID 37 in songsData
  37: {
    title: 'Dil Dhoondta Hai',
    audioUrl: './audio/dil-dhoondta-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Na Jane Kyon
  // ID 42 in songsData
  42: {
    title: 'Na Jane Kyon',
    audioUrl: './audio/na-jane-kyon.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Haath Mein
  // ID 39 in songsData
  39: {
    title: 'Tere Haath Mein',
    audioUrl: './audio/tere-haath-mein.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Soni Soni Ankh Marey
  // ID 66 in songsData
  66: {
    title: 'Soni Soni Ankh Marey',
    audioUrl: './audio/soni-soni-ankh-marey.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Ik Teri Muskarahat
  // ID 10 in songsData
  10: {
    title: 'Ik Teri Muskarahat',
    audioUrl: './audio/ik-teri-muskarahat.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Khwaab Ho Tum Ya Koi Khyal
  // ID 20 in songsData
  20: {
    title: 'Khwaab Ho Tum Ya Koi Khyal',
    audioUrl: './audio/khwaab-ho-tum-ya-koi-khyal.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Chod De Saari Duniya
  // ID 27 in songsData
  27: {
    title: 'Chod De Saari Duniya',
    audioUrl: './audio/chod-de-saari-duniya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Gulab Bahar
  // ID 23 in songsData
  23: {
    title: 'Gulab Bahar',
    audioUrl: './audio/gulab-bahar.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Vaada Raha Sanam
  // ID 64 in songsData
  64: {
    title: 'Vaada Raha Sanam',
    audioUrl: './audio/vaada-raha-sanam.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tujhe Dekha To
  // ID 81 in songsData
  81: {
    title: 'Tujhe Dekha To',
    audioUrl: './audio/tujhe-dekha-to.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Koi Mil Gaya
  // ID 82 in songsData
  82: {
    title: 'Koi Mil Gaya',
    audioUrl: './audio/koi-mil-gaya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Dil Chahta Hai
  // ID 83 in songsData
  83: {
    title: 'Dil Chahta Hai',
    audioUrl: './audio/dil-chahta-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Liye
  // ID 84 in songsData
  84: {
    title: 'Tere Liye',
    audioUrl: './audio/tere-liye.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Main Hoon Na
  // ID 85 in songsData
  85: {
    title: 'Main Hoon Na',
    audioUrl: './audio/main-hoon-na.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tumhi Dekho Na
  // ID 86 in songsData
  86: {
    title: 'Tumhi Dekho Na',
    audioUrl: './audio/tumhi-dekho-na.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kajra Re
  // ID 87 in songsData
  87: {
    title: 'Kajra Re',
    audioUrl: './audio/kajra-re.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Rang De Basanti
  // ID 88 in songsData
  88: {
    title: 'Rang De Basanti',
    audioUrl: './audio/rang-de-basanti.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Desi Girl
  // ID 89 in songsData
  89: {
    title: 'Desi Girl',
    audioUrl: './audio/desi-girl.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jai Ho
  // ID 90 in songsData
  90: {
    title: 'Jai Ho',
    audioUrl: './audio/jai-ho.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Rock On
  // ID 91 in songsData
  91: {
    title: 'Rock On',
    audioUrl: './audio/rock-on.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tum Se Hi
  // ID 92 in songsData
  92: {
    title: 'Tum Se Hi',
    audioUrl: './audio/tum-se-hi.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mauja Hi Mauja
  // ID 93 in songsData
  93: {
    title: 'Mauja Hi Mauja',
    audioUrl: './audio/mauja-hi-mauja.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Om Shanti Om
  // ID 94 in songsData
  94: {
    title: 'Om Shanti Om',
    audioUrl: './audio/om-shanti-om.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kaho Naa Pyaar Hai
  // ID 95 in songsData
  95: {
    title: 'Kaho Naa Pyaar Hai',
    audioUrl: './audio/kaho-naa-pyaar-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Aaj Ki Raat
  // ID 96 in songsData
  96: {
    title: 'Aaj Ki Raat',
    audioUrl: './audio/aaj-ki-raat.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pehli Nazar Mein
  // ID 97 in songsData
  97: {
    title: 'Pehli Nazar Mein',
    audioUrl: './audio/pehli-nazar-mein.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Maahi Ve
  // ID 98 in songsData
  98: {
    title: 'Maahi Ve',
    audioUrl: './audio/maahi-ve.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mitwa
  // ID 99 in songsData
  99: {
    title: 'Mitwa',
    audioUrl: './audio/mitwa.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tum Hi Ho
  // ID 100 in songsData
  100: {
    title: 'Tum Hi Ho',
    audioUrl: './audio/tum-hi-ho.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Badtameez Dil
  // ID 101 in songsData
  101: {
    title: 'Badtameez Dil',
    audioUrl: './audio/badtameez-dil.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Naina
  // ID 102 in songsData
  102: {
    title: 'Naina',
    audioUrl: './audio/naina.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Galliyan
  // ID 103 in songsData
  103: {
    title: 'Galliyan',
    audioUrl: './audio/galliyan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Gerua
  // ID 104 in songsData
  104: {
    title: 'Gerua',
    audioUrl: './audio/gerua.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Channa Mereya
  // ID 105 in songsData
  105: {
    title: 'Channa Mereya',
    audioUrl: './audio/channa-mereya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Bulleya
  // ID 106 in songsData
  106: {
    title: 'Bulleya',
    audioUrl: './audio/bulleya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Ae Watan
  // ID 107 in songsData
  107: {
    title: 'Ae Watan',
    audioUrl: './audio/ae-watan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pehli Dafa
  // ID 108 in songsData
  108: {
    title: 'Pehli Dafa',
    audioUrl: './audio/pehli-dafa.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Sang Yaara
  // ID 109 in songsData
  109: {
    title: 'Tere Sang Yaara',
    audioUrl: './audio/tere-sang-yaara.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Agar Tum Saath Ho
  // ID 110 in songsData
  110: {
    title: 'Agar Tum Saath Ho',
    audioUrl: './audio/agar-tum-saath-ho.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Bekhayali
  // ID 111 in songsData
  111: {
    title: 'Bekhayali',
    audioUrl: './audio/bekhayali.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mere Naam Tu
  // ID 112 in songsData
  112: {
    title: 'Mere Naam Tu',
    audioUrl: './audio/mere-naam-tu.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Sanam Re
  // ID 113 in songsData
  113: {
    title: 'Sanam Re',
    audioUrl: './audio/sanam-re.mp3',
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
