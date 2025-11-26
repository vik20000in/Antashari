// ===== LOCAL MUSIC CONFIGURATION =====
// Using local MP3 files from the assets/audio/ folder
// Download audio files using: .\scripts\download_all_songs.ps1 or .\scripts\parallel_download.ps1
// Or manually add MP3 files to assets/audio/ folder with these exact names

const musicConfiguration = {
  // Awaara Hoon (Raj Kapoor)
  // ID 5 in songsData
  5: {
    title: 'Awaara Hoon',
    audioUrl: './assets/audio/awaara-hoon.mp3',
    duration: 90,
    credit: 'Bensound - Ukulele'
  },

  // Kal Ho Naa Ho (Shah Rukh Khan)
  // ID 14 in songsData
  14: {
    title: 'Kal Ho Naa Ho',
    audioUrl: './assets/audio/kal-ho-naa-ho.mp3',
    duration: 90,
    credit: 'Bensound - Creative Minds'
  },

  // Chaiya Chaiya (Shah Rukh Khan)
  // ID 26 in songsData
  26: {
    title: 'Chaiya Chaiya',
    audioUrl: './assets/audio/chaiya-chaiya.mp3',
    duration: 90,
    credit: 'Bensound - Sunny'
  },

  // Jo Jeeta Wohi Sikandar (Aamir Khan)
  // ID 31 in songsData
  31: {
    title: 'Jo Jeeta Wohi Sikandar',
    audioUrl: './assets/audio/jo-jeeta-wohi-sikandar.mp3',
    duration: 90,
    credit: 'Bensound - Happy Rock'
  },

  // Piya Tu Ab To Aaja
  // ID 45 in songsData
  45: {
    title: 'Piya Tu Ab To Aaja',
    audioUrl: './assets/audio/piya-tu-ab-to-aaja.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Funtoosh Banaya Tune
  // ID 47 in songsData
  47: {
    title: 'Funtoosh Banaya Tune',
    audioUrl: './assets/audio/funtoosh-banaya-tune.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Baarish Mein Tume Dekha
  // ID 48 in songsData
  48: {
    title: 'Baarish Mein Tume Dekha',
    audioUrl: './assets/audio/baarish-mein-tume-dekha.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Badi Mushkil Hai
  // ID 49 in songsData
  49: {
    title: 'Badi Mushkil Hai',
    audioUrl: './assets/audio/badi-mushkil-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Barso Re Megha
  // ID 50 in songsData
  50: {
    title: 'Barso Re Megha',
    audioUrl: './assets/audio/barso-re-megha.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Bhole Shankara
  // ID 51 in songsData
  51: {
    title: 'Bhole Shankara',
    audioUrl: './assets/audio/bhole-shankara.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Maa Tujhe Salaam
  // ID 52 in songsData
  52: {
    title: 'Maa Tujhe Salaam',
    audioUrl: './assets/audio/maa-tujhe-salaam.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mere Haath Mein Teri Bansuri
  // ID 53 in songsData
  53: {
    title: 'Mere Haath Mein Teri Bansuri',
    audioUrl: './assets/audio/mere-haath-mein-teri-bansuri.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mere Sapno Ki Rani
  // ID 54 in songsData
  54: {
    title: 'Mere Sapno Ki Rani',
    audioUrl: './assets/audio/mere-sapno-ki-rani.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mohabbat Barsa Dena Tu
  // ID 55 in songsData
  55: {
    title: 'Mohabbat Barsa Dena Tu',
    audioUrl: './assets/audio/mohabbat-barsa-dena-tu.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Yeh Kya Hua
  // ID 56 in songsData
  56: {
    title: 'Yeh Kya Hua',
    audioUrl: './assets/audio/yeh-kya-hua.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Yeh Dua Hai Meri
  // ID 57 in songsData
  57: {
    title: 'Yeh Dua Hai Meri',
    audioUrl: './assets/audio/yeh-dua-hai-meri.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Raaz Ki Baat
  // ID 58 in songsData
  58: {
    title: 'Raaz Ki Baat',
    audioUrl: './assets/audio/raaz-ki-baat.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Raat Bhar Jaagta Hoon Main
  // ID 59 in songsData
  59: {
    title: 'Raat Bhar Jaagta Hoon Main',
    audioUrl: './assets/audio/raat-bhar-jaagta-hoon-main.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Roli Roli Gulal Khelo
  // ID 60 in songsData
  60: {
    title: 'Roli Roli Gulal Khelo',
    audioUrl: './assets/audio/roli-roli-gulal-khelo.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Laila O Laila (Rishi Kapoor - Prem Rog)
  // ID 61 in songsData
  61: {
    title: 'Laila O Laila',
    audioUrl: './assets/audio/laila-o-laila.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kuch Kuch Hota Hai
  // ID 17 in songsData
  17: {
    title: 'Kuch Kuch Hota Hai',
    audioUrl: './assets/audio/kuch-kuch-hota-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kabhi Kabhi Mere Dil Mein
  // ID 18 in songsData
  18: {
    title: 'Kabhi Kabhi Mere Dil Mein',
    audioUrl: './assets/audio/kabhi-kabhi-mere-dil-mein.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jab Tak Hai Jaan
  // ID 30 in songsData
  30: {
    title: 'Jab Tak Hai Jaan',
    audioUrl: './assets/audio/jab-tak-hai-jaan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jaadu Teri Nazar
  // ID 32 in songsData
  32: {
    title: 'Jaadu Teri Nazar',
    audioUrl: './assets/audio/jaadu-teri-nazar.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Dilbar Dilbar
  // ID 36 in songsData
  36: {
    title: 'Dilbar Dilbar',
    audioUrl: './assets/audio/dilbar-dilbar.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pehla Nasha
  // ID 44 in songsData
  44: {
    title: 'Pehla Nasha',
    audioUrl: './assets/audio/pehla-nasha.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Arre Dekhega India (Chak De! India)
  // ID 2 in songsData
  2: {
    title: 'Arre Dekhega India',
    audioUrl: './assets/audio/arre-dekhega-india.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Likhe Jo Khat Tumhe
  // ID 62 in songsData
  62: {
    title: 'Likhe Jo Khat Tumhe',
    audioUrl: './assets/audio/likhe-jo-khat-tumhe.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kahe Toh Pardes
  // ID 15 in songsData
  15: {
    title: 'Kahe Toh Pardes',
    audioUrl: './assets/audio/kahe-toh-pardes.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Geet Gata Hoon Main
  // ID 21 in songsData
  21: {
    title: 'Geet Gata Hoon Main',
    audioUrl: './assets/audio/geet-gata-hoon-main.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jaane Bhi Do Yaaro
  // ID 29 in songsData
  29: {
    title: 'Jaane Bhi Do Yaaro',
    audioUrl: './assets/audio/jaane-bhi-do-yaaro.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Dil Dhoondta Hai
  // ID 37 in songsData
  37: {
    title: 'Dil Dhoondta Hai',
    audioUrl: './assets/audio/dil-dhoondta-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Na Jane Kyon
  // ID 42 in songsData
  42: {
    title: 'Na Jane Kyon',
    audioUrl: './assets/audio/na-jane-kyon.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Haath Mein
  // ID 39 in songsData
  39: {
    title: 'Tere Haath Mein',
    audioUrl: './assets/audio/tere-haath-mein.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Soni Soni Ankh Marey
  // ID 66 in songsData
  66: {
    title: 'Soni Soni Ankh Marey',
    audioUrl: './assets/audio/soni-soni-ankh-marey.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Ik Teri Muskarahat
  // ID 10 in songsData
  10: {
    title: 'Ik Teri Muskarahat',
    audioUrl: './assets/audio/ik-teri-muskarahat.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Khwaab Ho Tum Ya Koi Khyal
  // ID 20 in songsData
  20: {
    title: 'Khwaab Ho Tum Ya Koi Khyal',
    audioUrl: './assets/audio/khwaab-ho-tum-ya-koi-khyal.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Chod De Saari Duniya
  // ID 27 in songsData
  27: {
    title: 'Chod De Saari Duniya',
    audioUrl: './assets/audio/chod-de-saari-duniya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Gulab Bahar
  // ID 23 in songsData
  23: {
    title: 'Gulab Bahar',
    audioUrl: './assets/audio/gulab-bahar.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Vaada Raha Sanam
  // ID 64 in songsData
  64: {
    title: 'Vaada Raha Sanam',
    audioUrl: './assets/audio/vaada-raha-sanam.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tujhe Dekha To
  // ID 81 in songsData
  81: {
    title: 'Tujhe Dekha To',
    audioUrl: './assets/audio/tujhe-dekha-to.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Koi Mil Gaya
  // ID 82 in songsData
  82: {
    title: 'Koi Mil Gaya',
    audioUrl: './assets/audio/koi-mil-gaya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Dil Chahta Hai
  // ID 83 in songsData
  83: {
    title: 'Dil Chahta Hai',
    audioUrl: './assets/audio/dil-chahta-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Liye
  // ID 84 in songsData
  84: {
    title: 'Tere Liye',
    audioUrl: './assets/audio/tere-liye.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Main Hoon Na
  // ID 85 in songsData
  85: {
    title: 'Main Hoon Na',
    audioUrl: './assets/audio/main-hoon-na.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tumhi Dekho Na
  // ID 86 in songsData
  86: {
    title: 'Tumhi Dekho Na',
    audioUrl: './assets/audio/tumhi-dekho-na.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kajra Re
  // ID 87 in songsData
  87: {
    title: 'Kajra Re',
    audioUrl: './assets/audio/kajra-re.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Rang De Basanti
  // ID 88 in songsData
  88: {
    title: 'Rang De Basanti',
    audioUrl: './assets/audio/rang-de-basanti.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Desi Girl
  // ID 89 in songsData
  89: {
    title: 'Desi Girl',
    audioUrl: './assets/audio/desi-girl.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jai Ho
  // ID 90 in songsData
  90: {
    title: 'Jai Ho',
    audioUrl: './assets/audio/jai-ho.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Rock On
  // ID 91 in songsData
  91: {
    title: 'Rock On',
    audioUrl: './assets/audio/rock-on.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tum Se Hi
  // ID 92 in songsData
  92: {
    title: 'Tum Se Hi',
    audioUrl: './assets/audio/tum-se-hi.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mauja Hi Mauja
  // ID 93 in songsData
  93: {
    title: 'Mauja Hi Mauja',
    audioUrl: './assets/audio/mauja-hi-mauja.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Om Shanti Om
  // ID 94 in songsData
  94: {
    title: 'Om Shanti Om',
    audioUrl: './assets/audio/om-shanti-om.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kaho Naa Pyaar Hai
  // ID 95 in songsData
  95: {
    title: 'Kaho Naa Pyaar Hai',
    audioUrl: './assets/audio/kaho-naa-pyaar-hai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Aaj Ki Raat
  // ID 96 in songsData
  96: {
    title: 'Aaj Ki Raat',
    audioUrl: './assets/audio/aaj-ki-raat.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pehli Nazar Mein
  // ID 97 in songsData
  97: {
    title: 'Pehli Nazar Mein',
    audioUrl: './assets/audio/pehli-nazar-mein.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Maahi Ve
  // ID 98 in songsData
  98: {
    title: 'Maahi Ve',
    audioUrl: './assets/audio/maahi-ve.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mitwa
  // ID 99 in songsData
  99: {
    title: 'Mitwa',
    audioUrl: './assets/audio/mitwa.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tum Hi Ho
  // ID 100 in songsData
  100: {
    title: 'Tum Hi Ho',
    audioUrl: './assets/audio/tum-hi-ho.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Badtameez Dil
  // ID 101 in songsData
  101: {
    title: 'Badtameez Dil',
    audioUrl: './assets/audio/badtameez-dil.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Naina
  // ID 102 in songsData
  102: {
    title: 'Naina',
    audioUrl: './assets/audio/naina.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Galliyan
  // ID 103 in songsData
  103: {
    title: 'Galliyan',
    audioUrl: './assets/audio/galliyan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Gerua
  // ID 104 in songsData
  104: {
    title: 'Gerua',
    audioUrl: './assets/audio/gerua.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Channa Mereya
  // ID 105 in songsData
  105: {
    title: 'Channa Mereya',
    audioUrl: './assets/audio/channa-mereya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Bulleya
  // ID 106 in songsData
  106: {
    title: 'Bulleya',
    audioUrl: './assets/audio/bulleya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Ae Watan
  // ID 107 in songsData
  107: {
    title: 'Ae Watan',
    audioUrl: './assets/audio/ae-watan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pehli Dafa
  // ID 108 in songsData
  108: {
    title: 'Pehli Dafa',
    audioUrl: './assets/audio/pehli-dafa.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Sang Yaara
  // ID 109 in songsData
  109: {
    title: 'Tere Sang Yaara',
    audioUrl: './assets/audio/tere-sang-yaara.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Agar Tum Saath Ho
  // ID 110 in songsData
  110: {
    title: 'Agar Tum Saath Ho',
    audioUrl: './assets/audio/agar-tum-saath-ho.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Bekhayali
  // ID 111 in songsData
  111: {
    title: 'Bekhayali',
    audioUrl: './assets/audio/bekhayali.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Mere Naam Tu
  // ID 112 in songsData
  112: {
    title: 'Mere Naam Tu',
    audioUrl: './assets/audio/mere-naam-tu.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Sanam Re
  // ID 113 in songsData
  113: {
    title: 'Sanam Re',
    audioUrl: './assets/audio/sanam-re.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kesariya
  // ID 114 in songsData
  114: {
    title: 'Kesariya',
    audioUrl: './assets/audio/kesariya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Apna Bana Le
  // ID 115 in songsData
  115: {
    title: 'Apna Bana Le',
    audioUrl: './assets/audio/apna-bana-le.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Srivalli
  // ID 116 in songsData
  116: {
    title: 'Srivalli',
    audioUrl: './assets/audio/srivalli.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Raataan Lambiyan
  // ID 117 in songsData
  117: {
    title: 'Raataan Lambiyan',
    audioUrl: './assets/audio/raataan-lambiyan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Ranjha
  // ID 118 in songsData
  118: {
    title: 'Ranjha',
    audioUrl: './assets/audio/ranjha.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Vai Vai
  // ID 119 in songsData
  119: {
    title: 'Vai Vai',
    audioUrl: './assets/audio/vai-vai.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Chaleya
  // ID 120 in songsData
  120: {
    title: 'Chaleya',
    audioUrl: './assets/audio/chaleya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Vaaste
  // ID 121 in songsData
  121: {
    title: 'Tere Vaaste',
    audioUrl: './assets/audio/tere-vaaste.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Maan Meri Jaan
  // ID 122 in songsData
  122: {
    title: 'Maan Meri Jaan',
    audioUrl: './assets/audio/maan-meri-jaan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Oo Antava
  // ID 123 in songsData
  123: {
    title: 'Oo Antava',
    audioUrl: './assets/audio/oo-antava.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Besharam Rang
  // ID 124 in songsData
  124: {
    title: 'Besharam Rang',
    audioUrl: './assets/audio/besharam-rang.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jhoome Jo Pathaan
  // ID 125 in songsData
  125: {
    title: 'Jhoome Jo Pathaan',
    audioUrl: './assets/audio/jhoome-jo-pathaan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tum Kya Mile
  // ID 126 in songsData
  126: {
    title: 'Tum Kya Mile',
    audioUrl: './assets/audio/tum-kya-mile.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // What Jhumka
  // ID 127 in songsData
  127: {
    title: 'What Jhumka',
    audioUrl: './assets/audio/what-jhumka.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Ve Kamleya
  // ID 128 in songsData
  128: {
    title: 'Ve Kamleya',
    audioUrl: './assets/audio/ve-kamleya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Arjan Vailly
  // ID 129 in songsData
  129: {
    title: 'Arjan Vailly',
    audioUrl: './assets/audio/arjan-vailly.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Satranga (Animal 2023)
  // ID 130 in songsData
  130: {
    title: 'Satranga',
    audioUrl: './assets/audio/satranga.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pehle Bhi Main (Animal 2023)
  // ID 131 in songsData
  131: {
    title: 'Pehle Bhi Main',
    audioUrl: './assets/audio/pehle-bhi-main.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // O Maahi (Dunki 2023)
  // ID 132 in songsData
  132: {
    title: 'O Maahi',
    audioUrl: './assets/audio/o-maahi.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Lutt Putt Gaya (Dunki 2023)
  // ID 133 in songsData
  133: {
    title: 'Lutt Putt Gaya',
    audioUrl: './assets/audio/lutt-putt-gaya.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Jamal Kudu (Animal 2023)
  // ID 134 in songsData
  134: {
    title: 'Jamal Kudu',
    audioUrl: './assets/audio/jamal-kudu.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Ajaa Sajna Milke (Satyaprem Ki Katha 2023)
  // ID 135 in songsData
  135: {
    title: 'Ajaa Sajna Milke',
    audioUrl: './assets/audio/ajaa-sajna-milke.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Naseeb Se (Satyaprem Ki Katha 2023)
  // ID 136 in songsData
  136: {
    title: 'Naseeb Se',
    audioUrl: './assets/audio/naseeb-se.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Aaj Ki Raat (Stree 2, 2024)
  // ID 137 in songsData
  137: {
    title: 'Aaj Ki Raat (Stree 2)',
    audioUrl: './assets/audio/aaj-ki-raat-stree2.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tauba Tauba (Bad Newz 2024)
  // ID 138 in songsData
  138: {
    title: 'Tauba Tauba',
    audioUrl: './assets/audio/tauba-tauba.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Husn Tera Tauba Tauba (Bad Newz 2024)
  // ID 139 in songsData
  139: {
    title: 'Husn Tera Tauba Tauba',
    audioUrl: './assets/audio/husn-tera-tauba-tauba.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Akhiyaan Gulaab (Teri Baaton Mein 2024)
  // ID 140 in songsData
  140: {
    title: 'Akhiyaan Gulaab',
    audioUrl: './assets/audio/akhiyaan-gulaab.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Laal Peeli Akhiyaan (Teri Baaton Mein 2024)
  // ID 141 in songsData
  141: {
    title: 'Laal Peeli Akhiyaan',
    audioUrl: './assets/audio/laal-peeli-akhiyaan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // O Sajni Re (Laapataa Ladies 2024)
  // ID 142 in songsData
  142: {
    title: 'O Sajni Re',
    audioUrl: './assets/audio/o-sajni-re.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Angaaron (Pushpa 2, 2024)
  // ID 143 in songsData
  143: {
    title: 'Angaaron',
    audioUrl: './assets/audio/angaaron.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Peelings (Pushpa 2, 2024)
  // ID 144 in songsData
  144: {
    title: 'Peelings',
    audioUrl: './assets/audio/peelings.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Sooseki (Pushpa 2, 2024)
  // ID 145 in songsData
  145: {
    title: 'Sooseki',
    audioUrl: './assets/audio/sooseki.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Saami Saami (Pushpa 2023)
  // ID 146 in songsData
  146: {
    title: 'Saami Saami (Pushpa)',
    audioUrl: './assets/audio/saami-saami-pushpa.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Kasam Se (Animal 2024)
  // ID 147 in songsData
  147: {
    title: 'Kasam Se',
    audioUrl: './assets/audio/kasam-se.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Chal Kudiye (Jigra 2024)
  // ID 148 in songsData
  148: {
    title: 'Chal Kudiye',
    audioUrl: './assets/audio/chal-kudiye.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Phoolon Ka Taaron Ka (Khel Khel Mein 2024)
  // ID 149 in songsData
  149: {
    title: 'Phoolon Ka Taaron Ka',
    audioUrl: './assets/audio/phoolon-ka-taaron-ka.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Hauli Hauli (Khel Khel Mein 2024)
  // ID 150 in songsData
  150: {
    title: 'Hauli Hauli',
    audioUrl: './assets/audio/hauli-hauli.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tu Hai Kahan (Yodha 2024)
  // ID 151 in songsData
  151: {
    title: 'Tu Hai Kahan',
    audioUrl: './assets/audio/tu-hai-kahan.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Arjan Vailly Reprise (Animal 2023)
  // ID 152 in songsData
  152: {
    title: 'Arjan Vailly (Reprise)',
    audioUrl: './assets/audio/arjan-vailly-reprise.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Deva Deva (Brahmāstra 2024)
  // ID 153 in songsData
  153: {
    title: 'Deva Deva',
    audioUrl: './assets/audio/deva-deva.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Sun Sajni (Maidaan 2024)
  // ID 154 in songsData
  154: {
    title: 'Sun Sajni',
    audioUrl: './assets/audio/sun-sajni.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Khudaya Ve (Satyaprem Ki Katha 2023)
  // ID 155 in songsData
  155: {
    title: 'Khudaya Ve',
    audioUrl: './assets/audio/khudaya-ve.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Chaleya Reprise (Jawan 2023)
  // ID 156 in songsData
  156: {
    title: 'Chaleya (Reprise)',
    audioUrl: './assets/audio/chaleya-reprise.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Sajni (Laapataa Ladies 2024)
  // ID 157 in songsData
  157: {
    title: 'Sajni (Laapataa)',
    audioUrl: './assets/audio/sajni-laapataa.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Tere Pyaar Mein (Tu Jhoothi Main Makkaar 2024)
  // ID 158 in songsData
  158: {
    title: 'Tere Pyaar Mein',
    audioUrl: './assets/audio/tere-pyaar-mein.mp3',
    duration: 90,
    credit: 'Downloaded from YouTube'
  },

  // Pyaar Hota Kayi Baar Hai (Tu Jhoothi Main Makkaar 2024)
  // ID 159 in songsData
  159: {
    title: 'Pyaar Hota Kayi Baar Hai',
    audioUrl: './assets/audio/pyaar-hota-kayi-baar-hai.mp3',
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
