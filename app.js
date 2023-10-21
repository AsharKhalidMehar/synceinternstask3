
let playlists = [{
    name: "My Playlist",
    songs: [{
        title: "Way Down We Go",
        artist: "KALEO",
        src: "./media/way down we go (instrumental) - kaleo [edit audio].mp3"
    }]

}];

let currentPlaylistIndex = 0;
let currentSongIndex = 0;
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let songTitle = document.getElementById("songTitle");
let artist = document.getElementById("artist");
let playlistItems = document.getElementById("playlistItems");

function updatePlaylistUI() {
    playlistItems.innerHTML = playlists[currentPlaylistIndex].songs.map((song, index) =>
        `<li onclick="selectSong(${index})">${song.title} - ${song.artist}</li>`
    ).join('');
}

function selectSong(index) {
    currentSongIndex = index;
    loadSong();
    playSong();
}

function loadSong() {
    let currentSong = playlists[currentPlaylistIndex].songs[currentSongIndex];
    song.src = currentSong.src;
    songTitle.textContent = currentSong.title;
    artist.textContent = currentSong.artist;
}

function playSong() {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}

function playpause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        playSong();
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500);
}


function playNextSong() {
    if (currentSongIndex < playlists[currentPlaylistIndex].songs.length - 1) {
        currentSongIndex++;
    } else {
        currentSongIndex = 0;
    }
    loadSong();
    playSong();
}

function playPreviousSong() {
    if (currentSongIndex > 0) {
        currentSongIndex--;
    } else {
        currentSongIndex = playlists[currentPlaylistIndex].songs.length - 1;
    }
    loadSong();
    playSong();
}

// Initialize the playlist UI
updatePlaylistUI();
// Load the initial song
loadSong();




