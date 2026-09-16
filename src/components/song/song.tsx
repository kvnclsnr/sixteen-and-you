import { Fragment } from "react/jsx-runtime";
import { formatSeconds } from "../../utils/time";

interface SongProps {
  songID: string;
  title: string;
  artist: string;
  duration: number;
  isActive: boolean;
  isPlaying: boolean;
  onClick: () => void;
}

export const Song = ({songID, title, artist, duration, isActive, isPlaying, onClick}: SongProps) => {
  return (
    <Fragment>
      <button className = {`song ${isActive? "song--active" : ""}`} onClick = {onClick}>
        
        <div className = "song__cover">
          <img className = "song__image" src = {`./covers/${songID}.webp`} alt = {title} />
          
          <div className = {`song__playing ${isPlaying ? "song__playing--active" : ""}`}>
            <div className = "item item--1"></div>
            <div className = "item item--2"></div>
            <div className = "item item--3"></div>
          </div>
        </div>
        
        <div className = "song__info">
          <h3>{title}</h3>
          <span>{artist}</span>
        </div>
        
        <span className = "song__duration">{formatSeconds(duration)}</span>
        
      </button>
    </Fragment>
  );
};