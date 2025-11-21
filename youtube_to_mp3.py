"""
Simple YouTube to MP3 Downloader - Interactive Mode
Usage: python youtube_to_mp3.py

Just enter YouTube video IDs or URLs and download multiple songs!
Press Ctrl+C to exit.
"""

import sys
import os
import subprocess
import re

def extract_video_id(input_str):
    """
    Extract YouTube video ID from various input formats
    
    Args:
        input_str: Can be video ID, full URL, or short URL
        
    Returns:
        Video ID or None if invalid
    """
    input_str = input_str.strip()
    
    # If it's already just a video ID (11 characters, alphanumeric with _ and -)
    if re.match(r'^[A-Za-z0-9_-]{11}$', input_str):
        return input_str
    
    # Extract from full URL: https://www.youtube.com/watch?v=VIDEO_ID
    match = re.search(r'(?:v=|/)([A-Za-z0-9_-]{11})', input_str)
    if match:
        return match.group(1)
    
    # Extract from short URL: https://youtu.be/VIDEO_ID
    match = re.search(r'youtu\.be/([A-Za-z0-9_-]{11})', input_str)
    if match:
        return match.group(1)
    
    return None

def download_youtube_to_mp3(video_id):
    """
    Download a YouTube video as MP3 with best quality
    
    Args:
        video_id: YouTube video ID (11 characters)
    """
    try:
        url = f"https://www.youtube.com/watch?v={video_id}"
        
        # Build yt-dlp command
        cmd = [
            'yt-dlp',
            '--extract-audio',              # Extract audio only
            '--audio-format', 'mp3',        # Convert to MP3
            '--audio-quality', '0',         # Best quality (0 = best, 9 = worst)
            '--embed-thumbnail',            # Embed thumbnail as cover art
            '--add-metadata',               # Add metadata
            '--no-playlist',                # Download single video only
            '-o', '%(title)s.%(ext)s',      # Use video title as filename
            url
        ]
        
        print(f"\n{'=' * 60}")
        print(f"Downloading: {url}")
        print(f"Quality: Best available")
        print(f"{'=' * 60}\n")
        
        # Run yt-dlp
        result = subprocess.run(cmd, check=True)
        
        print(f"\n{'=' * 60}")
        print("✓ SUCCESS! Download complete")
        print(f"{'=' * 60}\n")
        
        return True
        
    except subprocess.CalledProcessError as e:
        print(f"\n{'=' * 60}")
        print(f"❌ Download failed with error code {e.returncode}")
        print(f"{'=' * 60}\n")
        return False
        
    except FileNotFoundError:
        print(f"\n{'=' * 60}")
        print("❌ Error: yt-dlp is not installed or not in PATH")
        print(f"{'=' * 60}")
        print("\nPlease install yt-dlp:")
        print("  pip install yt-dlp")
        print("\nOr download from: https://github.com/yt-dlp/yt-dlp\n")
        return False
        
    except Exception as e:
        print(f"\n{'=' * 60}")
        print(f"❌ Error: {e}")
        print(f"{'=' * 60}\n")
        return False

def main():
    """Main function - Interactive mode"""
    
    print("\n" + "=" * 60)
    print("YouTube to MP3 Downloader - Interactive Mode")
    print("=" * 60)
    print("\nYou can enter:")
    print("  • Video ID (e.g., dQw4w9WgXcQ)")
    print("  • Full URL (e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)")
    print("  • Short URL (e.g., https://youtu.be/dQw4w9WgXcQ)")
    print("\nPress Ctrl+C to exit")
    print("=" * 60)
    
    downloaded = 0
    failed = 0
    
    try:
        while True:
            print()
            user_input = input("Enter YouTube URL or Video ID: ").strip()
            
            if not user_input:
                print("⚠️  Empty input, please enter a URL or video ID")
                continue
            
            # Extract video ID
            video_id = extract_video_id(user_input)
            
            if not video_id:
                print("❌ Invalid YouTube URL or video ID")
                print("   Please enter a valid YouTube video ID or URL")
                continue
            
            # Download
            success = download_youtube_to_mp3(video_id)
            
            if success:
                downloaded += 1
            else:
                failed += 1
            
            print(f"Status: {downloaded} downloaded, {failed} failed")
            
    except KeyboardInterrupt:
        print("\n\n" + "=" * 60)
        print("Download Session Summary")
        print("=" * 60)
        print(f"Downloaded: {downloaded}")
        print(f"Failed: {failed}")
        print(f"Total: {downloaded + failed}")
        print("=" * 60)
        print("\nGoodbye!")
        sys.exit(0)
    
    except EOFError:
        print("\n\n" + "=" * 60)
        print("Download Session Summary")
        print("=" * 60)
        print(f"Downloaded: {downloaded}")
        print(f"Failed: {failed}")
        print(f"Total: {downloaded + failed}")
        print("=" * 60)
        print("\nGoodbye!")
        sys.exit(0)

if __name__ == "__main__":
    main()
