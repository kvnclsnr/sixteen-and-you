import { useState } from "react";
import { Card, Eyebrow, Heading, Letter, Overlay } from "../../components/components.tsx";
import { CARD_STATES, START_DATE } from "../../utils/constants.ts";
import { CARD_CONTENT } from "../../contents/cardContent.tsx";
import { getStorageProperty, setStorageProperty } from "../../services/storage.ts";

export const Gifts = () => {
  const now: Date = new Date("2026-10-02T00:00:00");
  
  const dayIndex = Math.min(Math.floor(
    (now.getTime() - START_DATE.getTime()) / 8.64e7
  ), 15);
  
  const [ cardActive, setCardActive ] = useState<number | null>(null);
  const [ isOverlayActive, setIsOverlayActive ] = useState<boolean>(false);
  
  const [ cardsOpened, setCardsOpened ] = useState<number>(
    getStorageProperty("cardsOpened") as number
  );
  
  // FUNCTIONS
  
  const getCardState = (index: number) => {
    let cardState: string = CARD_STATES.LOCKED;
    
    if (index < dayIndex) {
      cardState = CARD_STATES.UNLOCKED;
    }
    
    if (index === dayIndex) {
      cardState = CARD_STATES.TODAY;
    }
    
    if (index < cardsOpened) {
      cardState = CARD_STATES.OPENED;
    }
    
    return cardState;
  };
  
  const handleCardOpen = (index: number) => {
    if (index > cardsOpened) return;
    
    if (index === cardsOpened) {
      const newCardsOpened: number = cardsOpened + 1;
      
      setCardsOpened(newCardsOpened);
      setStorageProperty({cardsOpened: newCardsOpened});
    }
    
    setCardActive(index);
    setIsOverlayActive(true);
  };
  
  const handleOverlayClose = () => {
    setIsOverlayActive(false);
    setCardActive(null);
  };
  
  return (
    <section className = "gifts">
      
      <div className = "gifts__header">
        
        <Heading
          eyebrow = "17 SEP - 2 OCT"
          title = "Dieciséis sobres"
        />
        
        <div className = "gifts__stats">
          
          <div className = "gifts__progress">
            {
              [...Array(16)].map((_, index) => (
                <div
                  key = {`Dot-${index + 1}`}
                  className = {`gifts__dot ${index < cardsOpened ? "gifts__dot--accent" : ""}`}
                />
              ))
            }
          </div>
          
          <div className = "gifts__counter">
            
            <div className = "gifts__number">
              
              <strong className = "opened">{cardsOpened}</strong>
              <span className = "slash">/</span>
              <strong className = "total">16</strong>
              
            </div>
            
            <Eyebrow text = "DESCUBIERTAS"/>
            
          </div>
          
        </div>
        
      </div>
      
      <div className = "gifts__grid">
        {
          CARD_CONTENT.map(({title, iconName}, index) => {
            
            const cardState = getCardState(index);
            
            return (
              <Card
                key = {`Day-${index + 1}`}
                state = {cardState}
                title = {title}
                iconName = {iconName}
                index = {index}
                isActive = {cardActive === index}
                onClick = {() => handleCardOpen(index)}
              />
            );
          })
        }
      </div>
      
      <Overlay isActive = {isOverlayActive} onClose = {handleOverlayClose} >
        {
          cardActive !== null &&
          <Letter
            index = {cardActive}
            title = {CARD_CONTENT[cardActive].title}
            iconName = {CARD_CONTENT[cardActive].iconName}
            onClose = {handleOverlayClose}
          >
            {null}
          </Letter>
        }
      </Overlay>
      
    </section>
  );
};