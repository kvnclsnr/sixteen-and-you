import { useContext } from "react";
import { Icon } from "../../components/components";
import { ICONS } from "../../utils/constants";
import { LetterContext } from "../../components/letter/letterContext";

export const Day4 = () => {
  const handleCloseOverlay = useContext<(() => void) | null>(LetterContext);
  
  const onClickLetterButton = () => {
    if (!handleCloseOverlay) return;
    
    handleCloseOverlay();
    
    document.getElementById("album-divider")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <div className = "day-4">
      <h2>Un lugar para nuestros recuerdos</h2>
      
      <p>Hay momentos que pasan y ya. Y hay otros que, por cualquier cosa, uno quiere guardar para siempre</p>
      
      <p>Así que hice un espacio para guardar algunos de los momentos que hemos vivido juntos</p>
      
      <p>Cada foto guarda una historia, un momento o algo de nosotros que me encanta recordar</p>
      
      <strong>-{">"} Psst... toca las fotos</strong>
      
      <button onClick = {onClickLetterButton}>
        <span>Ver recuerdos</span>
        <Icon iconName = {ICONS.RIGHT}/>
      </button>
    </div>
  );
};