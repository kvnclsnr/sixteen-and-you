import { useContext } from "react";
import { DayButton, DayHeading, DayParagraph, DaySection } from "../../components/components";
import { ICONS } from "../../utils/constants";
import { LetterContext } from "../../components/letter/letterContext";

export const Day8 = () => {
  const handleCloseOverlay = useContext<(() => void) | null>(LetterContext);
  
  const onClickLetterButton = () => {
    if (!handleCloseOverlay) return;
    
    handleCloseOverlay();
    
    document.getElementById("playlist-divider")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <DaySection day = {8}>
      
      <DayHeading title = "Te hice una playlist"></DayHeading>
      
      <DayParagraph>A veces una canción dice exactamente eso que uno siente, pero no sabe cómo explicar. Y he encontrando canciones que me hicieron pensar en tí</DayParagraph>
      
      <DayParagraph>Algunas me recuerdan a nosotros, otras a momentos específicos y otras simplemente me hacen pensar en ti</DayParagraph>
      
      <DayParagraph>Y junté algunas de esas canciones en este lugar</DayParagraph>
      
      <DayButton
        iconName = {ICONS.RIGHT}
        onClick = {onClickLetterButton}
      >
        Ver mi playlist
      </DayButton>
      
    </DaySection>
  );
};