import { Eyebrow, Player } from "../../components/components.tsx";

export const Playlist = () => {
  return (
    <section className = "playlist">
      
      <div className = "playlist-header">
        <Eyebrow text = "CANCIONCITAS" accent/>
        <h2>Nuestra playlist</h2>
        <p>Canciones que ahora tienen nuestros nombres</p>
      </div>
      
      <div className = "playlist-wrapper">
        <Player></Player>
      </div>
      
    </section>
  );
};