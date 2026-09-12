import { Fragment } from "react";
import { CARD_STATES, ICONS } from "../../utils/constants.ts";
import { Icon } from "../components.tsx";
import { padNumber } from "../../utils/helpers.ts";
import { getDateByIndex } from "../../utils/time.ts";

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
      className = {`card ${state} ${isActive ? "active" : ""}`}
      onClick = {() => {
        if (state === CARD_STATES.LOCKED) return;
        onClick();
      }}
    >
      
      {/* CARD HEADER */}
      
      <div className = "card-header">
        
        <div className = "icon-wrapper">
          <Icon iconName = {state}/>
        </div>
        
        <span className = "tag">{getStateText(state)}</span>
        
      </div>
      
      {/* CARD INFO */}
      
      <div className = "card-info">
        
        <span className = "tag">DÍA</span>
        <strong className = "num">{padNumber(index + 1)}</strong>
        <span className = "day">{getDateByIndex(index)}</span>
        
      </div>
      
      {/* CARD FOOTER */}
      
      <div className = "card-footer">
        {getFooterContent(state, iconName, title)}
      </div>
      
    </button>
  );
};