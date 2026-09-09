export const padNumber = (value: number) => {
  const time: string = String(value);
  return time.padStart(2, "0");
};