import { useState } from "react";
import { Eyebrow, Icon } from "../components";
import { ICONS } from "../../utils/constants";
import { formatSeconds } from "../../utils/time";

interface AudioProps {
  songID: string;
  currentTime: number;
  duration: number;
  isPlaying: boolean;
  onPlay: () => void;
  onSliderEnd: (slideValue: number) => void;
}

export const Audio = ({songID, currentTime, duration, isPlaying, onPlay, onSliderEnd}: AudioProps) => {
  
  const [ isSliding, setIsSliding ] = useState<boolean>(false);
  const [ slideValue, setSlideValue ] = useState<number>(0);
  
  const progress = currentTime > 0
  ? ((isSliding ? slideValue : currentTime) / duration) * 100
  : 0;
  
  return (
    <div className = "audio">
      <img className = "audio__cover" src = {`./covers/${songID}.webp`} alt = "audio" />
      
      <button onClick = {onPlay} className = "audio__button">
        {
          isPlaying
          ? <Icon iconName = {ICONS.PAUSE} fill/>
          : <Icon iconName = {ICONS.PLAY} fill/>
        }
      </button>
      
      <div className = "audio__progress">
        <input
          className = "audio__slider"
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
            onSliderEnd(slideValue);
            setIsSliding(false);
          }}
          
          onChange = {(e) => {
            setSlideValue(Number(e.currentTarget.value));
          }}
        />
        
        <div className = "audio__times">
          <Eyebrow text = {formatSeconds(currentTime)}/>
          <Eyebrow text = {formatSeconds(duration)}/>
        </div>
      </div>
      
    </div>
  );
};