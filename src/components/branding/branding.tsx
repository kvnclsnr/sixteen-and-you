import { ICONS } from "../../utils/constants.ts";
import { Icon } from "../components.tsx";

export const Branding = () => {
  return (
    <div className = "branding">
      
      <div className = "branding__logo">
        <Icon iconName = {ICONS.HEART}></Icon>
      </div>
      
      <span className = "branding__name">Sixteen & You</span>
      
    </div>
  );
};