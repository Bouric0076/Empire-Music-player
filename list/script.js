// Sample music data (replace with your actual data)
const musicList = [
    { title: 'empire_cast_love_is_a_drug', artist: 'Jussie_smollett', src: 'assets/music/empire_cast_love_is_a_drug_ft._jussie_smollett_rumor_willis' },
    { title: 'Song 2', artist: 'Artist 2', src: 'path/to/song2.mp3' },
    { title: 'Song 3', artist: 'Artist 3', src: 'path/to/song3.mp3' }
];

// Function to create a list item for each song
function createMusicItem(song) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${song.title} - ${song.artist}</span>
        <button class="play-button" data-src="${song.src}">Play</button>
    `;
    return li;
}

// Function to initialize the music list
function initializeMusicList() {
    const musicListElement = document.getElementById('music-list');
    musicList.forEach(song => {
        const listItem = createMusicItem(song);
        musicListElement.appendChild(listItem);
    });

    // Add event listeners to play buttons
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', () => {
            const audioSrc = button.getAttribute('data-src');
            playMusic(audioSrc);
        });
    });
}

// Function to play music
function playMusic(src) {
    // Replace with your audio player logic
    console.log(`Playing: ${src}`);
}

// Initialize the music list when the page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeMusicList();
});
