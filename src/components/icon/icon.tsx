interface IconProps {
  iconName: string;
  fill?: boolean;
}

export const Icon = ({iconName, fill = false}: IconProps) => {
  return (
    <svg className = {`icon ${fill ? "fill" : ""}`}>
      <use href = {`./icons/sprite.svg#icon-${iconName}`}></use>
    </svg>
  );
};
