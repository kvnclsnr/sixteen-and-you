interface SongProps {
  coverName: string;
  title: string;
  artist: string;
  duration: number;
}

export const Song = ({coverName, title, artist, duration}: SongProps) => {
  return (
    <button className = "song">
      <img className = "song-cover" src = {`./photos/${coverName}.jpg`} alt = {title} />
      <div className = "song-info">
        <h3>{title}</h3>
        <span>{artist}</span>
      </div>
      <span className = "song-duration">{duration}</span>
    </button>
  );
};