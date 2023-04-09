import { convertNumberToWords, sourceCharacterCount } from "./source-character-count";

describe("sourceCharacterCount", () => {
  it("should return the number of chracters in source file", async () => {
    expect(await sourceCharacterCount()).toEqual("two thousand three hundred eighty four");
  });
});

interface NumberToWordTestCase {
  number: number;
  word: string;
}

const NumberToWordTestCases: NumberToWordTestCase[] = [
  {
    number: 0,
    word: "zero",
  },
  {
    number: 1,
    word: "one",
  },
  {
    number: 2,
    word: "two",
  },
  {
    number: 3,
    word: "three",
  },
  {
    number: 4,
    word: "four",
  },
  {
    number: 5,
    word: "five",
  },
  {
    number: 6,
    word: "six",
  },
  {
    number: 7,
    word: "seven",
  },
  {
    number: 8,
    word: "eight",
  },
  {
    number: 9,
    word: "nine",
  },
  {
    number: 10,
    word: "ten",
  },
  {
    number: 11,
    word: "eleven",
  },
  {
    number: 12,
    word: "twelve",
  },
  {
    number: 13,
    word: "thirteen",
  },
  {
    number: 14,
    word: "fourteen",
  },
  {
    number: 15,
    word: "fifteen",
  },
  {
    number: 16,
    word: "sixteen",
  },
  {
    number: 17,
    word: "seventeen",
  },
  {
    number: 18,
    word: "eighteen",
  },
  {
    number: 19,
    word: "nineteen",
  },
  {
    number: 20,
    word: "twenty",
  },
  {
    number: 21,
    word: "twenty one",
  },
  {
    number: 30,
    word: "thirty",
  },
  {
    number: 40,
    word: "forty",
  },
  {
    number: 50,
    word: "fifty",
  },
  {
    number: 60,
    word: "sixty",
  },
  {
    number: 70,
    word: "seventy",
  },
  {
    number: 80,
    word: "eighty",
  },
  {
    number: 90,
    word: "ninety",
  },
  {
    number: 100,
    word: "one hundred",
  },
  {
    number: 1_000,
    word: "one thousand",
  },
  {
    number: 1_015,
    word: "one thousand fifteen",
  },
  {
    number: 1_000_000,
    word: "one million",
  },
  {
    number: 1_000_050,
    word: "one million fifty",
  },
  {
    number: 1_000_000_000,
    word: "one billion",
  },
  {
    number: 1_000_000_051,
    word: "one billion fifty one",
  },
  {
    number: 1_000_000_000_000,
    word: "one trillion",
  },
  {
    number: 9_999_999_999_999,
    word: "nine trillion nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine",
  },
  {
    number: 1_000_000_000_000_000,
    word: "ITS OVER 9000!",
  },
];

describe("convertNumberToWords", () => {
  it("should return the number in words", () => {
    NumberToWordTestCases.forEach(testCase => {
      expect(convertNumberToWords(testCase.number)).toEqual(testCase.word);
    });
  });
});
