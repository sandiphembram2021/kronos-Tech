# GitHub Pages Setup for Kronos OS Demos

To make the demo links work properly, you need to enable GitHub Pages for your repository.

## Steps to Enable GitHub Pages:

### 1. Go to Your Repository Settings
- Navigate to: https://github.com/sandiphembram2021/kronos-operating-system
- Click on "Settings" tab (at the top of the repository)

### 2. Enable GitHub Pages
- Scroll down to "Pages" section in the left sidebar
- Under "Source", select "Deploy from a branch"
- Choose "main" branch
- Select "/ (root)" folder
- Click "Save"

### 3. Wait for Deployment
- GitHub will build and deploy your site
- It may take a few minutes to become available
- You'll get a URL like: `https://sandiphembram2021.github.io/kronos-operating-system/`

### 4. Test the Demos
Once GitHub Pages is enabled, these demo URLs will work:
- Complete Demo: `https://sandiphembram2021.github.io/kronos-operating-system/kronos-complete-demo.html`
- GUI Demo: `https://sandiphembram2021.github.io/kronos-operating-system/kronos-gui-demo.html`
- Terminal Demo: `https://sandiphembram2021.github.io/kronos-operating-system/kronos-terminal-demo.html`
- File Manager Demo: `https://sandiphembram2021.github.io/kronos-operating-system/kronos-file-manager-demo.html`

## Alternative: Local Demo Access

If you prefer not to use GitHub Pages, you can:

1. **Copy demo files to your web folder:**
   ```bash
   cp OS/*.html .
   ```

2. **Update the download page links to point to local files:**
   - Change `https://sandiphembram2021.github.io/...` 
   - To just the filename: `kronos-complete-demo.html`

3. **Serve locally with a web server:**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (if you have http-server installed)
   npx http-server
   ```

## Benefits of GitHub Pages:
- ✅ Free hosting for your demos
- ✅ Automatic updates when you push changes
- ✅ Professional URLs for sharing
- ✅ No need for separate hosting
- ✅ Works with your existing repository

## Current Status:
The download page is configured to use GitHub Pages URLs. Enable GitHub Pages to make all demo links functional.
