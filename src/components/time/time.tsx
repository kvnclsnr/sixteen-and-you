interface TimeProps {
  number: string;
  unit: string;
}

export const Time = ({number, unit}: TimeProps) => {
  return (
    <div className = "time">
      <strong>{number}</strong>
      <span>{unit}</span>
    </div>
  );
};