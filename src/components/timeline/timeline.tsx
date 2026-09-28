import { useEffect, useRef, useState } from "react";
import { DayStrong, Eyebrow, Icon } from "../components";
import { ICONS } from "../../utils/constants";
import { animationOpacityFadeIn, animationPress } from "../../core/animations";

const NAME: string = "timeline";

type TimelineProps = {
  content: {eyebrow: string, text: string}[]
  lines: number
};

export const Timeline = ({content, lines}: TimelineProps) => {
  const [ time, setTime ] = useState<number>(0);
  
  const textRef = useRef<HTMLParagraphElement | null>(null);
  
  useEffect(() => {
    if (textRef.current === null) return;
    
    animationOpacityFadeIn(textRef.current);
  }, [time]);
  
  const handleTimeClick = (change: number) => {
    const newTime = time + change;
    
    if (newTime < 0) return;
    
    if (newTime >= lines) return;
    
    setTime(newTime);
  };
  
  return (
    <div className = {NAME}>
      
      <div className = {`${NAME}__header`}>
        
        <ul className = {`${NAME}__progress`}>
          
          {
            Array.from({length: 6}).map((_, index) => 
              <li
                key = {`Time-${index + 1}`}
                className = {`
                  ${NAME}__time
                  ${
                    index <= time
                    ? `${NAME}__time--active`
                    : undefined
                  }
                `}
              />
            )
          }
          
        </ul>
        
        <div className = {`${NAME}__actions`}>
          
          <button
            className = {`${NAME}__cta`}
            onClick = {(e) => {
              animationPress(e.currentTarget);
              handleTimeClick(-1);
            }}
          >
            <Icon iconName = {ICONS.TAILNESS_LEFT}/>
          </button>
          
          <Eyebrow text = {content[time].eyebrow} accent/>
          
          <button
            className = {`${NAME}__cta`}
            onClick = {(e) => {
              animationPress(e.currentTarget);
              handleTimeClick(1);
            }}
          >
            <Icon iconName = {ICONS.TAILNESS_RIGHT}/>
          </button>
          
        </div>
        
      </div>
      
      <DayStrong ref = {textRef} className = {`${NAME}__text`}>
        {content[time].text}
      </DayStrong>
      
    </div>
  );
};