const audio = document.getElementById('audio');
const title = document.getElementById('song-title');
const duration = document.getElementById('duration');
const playBtn = document.getElementById('play');
const pauseBtn = document.getElementById('pause');
const stopBtn = document.getElementById('stop');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');

// Playlist of songs
const playlist = [
  { title: "Song One", src: "assets/Audio/song1.mp3" },
  { title: "Song Two", src: "assets/Audio/song2.mp3" },
  { title: "Song Three", src: "assets/Audio/song3.mp3" }
];

let currentTrack = 0;

// Load track
function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.src;
  title.textContent = track.title;
  audio.load();
}

loadTrack(currentTrack);

// Play
playBtn.addEventListener('click', () => {
  audio.play();
});

// Pause
pauseBtn.addEventListener('click', () => {
  audio.pause();
});

// Stop
stopBtn.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
});

// Next track
nextBtn.addEventListener('click', () => {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
});

// Previous track
prevBtn.addEventListener('click', () => {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
  audio.play();
});

// Volume
volumeSlider.addEventListener('input', () => {
  audio.volume = volumeSlider.value;
});

// Show duration when metadata is loaded
audio.addEventListener('loadedmetadata', () => {
  duration.textContent = formatTime(audio.duration);
});

// Time formatting
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
