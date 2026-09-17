import { Fragment } from "react";
import { CARD_STATES, ICONS } from "../../utils/constants.ts";
import { Eyebrow, Icon } from "../components.tsx";
import { padNumber } from "../../utils/helpers.ts";
import { getDateByIndex } from "../../utils/time.ts";
import { animationShake } from "../../core/animations.ts";

const getStateText = (state: string) => {
  if (state === CARD_STATES.TODAY) {
    return "HOY";
  }
  
  else if (state === CARD_STATES.UNLOCKED) {
    return "DISPONIBLE";
  }
  
  else if (state === CARD_STATES.OPENED) {
    return "ABIERTO";
  }
  
  return "BLOQUEADO";
};

const getFooterContent = (state: string, iconName: string, title: string) => {
  if (state === CARD_STATES.TODAY) {
    return (
      <Fragment>
        <span>Abre aquí</span>
        <Icon iconName = {ICONS.RIGHT}></Icon>
      </Fragment>
    );
  }
  
  else if (state === CARD_STATES.UNLOCKED) {
    return (
      <Fragment>
        <span>Abre aquí</span>
        <Icon iconName = {ICONS.RIGHT}></Icon>
      </Fragment>
    );
  }
  
  else if (state === CARD_STATES.OPENED) {
    return (
      <Fragment>
        <Icon iconName = {iconName}></Icon>
        <span>{title}</span>
      </Fragment>
    );
  }
  
  return (
    <Fragment>
      <Icon iconName = {ICONS.LOCKED}></Icon>
      <span>Próximamente</span>
    </Fragment>
  );
};

interface CardProps {
  state: string;
  iconName: string;
  title: string;
  index: number;
  isActive: boolean;
  onClick: () => void;
}

export const Card = ({state, iconName, title, index, isActive, onClick}: CardProps) => {
  return (
    <button
      className = {`card card--${state} ${isActive ? "card--active" : ""} card-${index}`}
      onClick = {() => {
        if (state === CARD_STATES.LOCKED) {
          const $card = document.querySelector<HTMLElement>(`.gifts .card.card-${index}`);
          
          if (!$card) return;
          
          animationShake($card);
          
          return;
        };
        
        onClick();
      }}
    >
      
      <div className = "card__header">
        
        <div className = "icon-wrapper">
          <Icon iconName = {state}/>
        </div>
        
        <span className = "card__label">{getStateText(state)}</span>
        
      </div>
      
      <div className = "card__info">
        
        <Eyebrow text = "DÍA"/>
        <strong className = "card__number">{padNumber(index + 1)}</strong>
        <Eyebrow text = {getDateByIndex(index)}/>
        
      </div>
      
      <div className = "card__footer">
        {getFooterContent(state, iconName, title)}
      </div>
      
    </button>
  );
};