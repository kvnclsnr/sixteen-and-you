import { START_DATE } from "./constants";
import { padNumber } from "./helpers";

export const getDateByIndex = (index: number) => {
  const date: Date = new Date(START_DATE);
  
  date.setDate(date.getDate() + index);
  
  const day: string = padNumber(date.getDate());
  const month: string = date
  .toLocaleString("es-CO", {month: "long"})
  .slice(0, 3)
  .toUpperCase();
  
  return `${day} ${month}`;
};