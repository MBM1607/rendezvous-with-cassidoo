export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;
export type Day = (typeof DAYS)[number];

export const newYearsDay = (year: number) => DAYS[new Date(year, 0).getDay()] as Day;
