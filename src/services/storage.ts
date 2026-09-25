import { THEMES } from "../utils/constants.ts";

interface Storage {
  name: string;
  user: string | null;
  theme: string;
  cardsOpened: number;
  loveCounter: number;
}

export const storage: Storage = {
  name: "SixteenAndYou",
  user: null,
  theme: THEMES.DARK,
  cardsOpened: 0,
  loveCounter: 0,
};

const setLocalStorage = () => {
  localStorage.setItem(storage.name, JSON.stringify(storage));
};

const getLocalStorage = (): Storage | null => {
  const data: string | null = localStorage.getItem(storage.name);
  
  if (data === null) {
    return null;
  }
  
  return JSON.parse(data);
};

export const setStorageProperty = (changes: Partial<Storage>) => {
  Object.assign(storage, changes);
  setLocalStorage();
};

export const getStorageProperty = (property: keyof Storage) => {
  return storage[property];
};

export const loadStorage = () => {
  const data: Storage | null = getLocalStorage();
  
  if (data !== null) {
    Object.assign(storage, data);
  }
};

// setStorageProperty({cardsOpened: 0});