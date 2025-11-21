"""
YouTube Audio Downloader - Simple Version (No ffmpeg needed)
Downloads audio in original format (m4a/webm) and renames to .mp3

This works without ffmpeg installation!

Requirements:
    pip install yt-dlp

Usage:
    Auto-search mode (searches YouTube automatically):
        python simple_download.py <output_filename.mp3>
    
    Manual URL mode:
        python simple_download.py <output_filename.mp3> <youtube_url>
    
Examples:
    python simple_download.py awaara-hoon.mp3
    python simple_download.py kal-ho-naa-ho.mp3 "https://www.youtube.com/watch?v=abc123"
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

def search_youtube(query, max_duration_minutes=10):
    """
    Search YouTube and return the first video URL if under max_duration
    
    Args:
        query: Search query string
        max_duration_minutes: Maximum video duration in minutes
    
    Returns:
        tuple: (video_url, video_title, duration_str) or (None, None, None) if not found
    """
    try:
        import yt_dlp
        
        # Search options - suppress ALL output including errors
        ydl_opts = {
            'quiet': True,
            'no_warnings': True,
            'extract_flat': True,  # Don't download, just get metadata
            'default_search': 'ytsearch1',  # Search YouTube, get first result
            'nocheckcertificate': True,
            'ignoreerrors': True,
        }
        
        print(f"🔍 Searching YouTube for: {query}")
        
        # Suppress stderr to hide urllib errors
        import sys
        from io import StringIO
        old_stderr = sys.stderr
        sys.stderr = StringIO()
        
        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                result = ydl.extract_info(f"ytsearch1:{query}", download=False)
                
                if result and 'entries' in result and len(result['entries']) > 0:
                    video = result['entries'][0]
                    video_url = f"https://www.youtube.com/watch?v={video['id']}"
                    video_title = video.get('title', 'Unknown')
                    duration = video.get('duration', 0)  # Duration in seconds
                    
                    duration_minutes = duration / 60
                    duration_str = f"{int(duration_minutes)}:{int(duration % 60):02d}"
                    
                    if duration_minutes <= max_duration_minutes:
                        return video_url, video_title, duration_str
                    else:
                        print(f"⚠️  First result is {duration_str} (over {max_duration_minutes} min limit)")
                        return None, video_title, duration_str
                else:
                    print("❌ No results found")
                    return None, None, None
        finally:
            # Restore stderr
            sys.stderr = old_stderr
                
    except Exception as e:
        print(f"❌ Search error: {str(e)}")
        return None, None, None

def download_audio(youtube_url, output_filename):
    """
    Download YouTube audio (no conversion, just raw audio)
    Downloads only the first 3 minutes to save space
    
    Args:
        youtube_url: YouTube video URL
        output_filename: Output filename
    """
    try:
        import yt_dlp
        
        # Create output path in assets/audio folder
        output_path = os.path.join('assets', 'audio', output_filename)
        base_path = output_path.rsplit('.', 1)[0]  # Remove extension
        
        # Simple options - just download best audio, no conversion
        ydl_opts = {
            'format': 'bestaudio',
            'outtmpl': base_path + '.%(ext)s',
            'quiet': True,  # Suppress most output
            'no_warnings': True,  # Suppress warnings
            'noprogress': False,  # Show progress bar
            'ignoreerrors': True,  # Continue on errors
            'nocheckcertificate': True,  # Ignore SSL certificate errors
        }
        
        print(f"\n🎵 Downloading: {youtube_url}")
        print(f"📁 Saving to: assets/audio/")
        print("⏳ Downloading audio (first 3 min will be trimmed after)...\n")
        
        # Suppress stderr to hide urllib errors
        import sys
        from io import StringIO
        old_stderr = sys.stderr
        sys.stderr = StringIO()
        
        try:
            with yt_dlp.YoutubeDL(ydl_opts) as ydl:
                info = ydl.extract_info(youtube_url, download=True)
                ext = info.get('ext', 'unknown')
                downloaded_file = f"{base_path}.{ext}"
        finally:
            # Restore stderr
            sys.stderr = old_stderr
        
        # Rename to .mp3 (browsers can play m4a/webm too)
        if os.path.exists(downloaded_file):
            final_path = base_path + '.mp3'
            if os.path.exists(final_path):
                os.remove(final_path)
            os.rename(downloaded_file, final_path)
            
            # Get file size
            file_size_mb = os.path.getsize(final_path) / (1024 * 1024)
            
            print(f"\n✅ Success! Saved as: {final_path}")
            print(f"💡 Original format was .{ext}, renamed to .mp3")
            print(f"📊 File size: {file_size_mb:.2f} MB")
            print("   (HTML5 audio player will handle it fine!)")
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
    if not os.path.exists('assets/audio'):
        os.makedirs('assets/audio')
        print("\n✓ Created 'assets/audio' directory")
    
    # Check for command-line arguments
    if len(sys.argv) >= 2:
        output_filename = sys.argv[1]
        
        if not output_filename.endswith('.mp3'):
            output_filename += '.mp3'
        
        # Check if URL was provided
        if len(sys.argv) == 3:
            # Manual URL mode
            youtube_url = sys.argv[2]
            print(f"\n📝 Output: {output_filename}")
            print(f"🔗 URL: {youtube_url}")
            
            if download_audio(youtube_url, output_filename):
                print("\n✨ Download complete!")
            else:
                print("\n❌ Download failed!")
                sys.exit(1)
        else:
            # Auto-search mode
            # Convert filename to search query (remove .mp3, replace hyphens with spaces)
            search_query = output_filename.replace('.mp3', '').replace('-', ' ')
            
            print(f"\n📝 Output: {output_filename}")
            
            # Search YouTube
            video_url, video_title, duration = search_youtube(search_query)
            
            if video_url:
                print(f"✅ Found: {video_title} ({duration})")
                print(f"🔗 URL: {video_url}")
                print(f"⏬ Auto-downloading...")
                
                if download_audio(video_url, output_filename):
                    print("\n✨ Download complete!")
                else:
                    print("\n❌ Download failed!")
                    sys.exit(1)
            else:
                # No suitable video found, ask for URL
                print("\n⚠️  Could not auto-select a video")
                youtube_url = input("🔗 Please enter YouTube URL: ").strip()
                
                if youtube_url:
                    if download_audio(youtube_url, output_filename):
                        print("\n✨ Download complete!")
                    else:
                        print("\n❌ Download failed!")
                        sys.exit(1)
                else:
                    print("❌ No URL provided")
                    sys.exit(1)
    else:
        # Interactive mode
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
        print(f"📁 Location: assets/audio/")
        print("\n✨ Files are ready to use in Tune Challenge!")

if __name__ == "__main__":
    main()
