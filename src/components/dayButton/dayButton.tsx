import { Icon } from "../components";
import { animationPress } from "../../core/animations";

interface DayButtonProps {
  children: React.ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
  iconName?: string;
  subtle?: boolean;
  onClick: () => unknown;
}

export const DayButton = ({children, ref, iconName, subtle = false, onClick}: DayButtonProps) => {
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    animationPress(e.currentTarget);
    onClick();
  };
  
  return (
    <button
      ref = {ref}
      className = {`day-button ${subtle ? "day-button--subtle" : "day-button--accent"}`}
      onClick = {(e) => handleClick(e)}
    >
      <span className = "day-button__text">{children}</span>
      
      {
        iconName &&
        <Icon iconName = {iconName}></Icon>
      }
    </button>
  );
};