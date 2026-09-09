export const root: HTMLElement = document.documentElement;

// THEMES

interface Themes {
  DARK: string;
  LIGHT: string;
}

export const THEMES: Themes = {
  DARK: "dark",
  LIGHT: "light",
};

// ICONS

interface Icons {
  DARK: string;
  LIGHT: string;
  HEART: string;
  LOCKED: string;
  UNLOCKED: string;
  OPENED: string;
  TODAY: string;
}

export const ICONS: Icons = {
  DARK: "dark",
  LIGHT: "light",
  HEART: "heart",
  LOCKED: "locked",
  UNLOCKED: "unlocked",
  OPENED: "opened",
  TODAY: "today",
};

// STATES

interface CardStates {
  LOCKED: string;
  UNLOCKED: string;
  OPENED: string;
  TODAY: string;
}

export const CARD_STATES: CardStates = {
  LOCKED: "locked",
  UNLOCKED: "unlocked",
  OPENED: "opened",
  TODAY: "today",
};