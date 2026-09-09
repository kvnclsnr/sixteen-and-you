import { CARD_STATES } from "../../utils/constants.ts";
import { padNumber } from "../../utils/time.ts";
import { Icon } from "../components.tsx";

const getDateByIndex = (index: number) => {
  interface StartData {
    DAY: number;
    MONTH: number;
  }
  
  const START: StartData = {
    DAY: 17,
    MONTH: 9,
  };
  
  let result: number = START.DAY + index;
  
  let month: string = "SEP";
  
  if (index > 13) {
    result -= 30;
    month = "OCT";
  }
  
  const day: string = padNumber(result);
  
  return `${day} ${month}`;
};

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

interface CardProps {
  state: string;
  index: number;
}

export const Card = ({state, index}: CardProps) => {
  return (
    <button className = {`card ${state}`}>
      
      {/* HEAD */}
      
      <div className = "card-header">
        
        <div className = "icon-wrapper">
          <Icon iconName = {state}/>
        </div>
        
        <span className = "tag">{getStateText(state)}</span>
        
      </div>
      
      {/* INFO */}
      
      <div className = "card-info">
        
        <span className = "tag">DÍA</span>
        
        <strong className = "num">{padNumber(index + 1)}</strong>
        
        <span className = "day">{getDateByIndex(index)}</span>
        
      </div>
      
      {/* FOOD */}
      
      <div className = "card-footer">
        <span>Ábreme</span>
      </div>
      
    </button>
  );
};