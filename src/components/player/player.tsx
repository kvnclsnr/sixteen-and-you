import { useRef, useState } from "react";
import { Icon } from "../components";

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [ isPlaying, setIsPlaying ] = useState<boolean>(false);
  const [ duration, setDuration ] = useState<number>(0);
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  
  const progress = currentTime > 0
  ? (currentTime / duration) * 100
  : 0;
  
  const togglePlay = () => {
    const audio = audioRef.current;
    
    if (!audio) return;
    
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    }
    
    else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  
  return (
    <div>
      <img className = "player-image" src = "" alt = "" />
      
      <div className = "player-info">
        <h3>Title</h3>
        <span>Artist/s</span>
      </div>
      
      <audio
        ref = {audioRef}
        src = "./src/assets/audios/FEEL_ME.mp3"
        onLoadedMetadata = {() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate = {() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onEnded = {() => {
          setIsPlaying(false);
        }}
      />
      
      <input
        className = "player-slider"
        type = "range"
        min = {0}
        max = {duration}
        value = {currentTime}
        onChange = {(e) => {
          const time = Number(e.currentTarget.value);
          
          if (audioRef.current) {
            audioRef.current.currentTime = time;
          }
          
          setCurrentTime(time);
        }}
        style = {{
          background: `linear-gradient(
              to right,
              var(--accent) ${progress}%,
              var(--text-subtle) ${progress}%
          )`
        }}
      />
      
      <div className = "player-actions">
        <button>
          <Icon iconName = "prev"/>
        </button>
        <button onClick = {togglePlay}>
          {
            isPlaying
            ? <Icon iconName = "pause"/>
            : <Icon iconName = "play"/>
          }
        </button>
        <button>
          <Icon iconName = "next"/>
        </button>
      </div>
      
    </div>
  );
};