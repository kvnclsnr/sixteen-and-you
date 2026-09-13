import { Fragment } from "react/jsx-runtime";
import { formatSeconds } from "../../utils/time";

interface SongProps {
  songID: string;
  title: string;
  artist: string;
  duration: number;
  isActive: boolean;
  onClick: () => void;
}

export const Song = ({songID, title, artist, duration, isActive, onClick}: SongProps) => {
  return (
    <Fragment>
      <button className = {`song ${isActive? "song--active" : ""}`} onClick = {onClick}>
        <img className = "song__cover" src = {`./covers/${songID}.webp`} alt = {title} />
        <div className = "song__info">
          <h3>{title}</h3>
          <span>{artist}</span>
        </div>
        <span className = "song__duration">{formatSeconds(duration)}</span>
      </button>
    </Fragment>
  );
};