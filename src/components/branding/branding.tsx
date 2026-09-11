import { ICONS } from "../../utils/constants.ts";
import { Icon } from "../components.tsx";

export const Branding = () => {
  return (
    <div className = "branding">
      
      {/* LOGO */}
      
      <div className = "logo">
        <Icon iconName = {ICONS.HEART}></Icon>
      </div>
      
      {/* NAME */}
      
      <span className = "name">Sixteen & You</span>
      
    </div>
  );
};