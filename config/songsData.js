// Antakshari Hindi Songs Database
// Format: {id, title, firstLine, lastWord, lastConsonant, themes[], singerType, year, movie}

const songsData = [
  // Songs starting with 'अ'
  {
    id: 1,
    title: "Akele Akele Kahaan Jaa Rahe Ho",
    firstLine: "Akele akele kahaan jaa rahe ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Love", "Loneliness", "Journey"],
    singerType: "Male Solo",
    year: 1986,
    movie: "Baazi"
  },
  {
    id: 2,
    title: "Arre Dekhega India",
    firstLine: "Arre dekhega india",
    lastWord: "India",
    lastConsonant: "य",
    themes: ["Patriotic", "Sports"],
    singerType: "Male Solo",
    year: 2007,
    movie: "Chak De! India"
  },
  {
    id: 3,
    title: "Aaj Ki Raat",
    firstLine: "Aaj ki raat hai",
    lastWord: "Raat",
    lastConsonant: "त",
    themes: ["Romance", "Night"],
    singerType: "Duet",
    year: 1992,
    movie: "Jo Jeeta Wohi Sikandar"
  },
  {
    id: 4,
    title: "Ankhon Mein Teri",
    firstLine: "Ankhon mein teri ajab baat hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Love", "Eyes"],
    singerType: "Male Solo",
    year: 1985,
    movie: "Yaad Rakhega Bharat"
  },
  {
    id: 5,
    title: "Awaara Hoon",
    firstLine: "Awaara hoon na koi apna",
    lastWord: "Apna",
    lastConsonant: "न",
    themes: ["Loneliness", "Identity"],
    singerType: "Male Solo",
    year: 1951,
    movie: "Awaara"
  },
  {
    id: 6,
    title: "Amitabh Ko Salaam",
    firstLine: "Amitabh ko salaam",
    lastWord: "Salaam",
    lastConsonant: "म",
    themes: ["Tribute", "Actor"],
    singerType: "Male Solo",
    year: 1987,
    movie: "Mahaan"
  },

  // Songs starting with 'आ'
  {
    id: 7,
    title: "Aadhya Raina Beeti Kab Ki",
    firstLine: "Aadhya raina beeti kab ki",
    lastWord: "Ki",
    lastConsonant: "क",
    themes: ["Nostalgia", "Night"],
    singerType: "Female Solo",
    year: 1976,
    movie: "Adalat"
  },
  {
    id: 8,
    title: "Aane Wala Pal",
    firstLine: "Aane wala pal jaane wala hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Philosophy", "Time"],
    singerType: "Duet",
    year: 1986,
    movie: "Farq"
  },

  // Songs starting with 'इ'
  {
    id: 9,
    title: "Ik Mulaqat Ho Jaye",
    firstLine: "Ik mulaqat ho jaye",
    lastWord: "Jaye",
    lastConsonant: "य",
    themes: ["Love", "Meeting"],
    singerType: "Female Solo",
    year: 1982,
    movie: "Khata Hai"
  },
  {
    id: 10,
    title: "Ik Teri Muskarahat",
    firstLine: "Ik teri muskarahat",
    lastWord: "Muskarahat",
    lastConsonant: "त",
    themes: ["Love", "Smile"],
    singerType: "Female Solo",
    year: 1992,
    movie: "Sapne Saajan Ke"
  },

  // Songs starting with 'उ'
  {
    id: 11,
    title: "Udi Udi Udi",
    firstLine: "Udi udi udi",
    lastWord: "Udi",
    lastConsonant: "ड",
    themes: ["Joy", "Flight"],
    singerType: "Female Solo",
    year: 1994,
    movie: "Hera Pheri"
  },

  // Songs starting with 'ऊ'
  {
    id: 12,
    title: "Upar Aasman Neechey Patal",
    firstLine: "Upar aasman neechey patal",
    lastWord: "Patal",
    lastConsonant: "ल",
    themes: ["Space", "Nature"],
    singerType: "Male Solo",
    year: 1984,
    movie: "Pyar Ke Kabil"
  },

  // Songs starting with 'एक'
  {
    id: 13,
    title: "Ekla Chole",
    firstLine: "Ekla chole",
    lastWord: "Chole",
    lastConsonant: "ल",
    themes: ["Journey", "Solitude"],
    singerType: "Male Solo",
    year: 1980,
    movie: "Prem Rog"
  },

  // Songs starting with 'क'
  {
    id: 14,
    title: "Kal Ho Naa Ho",
    firstLine: "Kal ho naa ho kal ho naa ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Love", "Tomorrow", "Romance"],
    singerType: "Male Solo",
    year: 2003,
    movie: "Kal Ho Naa Ho"
  },
  {
    id: 15,
    title: "Kahe Toh Pardes",
    firstLine: "Kahe toh pardes",
    lastWord: "Pardes",
    lastConsonant: "स",
    themes: ["Distance", "Love"],
    singerType: "Female Solo",
    year: 1998,
    movie: "Pardes"
  },
  {
    id: 16,
    title: "Kitna Badal Gaya Inadivar",
    firstLine: "Kitna badal gaya inadivar",
    lastWord: "Inadivar",
    lastConsonant: "र",
    themes: ["Change", "Love"],
    singerType: "Male Solo",
    year: 1989,
    movie: "Jism"
  },
  {
    id: 17,
    title: "Kuch Kuch Hota Hai",
    firstLine: "Kuch kuch hota hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Love", "Feeling"],
    singerType: "Duet",
    year: 1998,
    movie: "Kuch Kuch Hota Hai"
  },
  {
    id: 18,
    title: "Kabhi Kabhi Mere Dil Mein",
    firstLine: "Kabhi kabhi mere dil mein",
    lastWord: "Mein",
    lastConsonant: "न",
    themes: ["Love", "Heart", "Memories"],
    singerType: "Male Solo",
    year: 1976,
    movie: "Kabhi Kabhi"
  },

  // Songs starting with 'ख'
  {
    id: 19,
    title: "Khiladi Ho Ya Ababdoor",
    firstLine: "Khiladi ho ya ababdoor",
    lastWord: "Ababdoor",
    lastConsonant: "र",
    themes: ["Sports", "Adventure"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Khiladi"
  },
  {
    id: 20,
    title: "Khwaab Ho Tum Ya Koi Khyal",
    firstLine: "Khwaab ho tum ya koi khyal",
    lastWord: "Khyal",
    lastConsonant: "ल",
    themes: ["Dream", "Love"],
    singerType: "Female Solo",
    year: 1992,
    movie: "Sanam Bewafa"
  },

  // Songs starting with 'ग'
  {
    id: 21,
    title: "Geet Gata Hoon Main",
    firstLine: "Geet gata hoon main",
    lastWord: "Main",
    lastConsonant: "न",
    themes: ["Song", "Singing"],
    singerType: "Male Solo",
    year: 1985,
    movie: "Ilzaam"
  },
  {
    id: 22,
    title: "Gaadi Bula Rahi Hai",
    firstLine: "Gaadi bula rahi hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Journey", "Car"],
    singerType: "Male Solo",
    year: 1985,
    movie: "Ilzaam"
  },
  {
    id: 23,
    title: "Gulab Bahar",
    firstLine: "Gulab bahar gulshan ki ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Flower", "Spring"],
    singerType: "Female Solo",
    year: 1958,
    movie: "Anarkali"
  },

  // Songs starting with 'घ'
  {
    id: 24,
    title: "Ghoom Ghoom Dandiya",
    firstLine: "Ghoom ghoom dandiya",
    lastWord: "Dandiya",
    lastConsonant: "य",
    themes: ["Dance", "Folk"],
    singerType: "Duet",
    year: 1988,
    movie: "Chandni"
  },

  // Songs starting with 'च'
  {
    id: 25,
    title: "Chand Mera Nila Ho Gaya",
    firstLine: "Chand mera nila ho gaya",
    lastWord: "Gaya",
    lastConsonant: "य",
    themes: ["Moon", "Love"],
    singerType: "Male Solo",
    year: 1989,
    movie: "Chand Mera Dil"
  },
  {
    id: 26,
    title: "Chaiya Chaiya",
    firstLine: "Chaiya chaiya chaiya",
    lastWord: "Chaiya",
    lastConsonant: "य",
    themes: ["Dance", "Energy"],
    singerType: "Duet",
    year: 1998,
    movie: "Dil Se"
  },
  {
    id: 27,
    title: "Chod De Saari Duniya",
    firstLine: "Chod de saari duniya",
    lastWord: "Duniya",
    lastConsonant: "य",
    themes: ["Love", "World"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Heropanti"
  },

  // Songs starting with 'छ'
  {
    id: 28,
    title: "Chhod Karke Mera",
    firstLine: "Chhod karke mera",
    lastWord: "Mera",
    lastConsonant: "र",
    themes: ["Love", "Heartbreak"],
    singerType: "Female Solo",
    year: 1992,
    movie: "Dharmatma"
  },

  // Songs starting with 'ज'
  {
    id: 29,
    title: "Jaane Bhi Do Yaaro",
    firstLine: "Jaane bhi do yaaro",
    lastWord: "Yaaro",
    lastConsonant: "र",
    themes: ["Friendship", "Humor"],
    singerType: "Male Solo",
    year: 1983,
    movie: "Jaane Bhi Do Yaaro"
  },
  {
    id: 30,
    title: "Jab Tak Hai Jaan",
    firstLine: "Jab tak hai jaan",
    lastWord: "Jaan",
    lastConsonant: "न",
    themes: ["Life", "Love"],
    singerType: "Male Solo",
    year: 2012,
    movie: "Jab Tak Hai Jaan"
  },
  {
    id: 31,
    title: "Jo Jeeta Wohi Sikandar",
    firstLine: "Jo jeeta wohi sikandar",
    lastWord: "Sikandar",
    lastConsonant: "र",
    themes: ["Victory", "Sports"],
    singerType: "Male Solo",
    year: 1992,
    movie: "Jo Jeeta Wohi Sikandar"
  },
  {
    id: 32,
    title: "Jaadu Teri Nazar",
    firstLine: "Jaadu teri nazar",
    lastWord: "Nazar",
    lastConsonant: "र",
    themes: ["Love", "Magic", "Eyes"],
    singerType: "Male Solo",
    year: 1980,
    movie: "Prem Rog"
  },

  // Songs starting with 'झ'
  {
    id: 33,
    title: "Jhumke Lal Ke",
    firstLine: "Jhumke lal ke",
    lastWord: "Ke",
    lastConsonant: "क",
    themes: ["Beauty", "Jewelry"],
    singerType: "Female Solo",
    year: 1985,
    movie: "Devta"
  },

  // Songs starting with 'ट'
  {
    id: 34,
    title: "Tashan Se Khud Ko",
    firstLine: "Tashan se khud ko",
    lastWord: "Ko",
    lastConsonant: "क",
    themes: ["Style", "Attitude"],
    singerType: "Male Solo",
    year: 2008,
    movie: "Tashan"
  },

  // Songs starting with 'ड'
  {
    id: 35,
    title: "Dil Lagi Mein Tumhara",
    firstLine: "Dil lagi mein tumhara",
    lastWord: "Tumhara",
    lastConsonant: "र",
    themes: ["Love", "Heart"],
    singerType: "Male Solo",
    year: 1988,
    movie: "Pyar Ki Bazi"
  },
  {
    id: 36,
    title: "Dilbar Dilbar",
    firstLine: "Dilbar dilbar",
    lastWord: "Dilbar",
    lastConsonant: "र",
    themes: ["Love", "Beloved"],
    singerType: "Female Solo",
    year: 1994,
    movie: "Sirf Tum"
  },
  {
    id: 37,
    title: "Dil Dhoondta Hai",
    firstLine: "Dil dhoondta hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Love", "Longing"],
    singerType: "Male Solo",
    year: 1979,
    movie: "Bandhan"
  },

  // Songs starting with 'त'
  {
    id: 38,
    title: "Tamaasha Dekh Raha Hai",
    firstLine: "Tamaasha dekh raha hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Spectacle", "Life"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Darr"
  },
  {
    id: 39,
    title: "Tere Haath Mein",
    firstLine: "Tere haath mein",
    lastWord: "Mein",
    lastConsonant: "न",
    themes: ["Love", "Hands"],
    singerType: "Female Solo",
    year: 2011,
    movie: "Bodyguard"
  },

  // Songs starting with 'थ'
  {
    id: 40,
    title: "Thandi Thandi Raate Mein",
    firstLine: "Thandi thandi raate mein",
    lastWord: "Mein",
    lastConsonant: "न",
    themes: ["Winter", "Night"],
    singerType: "Male Solo",
    year: 1989,
    movie: "Chand Mera Dil"
  },

  // Songs starting with 'न'
  {
    id: 41,
    title: "Naina Barey Neerje",
    firstLine: "Naina barey neerje",
    lastWord: "Neerje",
    lastConsonant: "य",
    themes: ["Eyes", "Tears"],
    singerType: "Female Solo",
    year: 1988,
    movie: "Trimurti"
  },
  {
    id: 42,
    title: "Na Jane Kyon",
    firstLine: "Na jane kyon",
    lastWord: "Kyon",
    lastConsonant: "न",
    themes: ["Love", "Mystery"],
    singerType: "Female Solo",
    year: 1998,
    movie: "Kuch Kuch Hota Hai"
  },
  {
    id: 43,
    title: "Neela Aasmaan",
    firstLine: "Neela aasmaan",
    lastWord: "Aasmaan",
    lastConsonant: "न",
    themes: ["Sky", "Blue"],
    singerType: "Male Solo",
    year: 1987,
    movie: "Pyar Ke Kabil"
  },

  // Songs starting with 'प'
  {
    id: 44,
    title: "Pehla Nasha",
    firstLine: "Pehla nasha pehla khumar",
    lastWord: "Khumar",
    lastConsonant: "र",
    themes: ["Love", "Intoxication"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Jo Jeeta Wohi Sikandar"
  },
  {
    id: 45,
    title: "Piya Tu Ab To Aaja",
    firstLine: "Piya tu ab to aaja",
    lastWord: "Aaja",
    lastConsonant: "ज",
    themes: ["Love", "Longing"],
    singerType: "Female Solo",
    year: 1986,
    movie: "Piya Tu Ab To Aaja"
  },
  {
    id: 46,
    title: "Prem Se Bhara Hai",
    firstLine: "Prem se bhara hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Love", "Full of Love"],
    singerType: "Female Solo",
    year: 1990,
    movie: "Prem Rog"
  },

  // Songs starting with 'फ'
  {
    id: 47,
    title: "Funtoosh Banaya Tune",
    firstLine: "Funtoosh banaya tune",
    lastWord: "Tune",
    lastConsonant: "न",
    themes: ["Humor", "Crazy"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Hera Pheri"
  },

  // Songs starting with 'ब'
  {
    id: 48,
    title: "Baarish Mein Tume Dekha",
    firstLine: "Baarish mein tume dekha",
    lastWord: "Dekha",
    lastConsonant: "ख",
    themes: ["Rain", "Love"],
    singerType: "Female Solo",
    year: 1999,
    movie: "Chandni Bar"
  },
  {
    id: 49,
    title: "Badi Mushkil Hai",
    firstLine: "Badi mushkil hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Difficulty", "Love"],
    singerType: "Male Solo",
    year: 1995,
    movie: "Dilwale Dulhania Le Jayenge"
  },
  {
    id: 50,
    title: "Barso Re Megha",
    firstLine: "Barso re megha megha barso re",
    lastWord: "Re",
    lastConsonant: "र",
    themes: ["Rain", "Dance", "Monsoon"],
    singerType: "Female Solo",
    year: 2003,
    movie: "Hey Ram"
  },

  // Songs starting with 'भ'
  {
    id: 51,
    title: "Bhole Shankara",
    firstLine: "Bhole shankara",
    lastWord: "Shankara",
    lastConsonant: "र",
    themes: ["Devotion", "Shiva"],
    singerType: "Male Solo",
    year: 1995,
    movie: "Trimurti"
  },

  // Songs starting with 'म'
  {
    id: 52,
    title: "Maa Tujhe Salaam",
    firstLine: "Maa tujhe salaam",
    lastWord: "Salaam",
    lastConsonant: "म",
    themes: ["Mother", "Patriotic"],
    singerType: "Male Solo",
    year: 1997,
    movie: "Vande Mataram"
  },
  {
    id: 53,
    title: "Mere Haath Mein Teri Bansuri",
    firstLine: "Mere haath mein teri bansuri",
    lastWord: "Bansuri",
    lastConsonant: "र",
    themes: ["Love", "Krishna"],
    singerType: "Male Solo",
    year: 1992,
    movie: "Jo Jeeta Wohi Sikandar"
  },
  {
    id: 54,
    title: "Mere Sapno Ki Rani",
    firstLine: "Mere sapno ki rani",
    lastWord: "Rani",
    lastConsonant: "न",
    themes: ["Dream", "Love"],
    singerType: "Male Solo",
    year: 1991,
    movie: "Dil"
  },
  {
    id: 55,
    title: "Mohabbat Barsa Dena Tu",
    firstLine: "Mohabbat barsa dena tu",
    lastWord: "Tu",
    lastConsonant: "त",
    themes: ["Love", "Rain"],
    singerType: "Male Solo",
    year: 1995,
    movie: "Karan Arjun"
  },

  // Songs starting with 'य'
  {
    id: 56,
    title: "Yeh Kya Hua",
    firstLine: "Yeh kya hua kya baat hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Confusion", "Love"],
    singerType: "Male Solo",
    year: 1987,
    movie: "Pyar Ke Kabil"
  },
  {
    id: 57,
    title: "Yeh Dua Hai Meri",
    firstLine: "Yeh dua hai meri",
    lastWord: "Meri",
    lastConsonant: "र",
    themes: ["Prayer", "Wish"],
    singerType: "Female Solo",
    year: 1988,
    movie: "Chandni"
  },

  // Songs starting with 'र'
  {
    id: 58,
    title: "Raaz Ki Baat",
    firstLine: "Raaz ki baat",
    lastWord: "Baat",
    lastConsonant: "त",
    themes: ["Secret", "Love"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Rahul"
  },
  {
    id: 59,
    title: "Raat Bhar Jaagta Hoon Main",
    firstLine: "Raat bhar jaagta hoon main",
    lastWord: "Main",
    lastConsonant: "न",
    themes: ["Night", "Love"],
    singerType: "Male Solo",
    year: 1990,
    movie: "Dil"
  },
  {
    id: 60,
    title: "Roli Roli Gulal Khelo",
    firstLine: "Roli roli gulal khelo",
    lastWord: "Khelo",
    lastConsonant: "ल",
    themes: ["Holi", "Festival", "Joy"],
    singerType: "Duet",
    year: 1988,
    movie: "Chandni"
  },

  // Songs starting with 'ल'
  {
    id: 61,
    title: "Laila O Laila",
    firstLine: "Laila o laila",
    lastWord: "Laila",
    lastConsonant: "ल",
    themes: ["Love", "Beloved"],
    singerType: "Male Solo",
    year: 1986,
    movie: "Prem Rog"
  },
  {
    id: 62,
    title: "Likhe Jo Khat Tumhe",
    firstLine: "Likhe jo khat tumhe",
    lastWord: "Tumhe",
    lastConsonant: "ह",
    themes: ["Love", "Letter"],
    singerType: "Male Solo",
    year: 1986,
    movie: "Baazi"
  },

  // Songs starting with 'व'
  {
    id: 63,
    title: "Vaishnava Jana To",
    firstLine: "Vaishnava jana to tene kahe",
    lastWord: "Kahe",
    lastConsonant: "ह",
    themes: ["Devotion", "Virtue"],
    singerType: "Male Solo",
    year: 1991,
    movie: "Hey Ram"
  },
  {
    id: 64,
    title: "Vaada Raha Sanam",
    firstLine: "Vaada raha sanam",
    lastWord: "Sanam",
    lastConsonant: "म",
    themes: ["Promise", "Love"],
    singerType: "Male Solo",
    year: 1992,
    movie: "Daraar"
  },

  // Songs starting with 'स'
  {
    id: 65,
    title: "Saath Tera Hum Karega",
    firstLine: "Saath tera hum karega",
    lastWord: "Karega",
    lastConsonant: "ग",
    themes: ["Love", "Promise"],
    singerType: "Male Solo",
    year: 1995,
    movie: "Dilwale Dulhania Le Jayenge"
  },
  {
    id: 66,
    title: "Soni Soni Ankh Marey",
    firstLine: "Soni soni ankh marey",
    lastWord: "Marey",
    lastConsonant: "र",
    themes: ["Beauty", "Love"],
    singerType: "Female Solo",
    year: 1999,
    movie: "Mohabbatein"
  },
  {
    id: 67,
    title: "Suhaag Raat Ka Khwaab Dekha",
    firstLine: "Suhaag raat ka khwaab dekha",
    lastWord: "Dekha",
    lastConsonant: "ख",
    themes: ["Wedding", "Dream"],
    singerType: "Female Solo",
    year: 1986,
    movie: "Neel Kamal"
  },

  // Songs starting with 'ह'
  {
    id: 68,
    title: "Hai Apna Dil To Awara",
    firstLine: "Hai apna dil to awara",
    lastWord: "Awara",
    lastConsonant: "र",
    themes: ["Love", "Heart"],
    singerType: "Male Solo",
    year: 1993,
    movie: "Daraar"
  },
  {
    id: 69,
    title: "Haan Main Soch Raha Tha",
    firstLine: "Haan main soch raha tha",
    lastWord: "Tha",
    lastConsonant: "थ",
    themes: ["Thought", "Love"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Gundaraj"
  },
  {
    id: 70,
    title: "Hum Tumhare Hain Sanam",
    firstLine: "Hum tumhare hain sanam",
    lastWord: "Sanam",
    lastConsonant: "म",
    themes: ["Love", "Belonging"],
    singerType: "Duet",
    year: 1993,
    movie: "Daraar"
  },

  // Additional songs for variety
  {
    id: 71,
    title: "Jhumka Gira Re Bareli Ke Bazaar",
    firstLine: "Jhumka gira re bareli ke bazaar",
    lastWord: "Bazaar",
    lastConsonant: "र",
    themes: ["Jewelry", "Bazaar", "Dance"],
    singerType: "Female Solo",
    year: 1967,
    movie: "Sholay"
  },
  {
    id: 72,
    title: "Tum Itni Khoobsoorat Ho",
    firstLine: "Tum itni khoobsoorat ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Beauty", "Compliment"],
    singerType: "Male Solo",
    year: 2009,
    movie: "Chandni Chowk to China"
  },
  {
    id: 73,
    title: "Oye Lucky Lucky Oye",
    firstLine: "Oye lucky lucky oye",
    lastWord: "Oye",
    lastConsonant: "य",
    themes: ["Fortune", "Luck"],
    singerType: "Male Solo",
    year: 2008,
    movie: "Oye Lucky! Lucky Oye!"
  },
  {
    id: 74,
    title: "Roop Tera Mastana",
    firstLine: "Roop tera mastana",
    lastWord: "Mastana",
    lastConsonant: "न",
    themes: ["Beauty", "Love"],
    singerType: "Female Solo",
    year: 1982,
    movie: "Roop Tera Mastana"
  },
  {
    id: 75,
    title: "Duniya Mein Aaye Ho",
    firstLine: "Duniya mein aaye ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Birth", "Life"],
    singerType: "Male Solo",
    year: 1994,
    movie: "Hera Pheri"
  },
  {
    id: 76,
    title: "Chitthichore Dil Mera",
    firstLine: "Chitthichore dil mera",
    lastWord: "Mera",
    lastConsonant: "र",
    themes: ["Love", "Playful"],
    singerType: "Male Solo",
    year: 1986,
    movie: "Pyar Ke Kabil"
  },
  {
    id: 77,
    title: "Kehta Hai Ek Ladka",
    firstLine: "Kehta hai ek ladka",
    lastWord: "Ladka",
    lastConsonant: "क",
    themes: ["Love", "Boy"],
    singerType: "Male Solo",
    year: 1982,
    movie: "Love Marriage"
  },
  {
    id: 78,
    title: "Disco Disco Disco Dancer",
    firstLine: "Disco disco disco dancer",
    lastWord: "Dancer",
    lastConsonant: "र",
    themes: ["Dance", "Disco"],
    singerType: "Female Solo",
    year: 1982,
    movie: "Disco Dancer"
  },
  {
    id: 79,
    title: "Mungra Bhi Sakta Hoon",
    firstLine: "Mungra bhi sakta hoon",
    lastWord: "Hoon",
    lastConsonant: "न",
    themes: ["Love", "Capability"],
    singerType: "Male Solo",
    year: 1995,
    movie: "Chandni"
  },
  {
    id: 80,
    title: "Shanti Se Soti Hoon",
    firstLine: "Shanti se soti hoon",
    lastWord: "Hoon",
    lastConsonant: "न",
    themes: ["Peace", "Sleep"],
    singerType: "Female Solo",
    year: 1990,
    movie: "Prem Rog"
  },

  // 2000s Era Songs
  {
    id: 81,
    title: "Tujhe Dekha To",
    firstLine: "Tujhe dekha to yeh jaana sanam",
    lastWord: "Sanam",
    lastConsonant: "म",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 1995,
    movie: "Dilwale Dulhania Le Jayenge"
  },
  {
    id: 82,
    title: "Koi Mil Gaya",
    firstLine: "Koi mil gaya koi mil gaya",
    lastWord: "Gaya",
    lastConsonant: "य",
    themes: ["Love", "Discovery"],
    singerType: "Male Solo",
    year: 2003,
    movie: "Koi Mil Gaya"
  },
  {
    id: 83,
    title: "Dil Chahta Hai",
    firstLine: "Dil chahta hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Freedom", "Youth"],
    singerType: "Male Solo",
    year: 2001,
    movie: "Dil Chahta Hai"
  },
  {
    id: 84,
    title: "Tere Liye",
    firstLine: "Tere liye hum hai jiye",
    lastWord: "Jiye",
    lastConsonant: "य",
    themes: ["Love", "Devotion"],
    singerType: "Male Solo",
    year: 2004,
    movie: "Veer-Zaara"
  },
  {
    id: 85,
    title: "Main Hoon Na",
    firstLine: "Main hoon na",
    lastWord: "Na",
    lastConsonant: "न",
    themes: ["Protection", "Love"],
    singerType: "Male Solo",
    year: 2004,
    movie: "Main Hoon Na"
  },
  {
    id: 86,
    title: "Tumhi Dekho Na",
    firstLine: "Tumhi dekho na",
    lastWord: "Na",
    lastConsonant: "न",
    themes: ["Love", "Longing"],
    singerType: "Male Solo",
    year: 2006,
    movie: "Kabhi Alvida Naa Kehna"
  },
  {
    id: 87,
    title: "Kajra Re",
    firstLine: "Kajra re kajra re",
    lastWord: "Re",
    lastConsonant: "र",
    themes: ["Dance", "Celebration"],
    singerType: "Duet",
    year: 2005,
    movie: "Bunty Aur Babli"
  },
  {
    id: 88,
    title: "Rang De Basanti",
    firstLine: "Rang de basanti",
    lastWord: "Basanti",
    lastConsonant: "त",
    themes: ["Patriotic", "Revolution"],
    singerType: "Male Solo",
    year: 2006,
    movie: "Rang De Basanti"
  },
  {
    id: 89,
    title: "Desi Girl",
    firstLine: "Desi girl desi girl",
    lastWord: "Girl",
    lastConsonant: "ल",
    themes: ["Dance", "Celebration"],
    singerType: "Male Solo",
    year: 2008,
    movie: "Dostana"
  },
  {
    id: 90,
    title: "Jai Ho",
    firstLine: "Jai ho jai ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Victory", "Celebration"],
    singerType: "Male Solo",
    year: 2008,
    movie: "Slumdog Millionaire"
  },
  {
    id: 91,
    title: "Rock On",
    firstLine: "Rock on rock on",
    lastWord: "On",
    lastConsonant: "न",
    themes: ["Rock", "Music"],
    singerType: "Male Solo",
    year: 2008,
    movie: "Rock On"
  },
  {
    id: 92,
    title: "Tum Se Hi",
    firstLine: "Tum se hi din hota hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2007,
    movie: "Jab We Met"
  },
  {
    id: 93,
    title: "Mauja Hi Mauja",
    firstLine: "Mauja hi mauja",
    lastWord: "Mauja",
    lastConsonant: "ज",
    themes: ["Celebration", "Joy"],
    singerType: "Male Solo",
    year: 2007,
    movie: "Jab We Met"
  },
  {
    id: 94,
    title: "Om Shanti Om",
    firstLine: "Om shanti om",
    lastWord: "Om",
    lastConsonant: "म",
    themes: ["Dance", "Celebration"],
    singerType: "Male Solo",
    year: 2007,
    movie: "Om Shanti Om"
  },
  {
    id: 95,
    title: "Kaho Naa Pyaar Hai",
    firstLine: "Kaho naa pyaar hai",
    lastWord: "Hai",
    lastConsonant: "य",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2000,
    movie: "Kaho Naa Pyaar Hai"
  },
  {
    id: 96,
    title: "Aaj Ki Raat",
    firstLine: "Aaj ki raat hai zindagi",
    lastWord: "Zindagi",
    lastConsonant: "ग",
    themes: ["Night", "Dance"],
    singerType: "Female Solo",
    year: 2006,
    movie: "Don"
  },
  {
    id: 97,
    title: "Pehli Nazar Mein",
    firstLine: "Pehli nazar mein",
    lastWord: "Mein",
    lastConsonant: "न",
    themes: ["Love", "First Sight"],
    singerType: "Duet",
    year: 2008,
    movie: "Race"
  },
  {
    id: 98,
    title: "Maahi Ve",
    firstLine: "Maahi ve maahi ve",
    lastWord: "Ve",
    lastConsonant: "व",
    themes: ["Love", "Longing"],
    singerType: "Male Solo",
    year: 2002,
    movie: "Kal Ho Naa Ho"
  },
  {
    id: 99,
    title: "Mitwa",
    firstLine: "Mitwa kahaan hai tu",
    lastWord: "Tu",
    lastConsonant: "त",
    themes: ["Longing", "Love"],
    singerType: "Male Solo",
    year: 2006,
    movie: "Kabhi Alvida Naa Kehna"
  },
  {
    id: 100,
    title: "Tum Hi Ho",
    firstLine: "Tum hi ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2013,
    movie: "Aashiqui 2"
  },
  {
    id: 101,
    title: "Badtameez Dil",
    firstLine: "Badtameez dil maane na",
    lastWord: "Na",
    lastConsonant: "न",
    themes: ["Youth", "Love"],
    singerType: "Male Solo",
    year: 2013,
    movie: "Yeh Jawaani Hai Deewani"
  },
  {
    id: 102,
    title: "Naina",
    firstLine: "Naina jo saanjhe khwaab dekhte the",
    lastWord: "The",
    lastConsonant: "थ",
    themes: ["Inspiration", "Dreams"],
    singerType: "Male Solo",
    year: 2016,
    movie: "Dangal"
  },
  {
    id: 103,
    title: "Galliyan",
    firstLine: "Galliyan teri galliyan",
    lastWord: "Galliyan",
    lastConsonant: "य",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2014,
    movie: "Ek Villain"
  },
  {
    id: 104,
    title: "Gerua",
    firstLine: "Gerua tera gerua rang",
    lastWord: "Rang",
    lastConsonant: "ग",
    themes: ["Romance", "Love"],
    singerType: "Duet",
    year: 2015,
    movie: "Dilwale"
  },
  {
    id: 105,
    title: "Channa Mereya",
    firstLine: "Channa mereya mereya",
    lastWord: "Mereya",
    lastConsonant: "य",
    themes: ["Heartbreak", "Sadness"],
    singerType: "Male Solo",
    year: 2016,
    movie: "Ae Dil Hai Mushkil"
  },
  {
    id: 106,
    title: "Bulleya",
    firstLine: "Bulleya ki jaana main kaun",
    lastWord: "Kaun",
    lastConsonant: "न",
    themes: ["Spiritual", "Love"],
    singerType: "Male Solo",
    year: 2016,
    movie: "Ae Dil Hai Mushkil"
  },
  {
    id: 107,
    title: "Ae Watan",
    firstLine: "Ae watan watan mere aabad rahe tu",
    lastWord: "Tu",
    lastConsonant: "त",
    themes: ["Patriotic", "Devotion"],
    singerType: "Female Solo",
    year: 2018,
    movie: "Raazi"
  },
  {
    id: 108,
    title: "Pehli Dafa",
    firstLine: "Pehli dafa hai shayad",
    lastWord: "Shayad",
    lastConsonant: "द",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2017,
    movie: "Ileana D'Cruz"
  },
  {
    id: 109,
    title: "Tere Sang Yaara",
    firstLine: "Tere sang yaara",
    lastWord: "Yaara",
    lastConsonant: "र",
    themes: ["Love", "Devotion"],
    singerType: "Male Solo",
    year: 2016,
    movie: "Rustom"
  },
  {
    id: 110,
    title: "Agar Tum Saath Ho",
    firstLine: "Agar tum saath ho",
    lastWord: "Ho",
    lastConsonant: "ह",
    themes: ["Love", "Longing"],
    singerType: "Duet",
    year: 2015,
    movie: "Tamasha"
  },
  {
    id: 111,
    title: "Bekhayali",
    firstLine: "Bekhayali mein bhi tera",
    lastWord: "Tera",
    lastConsonant: "र",
    themes: ["Heartbreak", "Longing"],
    singerType: "Male Solo",
    year: 2019,
    movie: "Kabir Singh"
  },
  {
    id: 112,
    title: "Mere Naam Tu",
    firstLine: "Mere naam tu",
    lastWord: "Tu",
    lastConsonant: "त",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2018,
    movie: "Zero"
  },
  {
    id: 113,
    title: "Sanam Re",
    firstLine: "Sanam re sanam re",
    lastWord: "Re",
    lastConsonant: "र",
    themes: ["Romance", "Love"],
    singerType: "Male Solo",
    year: 2016,
    movie: "Sanam Re"
  },
  {
    id: 114,
    title: "Kesariya",
    firstLine: "Kesariya tera ishq hai piya",
    lastWord: "Piya",
    lastConsonant: "य",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2022,
    movie: "Brahmastra"
  },
  {
    id: 115,
    title: "Apna Bana Le",
    firstLine: "Apna bana le piya",
    lastWord: "Piya",
    lastConsonant: "य",
    themes: ["Love", "Longing"],
    singerType: "Male Solo",
    year: 2022,
    movie: "Bhediya"
  },
  {
    id: 116,
    title: "Srivalli",
    firstLine: "Srivalli kannulatho",
    lastWord: "Kannulatho",
    lastConsonant: "थ",
    themes: ["Romance", "Dance"],
    singerType: "Male Solo",
    year: 2021,
    movie: "Pushpa"
  },
  {
    id: 117,
    title: "Raataan Lambiyan",
    firstLine: "Raataan lambiyan",
    lastWord: "Lambiyan",
    lastConsonant: "य",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2021,
    movie: "Shershaah"
  },
  {
    id: 118,
    title: "Ranjha",
    firstLine: "Ranjha ranjha kardi ni",
    lastWord: "Ni",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2021,
    movie: "Shershaah"
  },
  {
    id: 119,
    title: "Vai Vai",
    firstLine: "Vai vai vai vai",
    lastWord: "Vai",
    lastConsonant: "व",
    themes: ["Dance", "Party"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Jawan"
  },
  {
    id: 120,
    title: "Chaleya",
    firstLine: "Chaleya chaleya",
    lastWord: "Chaleya",
    lastConsonant: "य",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2023,
    movie: "Jawan"
  },
  {
    id: 121,
    title: "Tere Vaaste",
    firstLine: "Tere vaaste falak se main chand launga",
    lastWord: "Launga",
    lastConsonant: "ग",
    themes: ["Love", "Devotion"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Zara Hatke Zara Bachke"
  },
  {
    id: 122,
    title: "Maan Meri Jaan",
    firstLine: "Maan meri jaan",
    lastWord: "Jaan",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2022,
    movie: "King"
  },
  {
    id: 123,
    title: "Oo Antava",
    firstLine: "Oo antava oo oo antava",
    lastWord: "Antava",
    lastConsonant: "व",
    themes: ["Dance", "Item Song"],
    singerType: "Female Solo",
    year: 2021,
    movie: "Pushpa"
  },
  {
    id: 124,
    title: "Besharam Rang",
    firstLine: "Besharam rang",
    lastWord: "Rang",
    lastConsonant: "ग",
    themes: ["Dance", "Romance"],
    singerType: "Duet",
    year: 2023,
    movie: "Pathaan"
  },
  {
    id: 125,
    title: "Jhoome Jo Pathaan",
    firstLine: "Jhoome jo pathaan",
    lastWord: "Pathaan",
    lastConsonant: "न",
    themes: ["Dance", "Party"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Pathaan"
  },
  {
    id: 126,
    title: "Tum Kya Mile",
    firstLine: "Tum kya mile",
    lastWord: "Mile",
    lastConsonant: "ल",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2023,
    movie: "Rocky Aur Rani"
  },
  {
    id: 127,
    title: "What Jhumka",
    firstLine: "What jhumka",
    lastWord: "Jhumka",
    lastConsonant: "क",
    themes: ["Dance", "Party"],
    singerType: "Duet",
    year: 2023,
    movie: "Rocky Aur Rani"
  },
  {
    id: 128,
    title: "Ve Kamleya",
    firstLine: "Ve kamleya mere naina",
    lastWord: "Naina",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2023,
    movie: "Rocky Aur Rani"
  },
  {
    id: 129,
    title: "Arjan Vailly",
    firstLine: "Arjan vailly ni o yaar bolde",
    lastWord: "Bolde",
    lastConsonant: "द",
    themes: ["Action", "Power"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Animal"
  },
  {
    id: 130,
    title: "Satranga",
    firstLine: "Satranga re satranga",
    lastWord: "Satranga",
    lastConsonant: "ग",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Animal"
  },
  {
    id: 131,
    title: "Pehle Bhi Main",
    firstLine: "Pehle bhi main tumse mila hoon",
    lastWord: "Hoon",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Animal"
  },
  {
    id: 132,
    title: "O Maahi",
    firstLine: "O maahi o maahi",
    lastWord: "Maahi",
    lastConsonant: "ह",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Dunki"
  },
  {
    id: 133,
    title: "Lutt Putt Gaya",
    firstLine: "Lutt putt gaya re",
    lastWord: "Re",
    lastConsonant: "र",
    themes: ["Love", "Dance"],
    singerType: "Duet",
    year: 2023,
    movie: "Dunki"
  },
  {
    id: 134,
    title: "Jamal Kudu",
    firstLine: "Jamal kudu jamal kudu",
    lastWord: "Kudu",
    lastConsonant: "ड",
    themes: ["Dance", "Party"],
    singerType: "Female Solo",
    year: 2023,
    movie: "Animal"
  },
  {
    id: 135,
    title: "Ajaa Sajna Milke",
    firstLine: "Ajaa sajna milke saari raat",
    lastWord: "Raat",
    lastConsonant: "त",
    themes: ["Romance", "Seduction"],
    singerType: "Female Solo",
    year: 2023,
    movie: "Satyaprem Ki Katha"
  },
  {
    id: 136,
    title: "Naseeb Se",
    firstLine: "Naseeb se teri dosti",
    lastWord: "Dosti",
    lastConsonant: "त",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2023,
    movie: "Satyaprem Ki Katha"
  },
  {
    id: 137,
    title: "Aaj Ki Raat (Stree 2)",
    firstLine: "Aaj ki raat maza husn ka aankhon se lena",
    lastWord: "Lena",
    lastConsonant: "न",
    themes: ["Dance", "Party", "Item"],
    singerType: "Female Solo",
    year: 2024,
    movie: "Stree 2"
  },
  {
    id: 138,
    title: "Tauba Tauba",
    firstLine: "Tauba tauba teri nazarein",
    lastWord: "Nazarein",
    lastConsonant: "न",
    themes: ["Dance", "Romance"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Bad Newz"
  },
  {
    id: 139,
    title: "Husn Tera Tauba Tauba",
    firstLine: "Husn tera tauba tauba",
    lastWord: "Tauba",
    lastConsonant: "ब",
    themes: ["Romance", "Dance"],
    singerType: "Duet",
    year: 2024,
    movie: "Bad Newz"
  },
  {
    id: 140,
    title: "Akhiyaan Gulaab",
    firstLine: "Akhiyaan gulaab diyaan",
    lastWord: "Diyaan",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Teri Baaton Mein Aisa Uljha Jiya"
  },
  {
    id: 141,
    title: "Laal Peeli Akhiyaan",
    firstLine: "Laal peeli akhiyaan",
    lastWord: "Akhiyaan",
    lastConsonant: "न",
    themes: ["Dance", "Romance"],
    singerType: "Duet",
    year: 2024,
    movie: "Teri Baaton Mein Aisa Uljha Jiya"
  },
  {
    id: 142,
    title: "O Sajni Re",
    firstLine: "O sajni re dil ki baatein",
    lastWord: "Baatein",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2024,
    movie: "Laapataa Ladies"
  },
  {
    id: 143,
    title: "Angaaron",
    firstLine: "Angaaron se jal gayi",
    lastWord: "Gayi",
    lastConsonant: "य",
    themes: ["Pain", "Emotion"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Pushpa 2"
  },
  {
    id: 144,
    title: "Peelings",
    firstLine: "Peelings peelings peelings aa",
    lastWord: "Aa",
    lastConsonant: "आ",
    themes: ["Dance", "Party"],
    singerType: "Duet",
    year: 2024,
    movie: "Pushpa 2"
  },
  {
    id: 145,
    title: "Sooseki",
    firstLine: "Sooseki antha scene ye ledu",
    lastWord: "Ledu",
    lastConsonant: "ड",
    themes: ["Dance", "Item"],
    singerType: "Female Solo",
    year: 2024,
    movie: "Pushpa 2"
  },
  {
    id: 146,
    title: "Saami Saami (Pushpa)",
    firstLine: "Saami saami saami saami",
    lastWord: "Saami",
    lastConsonant: "म",
    themes: ["Dance", "Item"],
    singerType: "Female Solo",
    year: 2023,
    movie: "Pushpa"
  },
  {
    id: 147,
    title: "Kasam Se",
    firstLine: "Kasam se teri aankhen",
    lastWord: "Aankhen",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Animal"
  },
  {
    id: 148,
    title: "Chal Kudiye",
    firstLine: "Chal kudiye chal kudiye",
    lastWord: "Kudiye",
    lastConsonant: "य",
    themes: ["Dance", "Party"],
    singerType: "Duet",
    year: 2024,
    movie: "Jigra"
  },
  {
    id: 149,
    title: "Phoolon Ka Taaron Ka",
    firstLine: "Phoolon ka taaron ka sabka kehna hai",
    lastWord: "Hai",
    lastConsonant: "ह",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Khel Khel Mein"
  },
  {
    id: 150,
    title: "Hauli Hauli",
    firstLine: "Hauli hauli hauli hauli",
    lastWord: "Hauli",
    lastConsonant: "ल",
    themes: ["Dance", "Romance"],
    singerType: "Duet",
    year: 2024,
    movie: "Khel Khel Mein"
  },
  {
    id: 151,
    title: "Tu Hai Kahan",
    firstLine: "Tu hai kahan dil mera",
    lastWord: "Mera",
    lastConsonant: "र",
    themes: ["Love", "Sadness"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Yodha"
  },
  {
    id: 152,
    title: "Arjan Vailly (Reprise)",
    firstLine: "Arjan vailly ni main teri haan",
    lastWord: "Haan",
    lastConsonant: "न",
    themes: ["Action", "Power"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Animal"
  },
  {
    id: 153,
    title: "Deva Deva",
    firstLine: "Deva deva ganpati deva",
    lastWord: "Deva",
    lastConsonant: "व",
    themes: ["Devotional", "Dance"],
    singerType: "Duet",
    year: 2024,
    movie: "Brahmāstra"
  },
  {
    id: 154,
    title: "Sun Sajni",
    firstLine: "Sun sajni sun dilbar",
    lastWord: "Dilbar",
    lastConsonant: "र",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Maidaan"
  },
  {
    id: 155,
    title: "Khudaya Ve",
    firstLine: "Khudaya ve khudaya ve",
    lastWord: "Ve",
    lastConsonant: "व",
    themes: ["Love", "Pain"],
    singerType: "Duet",
    year: 2023,
    movie: "Satyaprem Ki Katha"
  },
  {
    id: 156,
    title: "Chaleya (Reprise)",
    firstLine: "Chaleya chaleya mere naal",
    lastWord: "Naal",
    lastConsonant: "ल",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2023,
    movie: "Jawan"
  },
  {
    id: 157,
    title: "Sajni (Laapataa)",
    firstLine: "Sajni re tere bina",
    lastWord: "Bina",
    lastConsonant: "न",
    themes: ["Love", "Sadness"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Laapataa Ladies"
  },
  {
    id: 158,
    title: "Tere Pyaar Mein",
    firstLine: "Tere pyaar mein dil deewana",
    lastWord: "Deewana",
    lastConsonant: "न",
    themes: ["Love", "Romance"],
    singerType: "Duet",
    year: 2024,
    movie: "Tu Jhoothi Main Makkaar"
  },
  {
    id: 159,
    title: "Pyaar Hota Kayi Baar Hai",
    firstLine: "Pyaar hota kayi baar hai",
    lastWord: "Hai",
    lastConsonant: "ह",
    themes: ["Love", "Romance"],
    singerType: "Male Solo",
    year: 2024,
    movie: "Tu Jhoothi Main Makkaar"
  }
];
