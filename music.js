// Initialize variables
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progress = document.getElementById('progress');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

const songs = [
    { title: "Cocorononaca", artist: "Radwimps", file: "Radwimps Cocorononaca.mp3" },
    { title: "Nekojarashi", artist: "Radwimps", file: "Radwimps Nekojarashi.mp3" },
    { title: "Last Love Letter", artist: "Yojiro Noda", file: "Yojiro Noda Last Love Letter.mp3" },
    { title: "Gesture of the Waves", artist: "Yojiro Noda", file: "Yojiro Noda Gesture of the waves.mp3" },
    { title: "Ms Phenomenal", artist: "Radwimps", file: "Radwimps Ms Phenomenal.mp3" },

];

let currentSongIndex = 0;

// Update song information and audio source
function updateSong() {
    const song = songs[currentSongIndex];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    audioPlayer.src = song.file;
    audioPlayer.load();
}

// Play or pause the music
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.textContent = 'Pause';
    } else {
        audioPlayer.pause();    
        playBtn.textContent = 'Play';
    }
}

// Skip to the next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
    audioPlayer.play();
    playBtn.textContent = 'Pause';
}

// Skip to the previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSong();
    audioPlayer.play();
    playBtn.textContent = 'Pause';
}

// Update progress bar as the song plays
audioPlayer.addEventListener('timeupdate', () => {
    const progressValue = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.value = progressValue;
});

// Change song position based on progress bar
progress.addEventListener('input', () => {
    const value = progress.value;
    const newTime = (audioPlayer.duration * value) / 100;
    audioPlayer.currentTime = newTime;
});

//add event listener to play button
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

//add event listener to play button
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Auto next song when current song ends
audioPlayer.addEventListener('ended', nextSong);