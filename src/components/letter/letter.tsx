import { padNumber } from "../../utils/helpers";
import { getDateByIndex } from "../../utils/time";
import { Eyebrow } from "../components";

interface LetterProps {
  index: number;
}

export const Letter = ({index}: LetterProps) => {
  return (
    <article>
      <div className = "letter-header">
        <Eyebrow text = "A"/>
        <div>
          <span className = "day">{`DÍA ${padNumber(index + 1)}`}</span>
          <div className = "line"></div>
          <span className = "date">{getDateByIndex(index)}</span>
        </div>
      </div>
      
      <div className = "letter-footer">
        
      </div>
      
    </article>
  );
};