import { Eyebrow } from "../components.tsx";

interface TimeProps {
  number: string;
  unit: string;
}

export const Time = ({number, unit}: TimeProps) => {
  return (
    <div className = "time">
      <strong className = "time__number">{number}</strong>
      <Eyebrow text = {unit}/>
    </div>
  );
};