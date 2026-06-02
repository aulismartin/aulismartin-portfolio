# Aulis Martin - Music Portfolio

A modern, responsive music portfolio website showcasing music production tracks with an integrated audio player.

## Features

- 🎵 **Audio Player** - Play and manage your music tracks directly from the browser
- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 📱 **Responsive Layout** - Works seamlessly on desktop, tablet, and mobile devices
- 🌙 **Dark Theme** - Eye-friendly dark color scheme inspired by music streaming platforms
- 🎯 **Easy to Customize** - Simple structure to add your own tracks and information

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- A GitHub Pages account (optional for hosting)

### Installation

1. Clone this repository:
```bash
git clone https://github.com/aulismartin/aulismartin-portfolio.git
```

2. Navigate to the project directory:
```bash
cd aulismartin-portfolio
```

3. Open `index.html` in your web browser

## Customization

### Adding Your Tracks

Edit the `tracks` array in `script.js` to add your own music:

```javascript
const tracks = [
    {
        id: 1,
        title: "Your Track Title",
        genre: "Genre",
        description: "Track description",
        audioUrl: "path/to/your/audio.mp3",
        icon: "🎵" // Emoji icon
    },
    // Add more tracks...
];
```

### Updating Contact Information

Edit the contact links in `index.html`:
- Replace `your-email@example.com` with your actual email
- Update social media links with your profiles

### Customizing Colors

Modify the CSS variables in `styles.css` (at the top of the file):

```css
:root {
    --primary-color: #1db954;  /* Main accent color */
    --secondary-color: #191414; /* Dark background */
    --accent-color: #1ed760;    /* Highlight color */
    /* ... other colors ... */
}
```

## Hosting on GitHub Pages

1. Push your code to GitHub:
```bash
git add .
git commit -m "Add music portfolio"
git push origin main
```

2. Go to your repository settings
3. Scroll to "GitHub Pages" section
4. Select `main` branch as the source
5. Your site will be available at `https://aulismartin.github.io/aulismartin-portfolio/`

## File Structure

```
aulismartin-portfolio/
├── index.html       # Main HTML file
├── styles.css       # Styling and layout
├── script.js        # JavaScript functionality
└── README.md        # Documentation
```

## Technologies Used

- HTML5
- CSS3 (with custom properties and animations)
- Vanilla JavaScript (no frameworks required)

## Features Explained

### Responsive Design
The portfolio automatically adapts to different screen sizes using CSS Grid and Flexbox.

### Audio Player
Click the "Play" button on any track card to open the audio player modal with:
- Track title and description
- HTML5 audio controls (play, pause, volume, seek)
- Full-screen capability

### Navigation
Easy navigation to different sections:
- Home: Hero section
- Tracks: Your music production showcase
- About: Information about you
- Contact: Get in touch section

## Tips for Best Results

1. **High-Quality Audio**: Use properly compressed MP3 or WAV files
2. **Custom Icons**: Replace emoji icons with your own or keep them
3. **SEO**: Update the `<title>` and meta tags in `index.html`
4. **Analytics**: Consider adding Google Analytics for tracking visitors
5. **Mobile Testing**: Test on various devices before publishing

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please open an issue in the repository.

---

**Now update your tracks and share your music with the world!** 🎵