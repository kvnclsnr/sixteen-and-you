interface DayStrongProps {
  children: React.ReactNode
  ref?: React.Ref<HTMLElement>;
  className?: string;
}

export const DayStrong = ({children, ref, className}: DayStrongProps) => {
  return (
    <strong ref = {ref} className = {`day-strong ${className}`}>
      {children}
    </strong>
  );
};