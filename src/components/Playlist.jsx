import songs from "../media/songs";
import redPlay from "../images/play-red.png";

function Playlist() {
    const playAudio = (songName, songSrc) => {
        let songTitle = document.getElementById('song-title');
        let audio = document.getElementById('audio');
        let playBtn = document.getElementById('play-pause');
        playBtn.style.visibility = "visible";
        audio.src = songSrc;
        audio.play();
        songTitle.innerHTML = songName;
    }
    return ( 
        <div>
            <div id="playlist-container">
                <div id="playlist-head">
                    <p id="playlist-title">My Playlist</p>
                </div>
                <div id="playlist-body">
                    {
                        songs.map((song) =>
                        ( 
                        <div className="playlist-item" key={song.id} src={song.src}>
                            <div className="playlist-song-name">{song.name}</div>
                            <div className="playlist-icon" onClick={() => playAudio(song.name, song.src)}>
                                <img src={redPlay} alt="play icon"/>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>
        </div>
     );
}

export default Playlist;