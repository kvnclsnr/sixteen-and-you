import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type LoveRainProps = {
  items: string[]
  amount?: number
  active: boolean
}

export const LoveRain = ({items, amount = 30, active}: LoveRainProps) => {
  
  const [rain, setRain] = useState<string[]>([]);
  
  useEffect(() => {
    
    if (!active) return;
    
    const newRain = Array.from({ length: amount }, () => {
      return items[Math.floor(Math.random() * items.length)];
    });
    
    setRain(newRain);
    
  }, [active, amount, items]);
  
  return createPortal(
    <div className="love-rain">
      {rain.map((item, index) => (
        <span
          key={index}
          className="love-rain__item"
          style={{
            left: `${Math.random() * 80}%`,
            animationDelay: `${Math.random() * 1.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          {item}
        </span>
      ))}
    </div>,
    document.body
  );
};