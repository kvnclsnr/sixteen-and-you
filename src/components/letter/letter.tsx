import { padNumber } from "../../utils/helpers.ts";
import { getDateByIndex } from "../../utils/time.ts";
import { ICONS } from "../../utils/constants.ts";

import { Eyebrow, Icon } from "../components.tsx";

import type React from "react";

interface LetterProps {
  children: React.ReactNode;
  iconName: string;
  title: string;
  index: number;
  onClose: () => void;
}

export const Letter = ({children, iconName, title, index, onClose}: LetterProps) => {
  return (
    <section className = "letter" onClick = { (event) => event.stopPropagation() }>
      
      <div className = "letter__header">
        
        <div className = "letter__tag">
          <Icon iconName = {iconName}></Icon>
          <Eyebrow text = {title} accent/>
        </div>
        
        <div className = "letter__info">
          <Eyebrow text = {`DÍA ${padNumber(index + 1)}`}/>
          <div className = "letter__line"></div>
          <Eyebrow text = {getDateByIndex(index)}/>
        </div>
        
      </div>
      
      <div className = "letter__content">
        {children}
      </div>
      
      <div className = "letter__footer">
        <div className = "letter__line"></div>
        <Icon iconName = {ICONS.HEART} fill></Icon>
        <div className = "letter__line"></div>
      </div>
      
      <button className = "letter__exit" onClick = {onClose}>
        <Icon iconName = {ICONS.EXIT}></Icon>
      </button>
      
    </section>
  );
};