// Tracks data with Spotify links
const tracks = [
    {
        id: 1,
        title: "Midnight Dreams",
        artist: "Aulis Martin",
        genre: "Lo-Fi Hip Hop",
        description: "A smooth and relaxing beat perfect for studying or late-night sessions.",
        audioUrl: "#",
        spotifyUrl: "https://open.spotify.com/playlist/5NVNP2DgG7Tjtxta3R3V65",
        icon: "🎧"
    },
    {
        id: 2,
        title: "Electric Vibes",
        artist: "Aulis Martin",
        genre: "Electronic",
        description: "High-energy electronic track with dynamic synths and powerful bass.",
        audioUrl: "#",
        spotifyUrl: "https://open.spotify.com/playlist/5NVNP2DgG7Tjtxta3R3V65",
        icon: "⚡"
    },
    {
        id: 3,
        title: "Ambient Flow",
        artist: "Aulis Martin",
        genre: "Ambient",
        description: "Atmospheric and meditative soundscape for relaxation and focus.",
        audioUrl: "#",
        spotifyUrl: "https://open.spotify.com/playlist/5NVNP2DgG7Tjtxta3R3V65",
        icon: "🌊"
    },
    {
        id: 4,
        title: "Urban Rhythm",
        artist: "Aulis Martin",
        genre: "Hip Hop",
        description: "Contemporary hip-hop beat with crisp drums and modern production.",
        audioUrl: "#",
        spotifyUrl: "https://open.spotify.com/playlist/5NVNP2DgG7Tjtxta3R3V65",
        icon: "🎤"
    },
    {
        id: 5,
        title: "Sunset Melody",
        artist: "Aulis Martin",
        genre: "Chillwave",
        description: "Smooth and mellow track perfect for unwinding after a long day.",
        audioUrl: "#",
        spotifyUrl: "https://open.spotify.com/playlist/5NVNP2DgG7Tjtxta3R3V65",
        icon: "🌅"
    },
    {
        id: 6,
        title: "Cosmic Journey",
        artist: "Aulis Martin",
        genre: "Experimental",
        description: "An experimental piece blending organic and electronic elements.",
        audioUrl: "#",
        spotifyUrl: "https://open.spotify.com/playlist/5NVNP2DgG7Tjtxta3R3V65",
        icon: "🚀"
    }
];

// DOM Elements
const tracksGrid = document.getElementById('tracksGrid');
const playerModal = document.getElementById('playerModal');
const audioPlayer = document.getElementById('audioPlayer');
const playerTitle = document.getElementById('playerTitle');
const playerDesc = document.getElementById('playerDesc');
const closeBtn = document.querySelector('.close-btn');

// Load tracks on page load
document.addEventListener('DOMContentLoaded', () => {
    renderTracks();
    setupModalControls();
});

// Render tracks to the grid
function renderTracks() {
    tracksGrid.innerHTML = '';
    tracks.forEach(track => {
        const trackCard = document.createElement('div');
        trackCard.className = 'track-card';
        trackCard.innerHTML = `
            <div class="track-icon">${track.icon}</div>
            <h3>${track.title}</h3>
            <p class="artist">${track.artist}</p>
            <p>${track.genre}</p>
            <p style="font-size: 12px; color: #888; margin-bottom: 15px;">${track.description}</p>
            <div class="track-buttons">
                <button class="play-btn" onclick="openPlayer(${track.id})">▶ Play</button>
                <a href="${track.spotifyUrl}" target="_blank" class="spotify-btn">🎵 Spotify</a>
            </div>
        `;
        tracksGrid.appendChild(trackCard);
    });
}

// Open player modal
function openPlayer(trackId) {
    const track = tracks.find(t => t.id === trackId);
    if (!track) return;

    playerTitle.textContent = track.title;
    playerDesc.textContent = track.description;
    audioPlayer.src = track.audioUrl;
    playerModal.style.display = 'block';
}

// Close player modal
function closePlayer() {
    playerModal.style.display = 'none';
    audioPlayer.pause();
}

// Setup modal controls
function setupModalControls() {
    closeBtn.addEventListener('click', closePlayer);
    window.addEventListener('click', (event) => {
        if (event.target === playerModal) {
            closePlayer();
        }
    });
}

// Keyboard shortcut to close modal (ESC key)
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && playerModal.style.display === 'block') {
        closePlayer();
    }
});