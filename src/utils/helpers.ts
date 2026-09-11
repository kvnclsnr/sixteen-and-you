export const padNumber = (value: number) => {
  const num: string = String(value);
  return num.padStart(2, "0");
};