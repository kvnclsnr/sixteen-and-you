import { useContext } from "react";
import { DayButton, DayHeading, DayParagraph, DaySection, DayStrong } from "../../components/components";
import { ICONS } from "../../utils/constants";
import { LetterContext } from "../../components/letter/letterContext";

export const Day12 = () => {
  const handleCloseOverlay = useContext<(() => void) | null>(LetterContext);
  
  const onClickLetterButton = () => {
    if (!handleCloseOverlay) return;
    
    handleCloseOverlay();
    
    document.getElementById("reasons-divider")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <DaySection day = {12}>
      
      <DayHeading title = "Intenté escoger solo 16"></DayHeading>
      
      <DayParagraph>Ayer me di cuenta de que podía seguir pensando en cosas sobre ti y no iba a terminar nunca</DayParagraph>
      
      <DayParagraph>Así que pensé que hoy podía intentar hacer algo un poquito más difícil: escoger solo 16 razones por las que te amo</DayParagraph>
      
      <DayStrong>Claramente no son las unicas</DayStrong>
      
      <DayButton
        iconName = {ICONS.RIGHT}
        onClick = {onClickLetterButton}
      >
        Ver razones
      </DayButton>
      
    </DaySection>
  );
};