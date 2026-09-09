import { THEMES } from "../utils/constants.ts";

interface Storage {
  name: string;
  theme: string;
}

export const storage: Storage = {
  name: "SixteenAndYou",
  theme: THEMES.LIGHT,
};

const setLocalStorage = () => {
  localStorage.setItem(storage.name, JSON.stringify(storage));
};

const getLocalStorage = () => {
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
  const data: string | null = getLocalStorage();
  
  if (data !== null) {
    Object.assign(storage, data);
  }
};