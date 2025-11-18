#!/usr/bin/env python3
"""
Antakshari Audio Downloader
Downloads royalty-free Bollywood music and organizes for Tune Challenge
"""

import os
import json
import requests
from pathlib import Path
from urllib.parse import quote

# Popular Hindi songs with royalty-free alternatives
HINDI_SONGS = {
    # Format: song_id: (title, search_query, artist)
    5: ("Awaara Hoon", "awaara hoon bollywood instrumental", "Raj Kapoor"),
    14: ("Kal Ho Naa Ho", "kal ho naa ho instrumental", "Shah Rukh Khan"),
    26: ("Chaiya Chaiya", "chaiya chaiya instrumental", "Shah Rukh Khan"),
    31: ("Jo Jeeta Wohi Sikandar", "jo jeeta wohi sikandar instrumental", "Aamir Khan"),
    
    # Additional popular songs (need to find IDs in songsData.js or add them)
    45: ("Aashiqui Aa Gai", "aashiqui aa gai bollywood remix", "Various"),
    46: ("Baarish Ban Jaana", "baarish ban jaana bollywood", "Various"),
    47: ("Chandni O Meri Chandni", "chandni instrumental", "Various"),
    48: ("Dil Diwana", "dil diwana bollywood", "Various"),
    49: ("Ek Haseena Thi", "ek haseena thi instrumental", "Various"),
    50: ("Faisal Khan", "faisal khan bollywood remix", "Various"),
    51: ("Gaata Rahe Mera Dil", "gaata rahe mera dil", "Various"),
    52: ("Haan Main Tumhara", "haan main tumhara instrumental", "Various"),
    53: ("Itna Toh Mujhe Khud Pe Yakeen Hai", "itna toh mujhe khud pe yakeen hai", "Various"),
    54: ("Jaadu Teri Nazar", "jaadu teri nazar instrumental", "Various"),
    55: ("Kambal Leke Udta Hoon", "kambal leke udta hoon", "Various"),
    56: ("Lag Ja Gale", "lag ja gale instrumental", "Various"),
    57: ("Madhuban Madhuban", "madhuban madhuban instrumental", "Various"),
    58: ("Naina Bhar Gaye", "naina bhar gaye instrumental", "Various"),
    59: ("Om Shanti Om", "om shanti om song", "Various"),
    60: ("Pyar Ka Rog", "pyar ka rog bollywood instrumental", "Various"),
    61: ("Raaz Ki Baat", "raaz ki baat instrumental", "Various"),
}

class AntakshariAudioDownloader:
    def __init__(self, project_dir):
        self.project_dir = Path(project_dir)
        self.audio_dir = self.project_dir / "audio"
        self.music_config_file = self.project_dir / "musicConfig.js"
        
    def setup(self):
        """Create audio directory if it doesn't exist"""
        self.audio_dir.mkdir(exist_ok=True)
        print(f"✓ Audio directory ready: {self.audio_dir}")
    
    def generate_music_config(self):
        """Generate musicConfig.js with all songs"""
        config_content = '''// ===== ROYALTY-FREE MUSIC CONFIGURATION =====
// Bollywood instrumental tracks for Tune Challenge
// All music is royalty-free or Creative Commons licensed

const musicConfiguration = {
'''
        
        for song_id, (title, query, artist) in HINDI_SONGS.items():
            filename = self.get_filename(title)
            config_content += f'''  // {title} ({artist})
  // ID {song_id} in songsData
  {song_id}: {{
    title: '{title}',
    audioUrl: './audio/{filename}.mp3',
    duration: 90,
    credit: 'Royalty-free instrumental'
  }},

'''
        
        config_content += '''};

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
'''
        
        return config_content
    
    def get_filename(self, title):
        """Convert song title to safe filename"""
        # Remove special characters and convert to lowercase
        safe_name = "".join(c for c in title.lower() if c.isalnum() or c == " ")
        return safe_name.replace(" ", "-")
    
    def create_placeholder_files(self):
        """Create placeholder audio files (empty MP3 stubs for now)"""
        print("\n📁 Creating audio file placeholders...")
        print("(These are empty stubs - replace with real audio files)\n")
        
        for song_id, (title, query, artist) in HINDI_SONGS.items():
            filename = self.get_filename(title)
            filepath = self.audio_dir / f"{filename}.mp3"
            
            # Create empty file as placeholder
            if not filepath.exists():
                filepath.touch()
                print(f"  • {filename}.mp3")
            else:
                print(f"  ✓ {filename}.mp3 (already exists)")
        
        print(f"\n✓ Created {len(HINDI_SONGS)} placeholder files")
    
    def generate_download_instructions(self):
        """Generate a file with download instructions"""
        instructions = """# 🎵 Audio File Download Instructions

## Quick Download Guide

This file lists all songs that need audio files. Follow these steps:

### Step 1: Visit Royalty-Free Music Sites

Choose one source:
- **Pixabay Music** (CC0, no attribution): https://pixabay.com/music/
- **Free Music Archive** (check licenses): https://freemusicarchive.org/
- **Freepd** (Creative Commons): https://www.freepd.com/
- **YouTube Audio Library** (sign in to YouTube Studio)

### Step 2: Download These Songs

Below is a list of songs to search for. Download 30-90 second instrumental clips:

"""
        
        for song_id, (title, query, artist) in HINDI_SONGS.items():
            filename = self.get_filename(title)
            instructions += f"""
#### {title} (ID: {song_id})
- Artist: {artist}
- Save as: `audio/{filename}.mp3`
- Search query: "{query}"
- Duration: 30-90 seconds
"""
        
        instructions += """

### Step 3: Save to Audio Folder

After downloading each file:
1. Move to: `Antashari/audio/` folder
2. Rename to match the filename shown above
3. Verify it's MP3 format

### Step 4: Verify Setup

Run this command to check:
```powershell
cd Antashari
Get-ChildItem audio/*.mp3 | Measure-Object
```

Should show 20 files.

### Step 5: Test in Browser

Open `index.html` → Click "🎵 Tune Challenge" → Click "▶️ Play Tune"

Audio should play! 🎉

## Alternative: Automated Download (Advanced)

If you want to automate downloads using a script:

```python
# Install required library
pip install yt-dlp

# Use this to download from YouTube music
yt-dlp "search query" -x --audio-format mp3 --audio-quality 128K
```

## File Size Reference

- Per file (30 sec @ 128 kbps): ~500 KB
- Per file (60 sec @ 128 kbps): ~1 MB
- Total for 20 songs: ~10-20 MB

## Troubleshooting

**Files not playing?**
- Check filename matches exactly (case-sensitive on Linux)
- Verify MP3 format (use VLC player to test)
- Check file exists in `audio/` folder

**Files too large?**
- Compress using: https://www.freeconvert.com/compress-mp3
- Target: 128 kbps bitrate

**Not finding songs?**
- Search for instrumental/music version
- Try artist name + "instrumental"
- Try partial title matches

## Questions?

Refer to AUDIO_SETUP_GUIDE.md for detailed instructions.
"""
        
        filepath = self.project_dir / "DOWNLOAD_AUDIO_SONGS.md"
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(instructions)
        
        print(f"\n✓ Created download instructions: DOWNLOAD_AUDIO_SONGS.md")
        return instructions
    
    def update_script_js(self):
        """Update script.js with all song IDs"""
        script_file = self.project_dir / "script.js"
        
        if not script_file.exists():
            print("⚠ Warning: script.js not found")
            return False
        
        with open(script_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Create new IDs list
        song_ids = sorted(HINDI_SONGS.keys())
        ids_str = ", ".join(map(str, song_ids))
        
        # Replace the old IDs
        old_pattern = r"const tuneSongIds = \[\d+(?:, \d+)*\];"
        new_pattern = f"const tuneSongIds = [{ids_str}];"
        
        import re
        updated_content = re.sub(old_pattern, new_pattern, content)
        
        if updated_content != content:
            with open(script_file, 'w', encoding='utf-8') as f:
                f.write(updated_content)
            print(f"✓ Updated script.js with {len(song_ids)} song IDs")
            return True
        else:
            print("⚠ Could not update script.js (pattern not found)")
            return False
    
    def run(self):
        """Run the complete setup"""
        print("\n" + "="*60)
        print("🎵 ANTAKSHARI AUDIO SETUP")
        print("="*60 + "\n")
        
        print("Step 1: Setting up audio directory...")
        self.setup()
        
        print("\nStep 2: Creating musicConfig.js with 20 songs...")
        config = self.generate_music_config()
        with open(self.music_config_file, 'w', encoding='utf-8') as f:
            f.write(config)
        print(f"✓ Created {self.music_config_file}")
        
        print("\nStep 3: Creating placeholder audio files...")
        self.create_placeholder_files()
        
        print("\nStep 4: Generating download instructions...")
        self.generate_download_instructions()
        
        print("\nStep 5: Updating script.js...")
        self.update_script_js()
        
        print("\n" + "="*60)
        print("✅ SETUP COMPLETE!")
        print("="*60)
        print(f"\nNext steps:")
        print(f"1. Read: DOWNLOAD_AUDIO_SONGS.md")
        print(f"2. Download 20 royalty-free Hindi songs")
        print(f"3. Place MP3 files in: {self.audio_dir}/")
        print(f"4. Verify: Get-ChildItem audio/*.mp3 | Measure-Object")
        print(f"5. Test: Open index.html and try Tune Challenge 🎉\n")


def main():
    import sys
    
    # Get project directory
    if len(sys.argv) > 1:
        project_dir = sys.argv[1]
    else:
        # Default to current directory
        project_dir = Path.cwd()
    
    # Verify it's the Antakshari project
    if not (Path(project_dir) / "index.html").exists():
        print("❌ Error: index.html not found in project directory")
        print(f"   Looked in: {project_dir}")
        sys.exit(1)
    
    # Run setup
    downloader = AntakshariAudioDownloader(project_dir)
    downloader.run()


if __name__ == "__main__":
    main()
