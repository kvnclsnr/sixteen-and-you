interface DayStrongProps {
  children: React.ReactNode
}

export const DayStrong = ({children}: DayStrongProps) => {
  return (
    <strong className = "day-strong">
      {children}
    </strong>
  );
};