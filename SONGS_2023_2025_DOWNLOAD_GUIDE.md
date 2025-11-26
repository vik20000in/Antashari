# YouTube Search Queries for 2023-2025 Songs
# Use these search terms to find and download songs manually

## How to Download:
1. Search YouTube with the queries below
2. Copy the video URL
3. Run: python scripts/youtube_to_mp3.py
4. Paste the URL when prompted

## Songs to Download (30 total):

### Animal (2023) - 6 songs
1. satranga.mp3
   Search: "Satranga Animal Arijit Singh official"
   
2. pehle-bhi-main.mp3
   Search: "Pehle Bhi Main Animal Vishal Mishra official"
   
3. jamal-kudu.mp3
   Search: "Jamal Kudu Animal Bobby Deol official"
   
4. kasam-se.mp3
   Search: "Kasam Se Animal Arijit Singh official"
   
5. arjan-vailly-reprise.mp3
   Search: "Arjan Vailly Animal reprise Bhupinder Babbal"

### Dunki (2023) - 2 songs
6. o-maahi.mp3
   Search: "O Maahi Dunki Arijit Singh Shah Rukh Khan official"
   
7. lutt-putt-gaya.mp3
   Search: "Lutt Putt Gaya Dunki Arijit Singh official"

### Satyaprem Ki Katha (2023) - 3 songs
8. ajaa-sajna-milke.mp3
   Search: "Ajaa Sajna Milke Satyaprem Ki Katha official"
   
9. naseeb-se.mp3
   Search: "Naseeb Se Satyaprem Ki Katha Payal Dev official"
   
10. khudaya-ve.mp3
    Search: "Khudaya Ve Satyaprem Ki Katha Arijit Singh official"

### Stree 2 (2024) - 1 song
11. aaj-ki-raat-stree2.mp3
    Search: "Aaj Ki Raat Stree 2 Madhuri Dixit Tamannaah official"

### Bad Newz (2024) - 2 songs
12. tauba-tauba.mp3
    Search: "Tauba Tauba Bad Newz Vicky Kaushal Karan Aujla official"
    
13. husn-tera-tauba-tauba.mp3
    Search: "Husn Tera Tauba Tauba Bad Newz official"

### Teri Baaton Mein Aisa Uljha Jiya (2024) - 2 songs
14. akhiyaan-gulaab.mp3
    Search: "Akhiyaan Gulaab Teri Baaton Mein Mitraz Shahid Kapoor official"
    
15. laal-peeli-akhiyaan.mp3
    Search: "Laal Peeli Akhiyaan Teri Baaton Mein Shahid Kapoor official"

### Laapataa Ladies (2024) - 2 songs
16. o-sajni-re.mp3
    Search: "O Sajni Re Laapataa Ladies Arijit Singh official"
    
17. sajni-laapataa.mp3
    Search: "Sajni Laapataa Ladies Arijit Singh official"

### Pushpa 2 (2024) - 3 songs
18. angaaron.mp3
    Search: "Angaaron Pushpa 2 Allu Arjun official"
    
19. peelings.mp3
    Search: "Peelings Pushpa 2 Allu Arjun official"
    
20. sooseki.mp3
    Search: "Sooseki Pushpa 2 Sreeleela official"

### Pushpa (2023) - 1 song
21. saami-saami-pushpa.mp3
    Search: "Saami Saami Pushpa Allu Arjun Rashmika official"

### Jigra (2024) - 1 song
22. chal-kudiye.mp3
    Search: "Chal Kudiye Jigra Alia Bhatt Diljit Dosanjh official"

### Khel Khel Mein (2024) - 2 songs
23. phoolon-ka-taaron-ka.mp3
    Search: "Phoolon Ka Taaron Ka Khel Khel Mein Akshay Kumar official"
    
24. hauli-hauli.mp3
    Search: "Hauli Hauli Khel Khel Mein Akshay Kumar official"

### Yodha (2024) - 1 song
25. tu-hai-kahan.mp3
    Search: "Tu Hai Kahan Yodha Sidharth Malhotra official"

### Brahmastra (2024) - 1 song
26. deva-deva.mp3
    Search: "Deva Deva Brahmastra Ranbir Kapoor Amitabh official"

### Maidaan (2024) - 1 song
27. sun-sajni.mp3
    Search: "Sun Sajni Maidaan Ajay Devgn official"

### Jawan (2023) - 1 song
28. chaleya-reprise.mp3
    Search: "Chaleya reprise Jawan Shah Rukh Khan Arijit Singh"

### Tu Jhoothi Main Makkaar (2024) - 2 songs
29. tere-pyaar-mein.mp3
    Search: "Tere Pyaar Mein Tu Jhoothi Main Makkaar Arijit Singh official"
    
30. pyaar-hota-kayi-baar-hai.mp3
    Search: "Pyaar Hota Kayi Baar Hai Tu Jhoothi Main Makkaar Arijit Singh official"

---

## Quick Download Commands:

After finding the YouTube URLs, you can download using:

```powershell
# Interactive mode (recommended)
python scripts/youtube_to_mp3.py

# Or single file mode
python scripts/simple_download.py satranga.mp3 "YOUTUBE_URL_HERE"
```

## Batch Download (if you have URLs):
Create a file with URLs and filenames, then use the youtube_to_mp3.py script.

---

**Note:** All songs will be automatically placed in `assets/audio/` folder.
After downloading, run: `.\scripts\trim_audio_files.ps1` to ensure 3-minute maximum length.
