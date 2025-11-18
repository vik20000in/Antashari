# GitHub Setup Instructions for Antakshari Project

## 📋 Prerequisites
- GitHub account (create at https://github.com if needed)
- Git installed on your computer
- SSH key configured (optional but recommended)

## 🚀 Step-by-Step Setup

### 1. Create a New Repository on GitHub

1. Go to https://github.com/new
2. Fill in repository name: `antakshari-sur-sanchalak` (or your preferred name)
3. Add description: "Host Mode Web Application for Antakshari Game - 80 Hindi Songs, 5 Game Modes, Real-time Verification"
4. Choose visibility: **Public** (so others can use it) or **Private** (for personal use)
5. Skip "Initialize repository" options (we already have files)
6. Click "Create repository"

### 2. Get Your Repository URL

After creating, GitHub will show you commands. Copy your repository URL, which looks like:
```
https://github.com/YOUR_USERNAME/antakshari-sur-sanchalak.git
```
or (if using SSH):
```
git@github.com:YOUR_USERNAME/antakshari-sur-sanchalak.git
```

### 3. Add Remote and Push (Choose One Option)

#### Option A: Using HTTPS (Easiest)
```powershell
cd "c:\Users\vikra\Documents\Applications\Antashari"
git remote add origin https://github.com/YOUR_USERNAME/antakshari-sur-sanchalak.git
git branch -M main
git push -u origin main
```

When prompted, enter your GitHub username and password (or personal access token).

#### Option B: Using SSH (More Secure)
First, set up SSH key if you haven't:
```powershell
ssh-keygen -t rsa -b 4096 -f "$env:USERPROFILE\.ssh\id_rsa"
```

Then:
```powershell
cd "c:\Users\vikra\Documents\Applications\Antashari"
git remote add origin git@github.com:YOUR_USERNAME/antakshari-sur-sanchalak.git
git branch -M main
git push -u origin main
```

### 4. Verify Push Was Successful

Check your GitHub repository URL in browser - your files should now be visible!

## 🔄 Future Updates

After making changes locally:

```powershell
# Check status
git status

# Stage changes
git add .

# Commit with message
git commit -m "Description of changes"

# Push to GitHub
git push origin main
```

## 📝 Example GitHub Configuration for This Project

```powershell
# Navigate to project
cd "c:\Users\vikra\Documents\Applications\Antashari"

# Set up remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/antakshari-sur-sanchalak.git

# Rename branch to main
git branch -M main

# Push code
git push -u origin main

# Verify remote
git remote -v
```

## 🎯 Next Steps

1. Create repository on GitHub
2. Copy your repository URL
3. Run the commands above with YOUR_USERNAME replaced
4. Push to GitHub
5. Share the repository link with others!

## ❓ Need Help?

- GitHub Docs: https://docs.github.com
- Creating PAT: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
- SSH Setup: https://docs.github.com/en/authentication/connecting-to-github-with-ssh

---

**Your project is ready to go!** 🎵
