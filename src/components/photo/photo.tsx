interface PhotoProps {
  imageName: string;
  eyebrow: string;
  description: string;
  index: number;
}

export const Photo = ({imageName, eyebrow, description, index}: PhotoProps) => {
  return (
    <button className = {`photo i-${index}`}>
      
      <img src = {`./photos/${imageName}.jpg`} alt = {description} />
      
      <div className = "over">
        <span>{eyebrow}</span>
        <p>{description}</p>
      </div>
      
    </button>
  );
};