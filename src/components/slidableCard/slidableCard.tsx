import { ICONS } from "../../utils/constants.ts";
import { Eyebrow, Icon } from "../components.tsx";
import { padNumber } from "../../utils/helpers.ts";
import type React from "react";
import { useRef } from "react";
import { animationOpacityFadeOut } from "../../core/animations.ts";

const NAME = "slidable-card";

interface SlidableCardProps {
  children: React.ReactNode
  index: number
  draggable: boolean
  onRemove: () => void
}

export const SlidableCard = ({children, index, draggable, onRemove}: SlidableCardProps) => {
  const start = useRef(0);
  const dragging = useRef(false);
  const drag = useRef(0);
  
  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!draggable) return;
    
    const $card = e.currentTarget;
    
    $card.setPointerCapture(e.pointerId);
    
    dragging.current = true;
    start.current = e.clientX;
    
    $card.style.transition = "none";
  };
  
  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!draggable) return;
    
    if (!dragging.current) return;
    
    const $card = e.currentTarget;
    
    const dx = e.clientX - start.current;
    
    drag.current = dx;
    
    $card.style.transform = `translateX(${dx}px) rotate(${dx * 0.08}deg)`;
  };
  
  const handlePointerUp = async (e: React.PointerEvent<HTMLButtonElement>) => {
    if (!draggable) return;
    
    dragging.current = false;
    start.current = 0;
    
    const $card = e.currentTarget;
    
    if (Math.abs(drag.current) > 100) {
      await animationOpacityFadeOut($card).finished;
      
      $card.style.transform = "";
      $card.style.transition = "";
      drag.current = 0;
      
      onRemove();
      
      return;
    }
    
    $card.style.transition = "transform 0.25s ease";
    $card.style.transform = `translateX(0) rotate(0)`;
  };
  
  return (
    <button
      className = {NAME}
      
      onPointerDown = {(e) => handlePointerDown(e)}
      onPointerMove = {(e) => handlePointerMove(e)}
      onPointerUp = {async (e) => handlePointerUp(e)}
    >
      
      <div className = {`${NAME}__header`}>
        <Eyebrow text = "RAZON" accent/>
        <span className = {`${NAME}__index`}>{padNumber(index + 1)}</span>
      </div>
      
      <p className = {`${NAME}__text`}>
        {children}
      </p>
      
      <div className = {`${NAME}__footer`}>
        <Eyebrow text = "DELIZA PARA LA SIGUIENTE"/>
        <Icon iconName = {ICONS.LEFT_RIGHT}/>
      </div>
      
    </button>
  );
};