import { useState } from "react";
import { Icon } from "../components";
import { ICONS } from "../../utils/constants";

interface PlayerProps {
  songID: string;
  title: string;
  artist: string;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  onPlay: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSlideEnd: (slideValue: number) => void;
}

export const Player = ({songID, title, artist, currentTime, duration, isPlaying, onPlay, onPrev, onNext, onSlideEnd}: PlayerProps) => {
  
  const [ isSliding, setIsSliding ] = useState<boolean>(false);
  const [ slideValue, setSlideValue ] = useState<number>(0);
  
  const progress = currentTime > 0
  ? ((isSliding ? slideValue : currentTime) / duration) * 100
  : 0;
  
  return (
    <div className = "player">
      <img className = "player-image" src = {`./covers/${songID}.webp`} alt = {title} />
      
      <div className = "player-info">
        <h3>{title}</h3>
        <span>{artist}</span>
      </div>
      
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
          onSlideEnd(slideValue);
          setIsSliding(false);
        }}
        
        onChange = {(e) => {
          setSlideValue(Number(e.currentTarget.value));
        }}
      />
      
      <div className = "player-actions">
        <button onClick = {onPrev}>
          <Icon iconName = {ICONS.PREV} fill/>
        </button>
        <button onClick = {onPlay}>
          {
            isPlaying
            ? <Icon iconName = {ICONS.PAUSE} fill/>
            : <Icon iconName = {ICONS.PLAY} fill/>
          }
        </button>
        <button onClick = {onNext}>
          <Icon iconName = {ICONS.NEXT} fill/>
        </button>
      </div>
      
    </div>
  );
};