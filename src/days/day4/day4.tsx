import { useContext } from "react";
import { DayButton, DayHeading, DayParagraph, DaySection, DayStrong } from "../../components/components";
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
    <DaySection day = {4}>
      
      <DayHeading title = "Un lugar para nuestros recuerdos"></DayHeading>
      
      <DayParagraph>Hay momentos que pasan y ya. Y hay otros que, por cualquier cosa, uno quiere guardar para siempre</DayParagraph>
      
      <DayParagraph>Así que hice un espacio para guardar algunos de los momentos que hemos vivido juntos</DayParagraph>
      
      <DayParagraph>Cada foto guarda una historia, un momento o algo de nosotros que me encanta recordar</DayParagraph>
      
      <DayStrong>{"->"} Psst... toca las fotos</DayStrong>
      
      <DayButton
        iconName = {ICONS.RIGHT}
        onClick = {onClickLetterButton}
      >
        Ver recuerdos
      </DayButton>
      
    </DaySection>
  );
};