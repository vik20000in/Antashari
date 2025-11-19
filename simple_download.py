"""
YouTube Audio Downloader - Simple Version (No ffmpeg needed)
Downloads audio in original format (m4a/webm) and renames to .mp3

This works without ffmpeg installation!

Requirements:
    pip install yt-dlp

Usage:
    python simple_download.py
"""

import os
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

def download_audio(youtube_url, output_filename):
    """
    Download YouTube audio (no conversion, just raw audio)
    
    Args:
        youtube_url: YouTube video URL
        output_filename: Output filename
    """
    try:
        import yt_dlp
        
        # Create output path in audio folder
        output_path = os.path.join('audio', output_filename)
        base_path = output_path.rsplit('.', 1)[0]  # Remove extension
        
        # Simple options - just download best audio, no conversion
        ydl_opts = {
            'format': 'bestaudio',
            'outtmpl': base_path + '.%(ext)s',
        }
        
        print(f"\n🎵 Downloading: {youtube_url}")
        print(f"📁 Saving to: audio/")
        print("⏳ Please wait...")
        
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            info = ydl.extract_info(youtube_url, download=True)
            ext = info.get('ext', 'unknown')
            downloaded_file = f"{base_path}.{ext}"
        
        # Rename to .mp3 (browsers can play m4a/webm too)
        if os.path.exists(downloaded_file):
            final_path = base_path + '.mp3'
            if os.path.exists(final_path):
                os.remove(final_path)
            os.rename(downloaded_file, final_path)
            print(f"\n✅ Success! Saved as: {final_path}")
            print(f"💡 Original format was .{ext}, renamed to .mp3")
            print("   (HTML5 audio player will handle it fine)")
            return True
        else:
            print(f"\n❌ Download failed - file not found")
            return False
        
    except Exception as e:
        print(f"\n❌ Error: {str(e)}")
        return False

def main():
    """Main function"""
    print("=" * 60)
    print("🎵 YouTube Audio Downloader (No ffmpeg needed!)")
    print("=" * 60)
    
    # Check dependencies
    if not check_dependencies():
        sys.exit(1)
    
    # Create audio directory
    if not os.path.exists('audio'):
        os.makedirs('audio')
        print("\n✓ Created 'audio' directory")
    
    print("\n" + "=" * 60)
    print("Enter YouTube URLs and filenames")
    print("Press Enter with empty URL when done")
    print("=" * 60 + "\n")
    
    successful = 0
    failed = 0
    
    while True:
        # Get YouTube URL
        url = input("\nYouTube URL (or Enter to finish): ").strip()
        if not url:
            break
        
        # Get filename
        filename = input("Save as (e.g., awaara-hoon.mp3): ").strip()
        if not filename:
            print("❌ Filename cannot be empty!")
            continue
        
        if not filename.endswith('.mp3'):
            filename += '.mp3'
        
        # Download
        if download_audio(url, filename):
            successful += 1
        else:
            failed += 1
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 Summary")
    print("=" * 60)
    print(f"✅ Successful: {successful}")
    print(f"❌ Failed: {failed}")
    print(f"📁 Location: audio/")
    print("\n✨ Files are ready to use in Tune Challenge!")

if __name__ == "__main__":
    main()
