import { useRef, useState } from "react";
import { DayHeading, DayParagraph, DaySection } from "../../components/components";
import { setStorageProperty, storage } from "../../services/storage";
import { addLoveCounter } from "../../services/supabase";
import { animationPress } from "../../core/animations";

export const Day10 = () => {
  const buttonRef = useRef(null);
  
  const [ loveCounter, setLoveCounter ] = useState(storage.loveCounter);
  
  const handleLoveButton = async () => {
    if (buttonRef.current === null) return;
    
    animationPress(buttonRef.current);
    
    const newCounter = loveCounter + 1;
    
    setLoveCounter(newCounter);
    setStorageProperty({loveCounter: newCounter});
    
    if (!storage.user) return;
    
    await addLoveCounter(storage.user);
  };
  
  return (
    <DaySection day = {10}>
      
      <DayHeading
        title = "Hoy te toca a ti"
      />
      
      <DayParagraph>Hay algo que siempre me gusta escuchar de ti, así que esta vez pensé que fueras tú la que me diera el regalo</DayParagraph>
      
      <DayParagraph>Puedo ver todos los "TE AMO" que me mandes</DayParagraph>
      
      <button
        ref = {buttonRef}
        className = "day-10__love-button"
        onClick = {handleLoveButton}>
        TE AMO
      </button>
      
      <span className = "day-10__footer-text">
        HAS MANDADO
        <span className = "day-10__counter">
          {loveCounter}
        </span>
        <span className = "day-10__ly">
          "TE AMO"
        </span>
      </span>
      
    </DaySection>
  );
};