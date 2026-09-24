import { useState } from "react";
import { Heading } from "../../components/components.tsx";
import { SlidableCard } from "../../components/components.tsx";
import { reasonContent } from "../../contents/reasonContent.ts";

const NAME: string = "reasons";

export const Reasons = () => {
  const [ currentReason, setCurrentReason ] = useState<number>(0);
  
  const visibleReasons = [0, 1, 2].map(
    offset => (currentReason + offset) % reasonContent.length
  );
  
  const handleRemoveCard = () => {
    let nextReason: number = currentReason + 1;
    
    if (nextReason >= 16) {
      nextReason = 0;
    }
    
    setCurrentReason(nextReason);
  };
  
  return (
    <section className = {NAME}>
      
      <Heading
        eyebrow = "RAZONES"
        title = "16 razones para amarte"
        description = "Podría darte muchas más, pero hoy quiero dejarte estas"
      />
      
      <div className = {`${NAME}__wrapper`}>
        {
          visibleReasons.map(index => {
            return (
              <SlidableCard
                key = {`Reason-${index}`}
                index = {index}
                draggable = {currentReason === index}
                onRemove = {handleRemoveCard}
              >
                {reasonContent[index]}
              </SlidableCard>
            );
          })
        }
      </div>
      
      <div className = {`${NAME}__progress`}>
        {
          Array.from({length: 16}, (_, index) => (
              <div 
                key = {`ReasonDot-${index}`}
                className = {`
                  ${NAME}__dot
                  ${
                    index <= currentReason ? `${NAME}__dot--active` : ""
                  }
                  ${
                    index === currentReason ? `${NAME}__dot--current` : ""
                  }
                `}
              />
            )
          )
        }
      </div>
      
    </section>
  );
};