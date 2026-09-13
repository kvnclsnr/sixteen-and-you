interface EyebrowProps {
  text: string;
  accent?: boolean;
}

export const Eyebrow = ({text, accent = false}: EyebrowProps) => {
  return (
    <span className = {`eyebrow ${accent ? "eyebrow--accent" : ""}`}>
      { text.toUpperCase() }
    </span>
  );
};