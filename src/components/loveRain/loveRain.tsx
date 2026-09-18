import { useState } from "react";
import { createPortal } from "react-dom";

type LoveRainProps = {
  items: string[]
  amount?: number
  active: boolean
}

type RainItem = {
  item: string
  left: string
  animationDelay: string
  animationDuration: string
}

export const LoveRain = ({ items, amount = 30, active }: LoveRainProps) => {
  const [rain] = useState<RainItem[]>(() => {
    return Array.from({ length: amount }, () => ({
      item: items[Math.floor(Math.random() * items.length)],
      left: `${Math.random() * 80}%`,
      animationDelay: `${Math.random() * 1.5}s`,
      animationDuration: `${2 + Math.random() * 2}s`
    }));
  });
  
  if (!active) return null;
  
  return createPortal(
    <div className = "love-rain">
      {rain.map((rainItem, index) => (
        <span
          key = {index}
          className = "love-rain__item"
          style = {{
            left: rainItem.left,
            animationDelay: rainItem.animationDelay,
            animationDuration: rainItem.animationDuration
          }}
        >
          {rainItem.item}
        </span>
      ))}
    </div>,
    document.body
  );
};