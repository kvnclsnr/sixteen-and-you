import { useContext } from "react";
import { DayButton, DayHeading, DayParagraph, DaySection } from "../../components/components";
import { LetterContext } from "../../components/letter/letterContext";
import { ICONS } from "../../utils/constants";

export const Day16 = () => {
  const handleCloseOverlay = useContext<(() => void) | null>(LetterContext);
  
  const onClickLetterButton = () => {
    if (!handleCloseOverlay) return;
    
    handleCloseOverlay();
    
    document.getElementById("letter-divider")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  
  return (
    <DaySection day = {16}>
      
      <DayHeading
        title = "Hoy es tu día!"
        description = "Y tengo algo que decirte..."
      />
      
      <DayParagraph>
        Después de estos 16 días, quería terminar con algo mucho más personal
      </DayParagraph>
      
      <DayButton
        iconName = {ICONS.RIGHT}
        onClick = {onClickLetterButton}
      >
        Ir a ver
      </DayButton>
      
    </DaySection>
  );
};
