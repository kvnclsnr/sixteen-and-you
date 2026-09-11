export const root: HTMLElement = document.documentElement;

export const START_DATE: Date = new Date("2026-09-17T00:00:00");

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
  RIGHT: string;
}

export const ICONS: Icons = {
  DARK: "dark",
  LIGHT: "light",
  HEART: "heart",
  LOCKED: "locked",
  UNLOCKED: "unlocked",
  OPENED: "opened",
  TODAY: "today",
  RIGHT: "right",
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

// PHOTOS

interface Photos {
  AFTER_SCHOOL: string;
  CANDLES_DAY: string;
  FILTERS: string;
  FIRST_DATE: string;
  FOODS: string;
  HAPPY: string;
  HER_XV: string;
  HER: string;
  HUGS: string;
  NEW_YEAR: string;
  TRIP: string;
  US: string;
}

export const PHOTOS: Photos = {
  AFTER_SCHOOL: "after-school",
  CANDLES_DAY: "candles-day",
  FILTERS: "filters",
  FIRST_DATE: "first-date",
  FOODS: "foods",
  HAPPY: "happy",
  HER_XV: "her-xv",
  HER: "her",
  HUGS: "hugs",
  NEW_YEAR: "new-year",
  TRIP: "trip",
  US: "us",
};