import { Eyebrow } from "../components.tsx";

interface HeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const Heading = ({eyebrow, title, description}: HeadingProps) => {
  return (
      <div className = "heading">
        <Eyebrow text = {eyebrow} accent/>
        <h2 className = "heading__title">{title}</h2>
        { description && <p className = "heading__description">{description}</p> }
      </div>
  );
};