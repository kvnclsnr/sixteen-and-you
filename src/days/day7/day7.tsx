import { useRef, useState } from "react";
import { Audio, DayHeading, DayParagraph, DaySection, DayStrong, Eyebrow } from "../../components/components";

export const Day7 = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const [ isPlaying, setIsPlaying ] = useState<boolean>(false);
  const [ currentTime, setCurrentTime ] = useState<number>(0);
  
  const handleOnTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
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
  };
  
  const handleOnSliderEnd = (slideValue: number): void => {
    const audio = audioRef.current;
    
    if (!audio) return;
    
    audio.currentTime = slideValue;
    setCurrentTime(slideValue);
  };
  
  const handleSongEnded = () => {
    const audio = audioRef.current;
    
    if (!audio) return;
    
    audio.currentTime = 0;
    setCurrentTime(0);
    
    setIsPlaying(false);
  };
  
  return (
    <DaySection day = {7}>
      
      <DayHeading
        title = "Esto me recuerda a ti"
      />
      
      <audio
        ref = {audioRef}
        src = {`./audios/cosas-que-no-te-dije.mp3`}
        onTimeUpdate = {handleOnTimeUpdate}
        onEnded = {handleSongEnded}
      />
      
      <Audio
        songID = "cosas-que-no-te-dije"
        currentTime = {currentTime}
        duration = {225}
        isPlaying = {isPlaying}
        onPlay = {togglePlay}
        onSliderEnd = {handleOnSliderEnd}
      />
      
      <DayStrong>Cosas Que No Te Dije - Saiko</DayStrong>
      
      <DayParagraph>Esta canción me lleva a un tiempo muy lindo: cuando tú y yo apenas nos estábamos empezando a conocer</DayParagraph>
      
      <DayParagraph>A esos días en los que todavía no sabíamos todo lo que iba a pasar, pero poco a poco nos acercabamos y conociamos más</DayParagraph>
      
      <DayParagraph>Por eso, cada vez que escucho esta canción, me devuelvo a esos días</DayParagraph>
      
      <DayParagraph>Vuelvo a cuando todo estaba empezando</DayParagraph>
      
      <DayParagraph>Y creo que eso es lo que más me gusta, que no solamente me recuerda a ti, también me recuerda a nosotros cuando todavía estábamos descubriendo qué íbamos a llegar a ser</DayParagraph>
      
      <Eyebrow text = "OJITO MAÑANA =)" accent></Eyebrow>
      
    </DaySection>
  );
};