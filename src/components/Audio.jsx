import play from '../images/play-white.png';
import pause from '../images/pause-white.png';
import mute from '../images/mute.png'
import songs from "../media/songs";
import { useEffect, useState } from 'react';

function Audio() {
    const [totalTime, setTotalTime] = useState("0");
    const [currentTime, setTime] = useState("0:00");

    const playAudio = () => {
        let audio = document.getElementById('audio');
        let min = Math.floor(audio.duration / 60);
        let sec = Math.floor(audio.duration % 60);
        let cSec = 0;
        
        let timer = setInterval(() => {
            let cMin = Math.floor(audio.currentTime / 60);
            if (cSec === 60) {
                cSec = 0;
                setTime(`${cMin}:00`);
            }
            if (cSec < 10) {
                setTime(`${cMin}:0${cSec}`);
            } else {
                setTime(`${cMin}:${cSec}`);
            }
            cSec++;
        }, 1000);

        setTotalTime(`${min}:${sec}`);
        if (audio.currentTime === audio.duration) {
          clearInterval(timer);
        }
    }

    const manageSeek = () => {
        let audio = document.getElementById('audio');
        let seekBar = document.getElementById("seek-bar");
        let totalSec = Math.floor(audio.duration);
        let seekValue =  (seekBar.value / 100) * totalSec;
        audio.play();
        audio.currentTime = seekValue;
    }

    const updateSeekBar = () => {
        let audio = document.getElementById('audio');
        let seekBar = document.getElementById('seek-bar');
        let value = audio.currentTime / audio.duration * 100;
        seekBar.value = value;
    }

    const updateVolume = () => {
        let volume = document.getElementById('volume');
        let audio = document.getElementById('audio');
        audio.volume = volume.value / 100;
    }

    const togglePlay = () => {
        let audio = document.getElementById('audio');
        let playPause = document.getElementById('play-pause-icon');
        if (playPause.src !== pause) {
            playPause.src = pause;
            audio.play();
        } else {
            playPause.src = play;
            audio.pause();
        }
    }
    
    return (
        <div id="audio-container">
            <audio id="audio" onPlaying={playAudio} onTimeUpdate={updateSeekBar}>
                Your device does not support the audio element
            </audio>
            <div style={{height: "200px"}}>
                <p id="now-playing">Now Playing</p>
                <p id="song-title"></p>
                <p id="artist"></p>
            </div>
            <div id="controls-container">
                <div className="icon" id="play-pause" onClick={togglePlay} style={{visibility: "hidden"}}>
                    <img src={pause} alt="play button" id="play-pause-icon"/>
                </div>
                <input id="seek-bar" type="range" defaultValue="0" min="0" max="100" step="0.25" onChange={manageSeek}/>
                <div id="time"><span>{currentTime}</span> / <span>{totalTime}</span></div>
                <div className="icon">
                    <img src={mute} alt="mute icon"/>
                </div>
                <input style={{visibility: "hidden "}} id="volume" type="range" defaultValue="100" min="0" max="100" step="1" onChange={updateVolume}/>
            </div>
        </div>
     );
}

export default Audio;