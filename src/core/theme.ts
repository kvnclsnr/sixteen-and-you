import { setStorageProperty, storage } from "../services/storage.ts";
import { THEMES } from "../utils/constants.ts";

export const setInitialTheme = () => {
  if (storage.theme === null) {
    const userTheme: string = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? THEMES.DARK
    : THEMES.LIGHT;
    
    setStorageProperty({ theme: userTheme });
  }
};

export const getOtherTheme = (theme: string) => {
  return theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
};

export const changeTheme = () => {
  const currentTheme: string = storage.theme;
  setStorageProperty({ theme: getOtherTheme(currentTheme) });
};