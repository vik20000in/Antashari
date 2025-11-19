"""
YouTube to MP3 Converter - Full Audio Download
Downloads full YouTube audio and converts to MP3

Requirements:
    pip install yt-dlp

Note: This downloads the full audio (not trimmed to 2 minutes)
You can manually trim the MP3 files later if needed.

Usage:
    python youtube_to_mp3.py
"""

import os
import subprocess
import sys

def check_dependencies():
    """Check if yt-dlp is installed"""
    try:
        import yt_dlp
        return True
    except ImportError:
        print("❌ yt-dlp not found!")
        print("\nPlease install it using:")
        print("  pip install yt-dlp")
        return False

def download_and_convert(youtube_url, output_filename):
    """
    Download YouTube video and convert to MP3 (full audio)
    
    Args:
        youtube_url: YouTube video URL
        output_filename: Output MP3 filename (with .mp3 extension)
    """
    try:
        import yt_dlp
        
        # Create output path in audio folder
        output_path = os.path.join('audio', output_filename)
        
        # yt-dlp options - simple download without trimming
        ydl_opts = {
            'format': 'bestaudio/best',
            'outtmpl': output_path.replace('.mp3', '.%(ext)s'),
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
        }
        
        print(f"\n🎵 Downloading: {youtube_url}")
        print(f"📁 Saving to: {output_path}")
        print("\nDownloading...")
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([youtube_url])
        
        print(f"\n✅ Success! Saved as: {output_path}")
        print("💡 Note: This is the full audio. You can trim it manually if needed.")
        return True
        
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
        return False

def main():
    """Main function - interactive mode"""
    print("=" * 60)
    print("🎵 YouTube to MP3 Converter")
    print("=" * 60)
    
    # Check dependencies
    if not check_dependencies():
        sys.exit(1)
    
    # Create audio directory if it doesn't exist
    if not os.path.exists('audio'):
        os.makedirs('audio')
        print("\n✓ Created 'audio' directory")
    
    print("\n" + "=" * 60)
    print("Enter YouTube URLs and filenames for each song")
    print("Press Enter with empty URL when done")
    print("=" * 60 + "\n")
    
    successful = 0
    failed = 0
    
    while True:
        # Get YouTube URL
        url = input("\nYouTube URL (or press Enter to finish): ").strip()
        if not url:
            break
        
        # Get output filename
        filename = input("Save as (e.g., awaara-hoon.mp3): ").strip()
        if not filename:
            print("❌ Filename cannot be empty!")
            continue
        
        # Ensure .mp3 extension
        if not filename.endswith('.mp3'):
            filename += '.mp3'
        
        # Download and convert
        if download_and_convert(url, filename):
            successful += 1
        else:
            failed += 1
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 Summary")
    print("=" * 60)
    print(f"✅ Successful: {successful}")
    print(f"❌ Failed: {failed}")
    print(f"📁 Files saved in: audio/")
    print("\n💡 Tip: Full audio was downloaded. You can use Audacity or")
    print("   online tools to trim to 2 minutes if files are too large.")
    print("\nYou can now use these files in the Tune Challenge!")

if __name__ == "__main__":
    main()
