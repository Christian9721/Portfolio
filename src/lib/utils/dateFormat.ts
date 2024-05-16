import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (
  date: Date | string,
  format: string = "dd MMM, yyyy",
): string => {
  return formatInTimeZone(date, "America/New_York", format);
};

/*
declare namespace Intl {
  class ListFormat {
    constructor(locales?: string | string[], options?: Intl.ListFormatOptions);
    public format: (items: string[]) => string;
  }
}*/

export const dateDiffToString = (date1: Date, date2: Date) => {
  const millisecondsDiff = Math.abs(date2.getTime() - date1.getTime());

  const seconds = Math.floor(millisecondsDiff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30.44);
  const years = Math.floor(months / 12);

  const result = [];

  if (years > 0) {
    result.push(`${years} years`);
  }
  if (months > 0) {
    result.push(`${months % 12} mth`);
  }
  if (weeks > 0) {
    result.push(`${weeks % 4} wk`);
  }
  if (days > 0) {
    result.push(`${days % 7} d`);
  }
  if (hours > 0) {
    result.push(`${hours % 24} hr`);
  }
  if (minutes > 0) {
    result.push(`${minutes % 60} min`);
  }
  if (seconds > 0) {
    result.push(`${seconds % 60} s`);
  }
  /*const formatter = new Intl.ListFormat("en", {
    style: "long",
    type: "conjunction",
  });*/

  return result;
};

export default dateFormat;
