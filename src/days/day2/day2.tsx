import { Fragment } from "react/jsx-runtime";
import { Icon, LoveRain } from "../../components/components";
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
    <Fragment>
      <h2>¿Sabes qué es lo que más me gusta de ti?</h2>
      
      <p>Presiona el botón para descubrirlo</p>
      
      <button onClick={() => setRainKey(prev => prev + 1)}>
        <span>Descubrir</span>
        <Icon iconName={ICONS.RIGHT} />
      </button>
      
      <LoveRain
        key={rainKey}
        items={loveItems}
        amount={20}
        active={rainKey > 0}
      />
    </Fragment>
  );
};