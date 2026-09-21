import { DayParagraph } from "../components";

interface DayHeadingProps {
  title: string;
  description?: string;
}

export const DayHeading = ({title, description}: DayHeadingProps) => {
  return (
      <div className = "day-heading">
        <h2 className = "day-heading__title">{title}</h2>
        {
          description &&
          <DayParagraph>{description}</DayParagraph>
        }
      </div>
  );
};