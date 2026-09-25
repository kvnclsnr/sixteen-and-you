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
  
  LOCKED: string;
  UNLOCKED: string;
  OPENED: string;
  TODAY: string;
  
  PREV: string;
  NEXT: string;
  PAUSE: string;
  PLAY: string;
  
  HEART: string;
  SUNRISE: string;
  ALBUM: string;
  PLAYLIST: string;
  RAIN: string;
  BLINK: string;
  QUIZ: string;
  GET_BACK: string;
  SONG: string;
  CARDS: string;
  HALF: string;
  PRESS: string;
  CAROUSEL: string;
  
  LEFT: string;
  RIGHT: string;
  LEFT_RIGHT: string;
  EXIT: string;
  CHECK: string;
}

export const ICONS: Icons = {
  DARK: "dark",
  LIGHT: "light",
  
  LOCKED: "locked",
  UNLOCKED: "unlocked",
  OPENED: "opened",
  TODAY: "today",
  
  PREV: "prev",
  NEXT: "next",
  PAUSE: "pause",
  PLAY: "play",
  
  HEART: "heart",
  SUNRISE: "sunrise",
  ALBUM: "album",
  PLAYLIST: "playlist",
  RAIN: "rain",
  BLINK: "blink",
  QUIZ: "quiz",
  GET_BACK: "getback",
  SONG: "song",
  CARDS: "cards",
  HALF: "half",
  PRESS: "press",
  CAROUSEL: "carousel",
  
  LEFT: "left",
  RIGHT: "right",
  LEFT_RIGHT: "left-right",
  EXIT: "exit",
  CHECK: "check",
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

// SONGS

interface Songs {
  AQUEL_NAP_ZZZZ: string;
  CAMA_Y_MESA: string;
  MEDIA_LUNA: string;
  TE_QUIERO: string;
}

export const SONGS: Songs = {
  AQUEL_NAP_ZZZZ: "aquel-nap-zzzz",
  CAMA_Y_MESA: "cama-y-mesa",
  MEDIA_LUNA: "media-luna",
  TE_QUIERO: "te-quiero",
};