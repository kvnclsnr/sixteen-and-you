interface DayParagraphProps {
  children: React.ReactNode
}

export const DayParagraph = ({children}: DayParagraphProps) => {
  return (
    <p className = "day-paragraph">
      {children}
    </p>
  );
};