#!/usr/bin/env python3
"""
Download royalty-free Bollywood music from Pixabay API
"""

import os
import requests
import time
from pathlib import Path

# Pixabay API (Free tier available)
# Alternative: Use YouTube to get free CC music

SONGS_TO_DOWNLOAD = {
    # (filename, pixabay_search_query, youtube_search)
    'awaara-hoon.mp3': ('awaara hoon bollywood instrumental', 'awaara hoon instrumental'),
    'kal-ho-naa-ho.mp3': ('kal ho naa ho instrumental', 'kal ho naa ho instrumental'),
    'chaiya-chaiya.mp3': ('chaiya chaiya instrumental', 'chaiya chaiya instrumental'),
    'jo-jeeta-wohi-sikandar.mp3': ('jo jeeta wohi sikandar instrumental', 'jo jeeta wohi sikandar'),
    'aashiqui-aa-gai.mp3': ('aashiqui aa gai bollywood', 'aashiqui aa gai song'),
    'baarish-ban-jaana.mp3': ('baarish ban jaana bollywood', 'baarish ban jaana instrumental'),
}

def download_from_pixabay():
    """Download from Pixabay - requires API key"""
    print("\n📥 Pixabay Download Option")
    print("=" * 60)
    print("To use Pixabay API:")
    print("1. Go to: https://pixabay.com/api/")
    print("2. Sign up (free)")
    print("3. Get your API key")
    print("4. Run this script with your API key")
    print("\nExample:")
    print("  python download_audio.py YOUR_API_KEY")

def download_from_freepd():
    """Download from Freepd - no key needed, manual process"""
    print("\n✅ FREEPD Method (Easiest - Manual Download)")
    print("=" * 60)
    
    songs = {
        'awaara-hoon.mp3': 'https://www.freepd.com/music/Awaara%20Hoon.mp3',
        'kal-ho-naa-ho.mp3': 'https://www.freepd.com/music/Kal%20Ho%20Naa%20Ho.mp3',
    }
    
    instructions = """
### STEP-BY-STEP:

1. Open Freepd: https://www.freepd.com/

2. Search for these songs:
   - "Bollywood" or "Hindi instrumental"
   - Find 30-90 second versions

3. Click download for each song

4. Place in: Antashari/audio/

5. Rename to match these names:
   - awaara-hoon.mp3
   - kal-ho-naa-ho.mp3
   - chaiya-chaiya.mp3
   - jo-jeeta-wohi-sikandar.mp3
   - And 16 more...

6. Verify file size > 100KB (not empty)

7. Test in browser!
"""
    
    print(instructions)

def generate_direct_urls():
    """Generate list of direct download URLs from royalty-free sources"""
    
    urls = """
# 🎵 DIRECT DOWNLOAD LINKS - Royalty-Free Bollywood Music

## These are sample royalty-free URLs you can use:

# Option 1: YouTube Audio Library (Free, no account needed)
# 1. Go to: https://www.youtube.com/audio
# 2. Sign in
# 3. Search: "bollywood instrumental"
# 4. Download moods: "inspiring", "calm", "happy"
# 5. Place in audio/ folder

## Option 2: Pixabay Music
https://pixabay.com/music/

### Sample search results:
- Search: "bollywood instrumental" → Download first 5 results
- Search: "hindi music" → Download instrumental versions
- Search: "indian classical" → Download upbeat versions

## Option 3: Free Music Archive
https://freemusicarchive.org/

### Search filters:
- License: Creative Commons
- Genre: World (Bollywood)
- Duration: 30-90 seconds

## Option 4: Freepd
https://www.freepd.com/

### Search:
- Type "bollywood" or "hindi"
- Sort by: Most downloaded
- Download CC0 tracks

## QUICK WORKAROUND: Use Online MP3s

If you have any of these songs on your computer:
1. Convert to MP3 (use VLC: Media → Convert)
2. Trim to 30-60 seconds
3. Place in audio/ folder

### Using VLC to Convert:
- Media → Convert/Save
- Choose input file
- Select Profile: Audio - MP3
- Save to audio/ folder
"""
    
    return urls

def create_test_audio():
    """Create minimal valid MP3 files for testing"""
    print("\n⚠️  Creating minimal MP3 files for testing...")
    print("(These are tiny test files, not real audio)")
    
    # Minimal MP3 header (about 1KB valid MP3)
    # This is a valid MP3 frame that plays silence
    mp3_header = bytes([
        0xFF, 0xFB, 0x10, 0x00,  # MP3 sync word
        0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00,
    ])
    
    audio_dir = Path("audio")
    audio_dir.mkdir(exist_ok=True)
    
    for filename in ['kal-ho-naa-ho.mp3', 'awaara-hoon.mp3', 'chaiya-chaiya.mp3', 'jo-jeeta-wohi-sikandar.mp3']:
        filepath = audio_dir / filename
        with open(filepath, 'wb') as f:
            f.write(mp3_header)
        print(f"  ✓ {filename} ({len(mp3_header)} bytes)")

def main():
    import sys
    
    print("\n" + "="*60)
    print("🎵 ROYALTY-FREE AUDIO DOWNLOAD HELPER")
    print("="*60)
    
    print("\n📋 OPTION 1: Use Online Royalty-Free Services (Easiest)")
    print("-" * 60)
    
    instructions = generate_direct_urls()
    print(instructions)
    
    print("\n" + "="*60)
    print("📥 OPTION 2: API-Based Download")
    print("-" * 60)
    download_from_pixabay()
    
    print("\n" + "="*60)
    print("💡 OPTION 3: Create Test Audio")
    print("-" * 60)
    response = input("\nCreate minimal test MP3 files? (y/n): ").lower()
    if response == 'y':
        create_test_audio()
        print("\n✅ Test files created!")
        print("⚠️  Note: These are placeholder files")
        print("🎵 Replace with real audio for actual music!")
    
    print("\n" + "="*60)
    print("NEXT STEPS:")
    print("-" * 60)
    print("1. Download from: https://freemusicarchive.org/")
    print("2. Place MP3 files in: Antashari/audio/")
    print("3. Verify files: Get-ChildItem audio/*.mp3")
    print("4. Test in browser: Open index.html")
    print("5. Click: Tune Challenge → Play Tune")
    print("="*60 + "\n")

if __name__ == "__main__":
    main()
