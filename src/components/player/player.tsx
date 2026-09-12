import { useRef, useState } from "react";
import { Icon } from "../components";
import { ICONS } from "../../utils/constants";

interface PlayerProps {
  coverName: string;
  title: string;
  artist: string;
}

export const Player = ({coverName, title, artist}: PlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [ isPlaying, setIsPlaying ] = useState<boolean>(false);
  const [ duration, setDuration ] = useState<number>(0);
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  
  const [ isSliding, setIsSliding ] = useState<boolean>(false);
  const [ slideValue, setSlideValue ] = useState<number>(0);
  
  const progress = currentTime > 0
  ? ((isSliding ? slideValue : currentTime) / duration) * 100
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
    <div className = "player">
      <img className = "player-image" src = {`./photos/${coverName}.jpg`} alt = {title} />
      
      <div className = "player-info">
        <h3>{title}</h3>
        <span>{artist}</span>
      </div>
      
      <audio
        ref = {audioRef}
        src = "./audios/FEEL_ME.mp3"
        
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
        value = {isSliding ? slideValue : currentTime}
        style = {{
          background: `linear-gradient(
              to right,
              var(--accent) ${progress}%,
              color-mix(in srgb, var(--text) 10%, transparent) ${progress}%
          )`
        }}
        
        onPointerDown = {() => {
          setSlideValue(currentTime);
          setIsSliding(true);
        }}
        
        onPointerUp = {() => {
          const audio = audioRef.current;
          
          if (!audio) return;
          
          audio.currentTime = slideValue;
          setCurrentTime(slideValue);
          setIsSliding(false);
        }}
        
        onChange = {(e) => {
          setSlideValue(Number(e.currentTarget.value));
        }}
      />
      
      <div className = "player-actions">
        <button>
          <Icon iconName = {ICONS.PREV} fill/>
        </button>
        <button className = "" onClick = {togglePlay}>
          {
            isPlaying
            ? <Icon iconName = {ICONS.PAUSE} fill/>
            : <Icon iconName = {ICONS.PLAY} fill/>
          }
        </button>
        <button>
          <Icon iconName = {ICONS.NEXT} fill/>
        </button>
      </div>
      
    </div>
  );
};