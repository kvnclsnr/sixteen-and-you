import { ICONS } from "../../utils/constants";
import { DayHeading, Eyebrow, Icon } from "../components";

interface QuizProps {
  index: number;
  prompt: string;
  options: {
    answer: string,
    isCorrect: boolean
  }[];
  optionSelected: number | null;
  onClickOption: (optionIndex: number) => void;
}

export const Quiz = ({index, prompt, options, optionSelected, onClickOption}: QuizProps) => {
  return (
    <article className = "quiz">
      <Eyebrow text = {`PREGUNTA #${index + 1}`} accent/>
      
      <DayHeading
        title = {prompt}
      />
      
      <div className = "quiz__wrapper">
        {
          options.map(({answer}, optionIndex) =>
            <button
              key = {`Option-${optionIndex + 1}`}
              className = {
                `quiz__option ${
                  optionSelected !== null && optionSelected === optionIndex
                  ? "quiz__option--active"
                  : undefined
                }`
              }
              onClick = {() => onClickOption(optionIndex)}
            >
              <div className = "option__icon-wrapper">
                <Icon iconName = {ICONS.CHECK}></Icon>
              </div>
              <span className = "option__answer">{answer}</span>
            </button>
          )
        }
      </div>
    </article>
  );
};