interface PhotoProps {
  imageName: string;
  date: string;
  title: string;
  index: number;
  onClick: () => void;
}

export const Photo = ({imageName, date, title, index, onClick}: PhotoProps) => {
  return (
    <button className = {`photo i-${index}`} onClick = {onClick}>
      
      <img src = {`./photos/${imageName}.webp`} alt = {title} />
      
      <div className = "over">
        <span>{date}</span>
        <p>{title}</p>
      </div>
      
    </button>
  );
};