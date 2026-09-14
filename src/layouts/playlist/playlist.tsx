import { Fragment } from "react/jsx-runtime";
import { Divider, Heading, Player, Song } from "../../components/components.tsx";
import { SONG_CONTENT } from "../../contents/songContent.tsx";
import { useEffect, useRef, useState } from "react";

export const Playlist = () => {
  // REF
  
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // STATES
  
  const [ songActive, setSongActive ] = useState<number | null>(null);
  const [ isPlaying, setIsPlaying ] = useState<boolean>(false);
  
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  
  // EFFECT
  
  useEffect(() => {
    const audio = audioRef.current;
    
    if (!audio) return;
    
    audio.currentTime = 0;
    setCurrentTime(0);
    
    if (isPlaying) {
      audio.play();
    }
  }, [songActive]);
  
  // VARIABLES
  
  const song = SONG_CONTENT[songActive ?? 0];
  
  // FUNCTIONS
  
  const handleOnTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  
  const handleSongClick = (index: number) => {
    setSongActive(index);
  };
  
  const handleSongEnded = () => {
    let nextSong: number = 0;
    
    if (songActive !== null) {
      nextSong = songActive + 1;
    }
    
    if (nextSong >= SONG_CONTENT.length) {
      nextSong = 0;
      setIsPlaying(false);
    }
    
    setSongActive(nextSong);
  };
  
  const handlePrevSong = () => {
    let prevSong: number = (songActive ?? 0) - 1;
    
    if (prevSong < 0) {
      prevSong = SONG_CONTENT.length - 1;
    }
    
    setSongActive(prevSong);
  };
  
  const handleNextSong = () => {
    let nextSong: number = (songActive ?? 0) + 1;
    
    if (nextSong >= SONG_CONTENT.length) {
      nextSong = 0;
    }
    
    setSongActive(nextSong);
  };
  
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
    
    if (songActive === null) {
      setSongActive(0);
    }
  };
  
  const handleOnSlideEnd = (slideValue: number): void => {
    const audio = audioRef.current;
    
    if (!audio) return;
    
    audio.currentTime = slideValue;
    setCurrentTime(slideValue);
  };
  
  // RENDER
  
  return (
    <section className = "playlist">
      
      <Heading
        eyebrow = "CANCIONCITAS"
        title = "Tu playlist"
        description = "Canciones que tienen tu nombre y apellido"
      />
      
      <div className = "playlist-wrapper">
        
        <audio
          ref = {audioRef}
          src = {`./audios/${song.songID}.mp3`}
          onTimeUpdate = {handleOnTimeUpdate}
          onEnded = {handleSongEnded}
        />
        
        <Player
          songID = {song.songID}
          title = {song.title}
          artist = {song.artist}
          currentTime = {currentTime}
          duration = {song.duration}
          isPlaying = {isPlaying}
          onPlay = {togglePlay}
          onPrev = {handlePrevSong}
          onNext = {handleNextSong}
          onSlideEnd = {handleOnSlideEnd}
        />
        
        <div className = "list">
          {
            SONG_CONTENT.map(({songID, title, artist, duration}, index) => {
              return (
                <Fragment key = {`Song-${index + 1}`}>
                  {
                    index !== 0 &&
                    <Divider></Divider>
                  }
                  
                  <Song
                    songID = {songID}
                    title = {title}
                    artist = {artist}
                    duration = {duration}
                    isActive = {songActive === index}
                    onClick = {() => handleSongClick(index)}
                  />
                  
                </Fragment>
              );
            })
          }
        </div>
        
      </div>
      
    </section>
  );
};