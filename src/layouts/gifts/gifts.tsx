import { Card, Eyebrow } from "../../components/components.tsx";
import { CARD_STATES } from "../../utils/constants.ts";

export const Gifts = () => {
  const completed: number = 7;
  
  return (
    <section className = "gifts">
      
      <div className = "head">
        <div className = "heading">
          <Eyebrow text = "17 SEP - 2 OCT" accent/>
          <h2>Dieciséis sobres</h2>
        </div>
        
        <div className = "stats">
          
          <div className = "dots">
            {
              [...Array(16)].map((_, index) => (
                <div key = {index} className = {`dot ${index < completed ? "accent" : ""}`}></div>
              ))
            }
          </div>
          
          <div className = "count">
            <div className = "num">
              <strong className = "opened">{completed}</strong>
              <span className = "slash">/</span>
              <strong className = "total">16</strong>
            </div>
            <span className = "tag">DESCUBIERTAS</span>
          </div>
          
        </div>
      </div>
      
      <div className = "grid-cards">
        <Card state = {CARD_STATES.OPENED} index = {0}/>
        <Card state = {CARD_STATES.OPENED} index = {1}/>
        <Card state = {CARD_STATES.OPENED} index = {2}/>
        <Card state = {CARD_STATES.UNLOCKED} index = {3}/>
        <Card state = {CARD_STATES.UNLOCKED} index = {4}/>
        <Card state = {CARD_STATES.TODAY} index = {5}/>
        <Card state = {CARD_STATES.LOCKED} index = {6}/>
        <Card state = {CARD_STATES.LOCKED} index = {7}/>
        <Card state = {CARD_STATES.LOCKED} index = {8}/>
        <Card state = {CARD_STATES.LOCKED} index = {9}/>
        <Card state = {CARD_STATES.LOCKED} index = {10}/>
        <Card state = {CARD_STATES.LOCKED} index = {11}/>
        <Card state = {CARD_STATES.LOCKED} index = {12}/>
        <Card state = {CARD_STATES.LOCKED} index = {13}/>
        <Card state = {CARD_STATES.LOCKED} index = {14}/>
        <Card state = {CARD_STATES.LOCKED} index = {15}/>
      </div>
      
    </section>
  );
};