import { readFile } from "fs/promises.js";

export const UNITS = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
] as const;

export const TENS = [
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
] as const;

export const convertNumberToWords = (number: number): string => {
  if (number < 20) return UNITS[number];
  if (number < 100) {
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    return ones === 0 ? TENS[tens - 2] : `${TENS[tens - 2]} ${UNITS[ones]}`;
  }
  if (number < 1_000) {
    const hundreds = Math.floor(number / 100);
    const tens = number % 100;
    return tens === 0
      ? `${convertNumberToWords(hundreds)} hundred`
      : `${convertNumberToWords(hundreds)} hundred ${convertNumberToWords(tens)}`;
  }
  if (number < 1_000_000) {
    const thousands = Math.floor(number / 1_000);
    const hundreds = number % 1_000;
    return hundreds === 0
      ? `${convertNumberToWords(thousands)} thousand`
      : `${convertNumberToWords(thousands)} thousand ${convertNumberToWords(hundreds)}`;
  }
  if (number < 1_000_000_000) {
    const millions = Math.floor(number / 1_000_000);
    const thousands = number % 1_000_000;
    return thousands === 0
      ? `${convertNumberToWords(millions)} million`
      : `${convertNumberToWords(millions)} million ${convertNumberToWords(thousands)}`;
  }
  if (number < 1_000_000_000_000) {
    const billions = Math.floor(number / 1_000_000_000);
    const millions = number % 1_000_000_000;
    return millions === 0
      ? `${convertNumberToWords(billions)} billion`
      : `${convertNumberToWords(billions)} billion ${convertNumberToWords(millions)}`;
  }
  if (number < 1_000_000_000_000_000) {
    const trillions = Math.floor(number / 1_000_000_000_000);
    const billions = number % 1_000_000_000_000;
    return billions === 0
      ? `${convertNumberToWords(trillions)} trillion`
      : `${convertNumberToWords(trillions)} trillion ${convertNumberToWords(billions)}`;
  }
  return "ITS OVER 9000!";
};

export const sourceCharacterCount = async () => {
  const length = (await readFile(__filename, "utf-8")).length;
  return convertNumberToWords(length);
};
