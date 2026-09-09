interface IconProps {
  iconName: string;
}

export const Icon = ({ iconName }: IconProps) => {
  return (
    <svg className = "icon">
      <use href = {`./icons/sprite.svg#icon-${iconName}`}></use>
    </svg>
  );
};
