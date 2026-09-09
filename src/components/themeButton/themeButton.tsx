import { getStorageProperty, setStorageProperty } from "../../services/storage.ts";
import { getOtherTheme } from "../../core/theme.ts";
import { ICONS, root, THEMES } from "../../utils/constants.ts";

import { Icon } from "../components.tsx";

import { useEffect, useState } from "react";

export const ThemeButton = () => {
  const currentTheme: string = getStorageProperty("theme");
  
  const [ theme, setTheme ] = useState(currentTheme);
  
  useEffect(() => {
    setStorageProperty({theme: theme});
    root.dataset.theme = theme;
  }, [theme]);
  
  return (
    <button className = "theme-button" onClick = {
      () => setTheme((prev: string) => getOtherTheme(prev))
    }>
      {
        theme === THEMES.DARK
        ? <Icon iconName = {ICONS.LIGHT}/>
        : <Icon iconName = {ICONS.DARK}/>
      }
    </button>
  );
};