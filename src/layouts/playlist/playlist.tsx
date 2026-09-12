import { Divider, Eyebrow, Player, Song } from "../../components/components.tsx";

export const Playlist = () => {
  return (
    <section className = "playlist">
      
      <div className = "playlist-header">
        <Eyebrow text = "CANCIONCITAS" accent/>
        <h2>Nuestra playlist</h2>
        <p>Canciones que ahora tienen nuestros nombres</p>
      </div>
      
      <div className = "playlist-wrapper">
        <Player coverName = "us" title = "Te Amo Mucho" artist = "Kevin Celis"/>
        <div className = "list">
          <Song coverName = "us" title = "Te Amo Mucho" artist = "Kevin Celis" duration = {120}/>
          <Divider></Divider>
          <Song coverName = "candles-day" title = "Te Amo Demasiado" artist = "Kevin Celis" duration = {120}/>
          <Divider></Divider>
          <Song coverName = "new-year" title = "Te Amoooooooooo" artist = "Kevin Celis" duration = {120}/>
          <Divider></Divider>
          <Song coverName = "hugs" title = "Te Amo Mucho bb" artist = "Kevin Celis" duration = {120}/>
          <Divider></Divider>
          <Song coverName = "happy" title = "Te Amo Amorcito" artist = "Kevin Celis" duration = {120}/>
        </div>
      </div>
      
    </section>
  );
};