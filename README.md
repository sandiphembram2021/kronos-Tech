# Kronos OS Download Page

A modern, responsive download page for the Kronos OS operating system.

## Features

- **Modern Design**: Clean, professional layout with orange-red color theme
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth animations, hover effects, and dynamic download counter
- **Complete Information**: System requirements, installation guide, and screenshots
- **Accessibility**: Proper semantic HTML and keyboard navigation support

## File Structure

```
kronos-os-web/
├── index.html          # Main HTML page
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript for interactivity
├── screenshots/        # Directory for OS screenshots
│   ├── boot.png       # Boot screen image (add your own)
│   ├── shell.png      # Shell interface image (add your own)
│   └── desktop.png    # Desktop environment image (add your own)
├── downloads/
│   └── kronos-os/
│       └── kronos-v1.0.iso  # Place your ISO file here
└── README.md          # This file
```

## Setup Instructions

1. **Add Screenshots**: Place your actual Kronos OS screenshots in the `screenshots/` directory:
   - `boot.png` - Boot screen
   - `shell.png` - Command shell interface
   - `desktop.png` - Desktop environment

2. **Add ISO File**: Place your `kronos-v1.0.iso` file in the `downloads/kronos-os/` directory

3. **Customize Content**: Edit `index.html` to update any specific information about your OS

4. **Deploy**: Upload all files to your web server

## Features Included

### Hero Section
- Kronos OS logo with rotating gear icon
- Version badge (v1.0)
- Compelling tagline
- Prominent download button
- Dynamic download counter

### System Requirements
- 64-bit CPU (x86_64)
- 512MB RAM or higher
- Legacy BIOS support
- USB bootable

### Installation Guide
- Step-by-step instructions
- Visual step indicators
- Clear, easy-to-follow process

### Downloads Section
- Featured main download with detailed information
- Additional downloads (VirtualBox image, source code, documentation, SDK)
- Previous versions with changelogs
- File verification checksums
- Professional download cards with hover effects

### Screenshots Section
- Three screenshot previews
- Hover effects and animations
- Fallback placeholders if images are missing

### Footer
- Developer credit: Sandip Hembram
- GitHub repository link
- MIT License information
- Contact email

## Customization

### Colors
The main color scheme uses orange-red gradients. To change colors, update the CSS variables in `styles.css`:
- Primary: `#ff4500` (Orange Red)
- Secondary: `#ff6b35` (Light Orange)
- Accent: `#f7931e` (Golden Orange)

### Download Counter
The download counter is currently simulated. To integrate with a real API:
1. Update the `fetchDownloadCount()` function in `script.js`
2. Replace the placeholder API call with your actual endpoint
3. Implement server-side tracking for download events

### Content
All text content can be easily modified in `index.html`. Key sections to customize:
- Hero title and subtitle
- System requirements
- Installation steps
- Footer information

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Performance Features

- Lazy loading for images
- Debounced scroll events
- CSS animations with hardware acceleration
- Optimized font loading
- Responsive images

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## License

This download page template is provided under the MIT License. Feel free to use and modify for your own projects.

## Contact

For questions about this template, contact: info.zancap@gmail.com
