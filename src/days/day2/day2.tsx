import { DayButton, DayHeading, DaySection, LoveRain } from "../../components/components";
import { ICONS } from "../../utils/constants";
import { useState } from "react";

export const Day2 = () => {
  const [rainKey, setRainKey] = useState(0);
  
  const loveItems: string[] = [
    "💜",
    "🫶🏻",
    "Tu sonrisa",
    "Tus ojitos",
    "Nuestros momentos juntos",
    "Cómo me haces reír",
    "Tus abrazos",
    "Tus besitos",
    "Tu forma de amarme",
    "Tu forma de ser",
    "Que me haces sentir amado",
    "Que seas tú",
    "Lo mucho que me haces feliz",
    "Que me encantas",
    "💜",
    "🫶🏻",
  ];
  
  return (
    <DaySection day = {2}>
      
      <DayHeading
        title = "¿Sabes qué es lo que más me gusta de ti?"
        description = "Presiona el botón para descubrirlo"
      />
      
      <DayButton
        iconName = {ICONS.RIGHT}
        onClick = {() => setRainKey(prev => prev + 1)}
      >
        Descubrir
      </DayButton>
      
      <LoveRain
        key = {rainKey}
        items = {loveItems}
        amount = {20}
        active = {rainKey > 0}
      />
      
    </DaySection>
  );
};