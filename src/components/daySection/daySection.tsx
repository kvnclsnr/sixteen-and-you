interface DaySectionProps {
  children: React.ReactNode;
  day: number;
  className?: string | undefined;
}

export const DaySection = ({children, day, className}: DaySectionProps) => {
  return (
    <section className = {`
      day-section
      day-${day}
      ${className
        ? `day-${day}__${className}`
        : undefined
      }
    `}>
      {children}
    </section>
  );
};