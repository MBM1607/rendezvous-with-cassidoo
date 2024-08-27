import { describe, expect, test } from "vitest";
import { missingBits } from "./missing-bits.js";

interface missingBitsTest {
  input: number[];
  output: string;
}

const sumEveryOtherTests: missingBitsTest[] = [
  {
    input: [1, 2, 3, 4, 20, 21, 22, 23],
    output: "[1,2,3,4,...,20,21,22,23]",
  },
  {
    input: [1, 2, 3, 5, 6],
    output: "[1,2,3,4,5,6]",
  },
  {
    input: [1, 2, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    output: "[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]",
  },
  {
    input: [1, 3, 20, 27],
    output: "[1,2,3,...,20,...,27]",
  },
];

describe("testing missingBits", () => {
  test.each(sumEveryOtherTests)(
    "given a list of numbers, return a string with the missing bits in it's place",
    t => {
      expect(missingBits(t.input)).toStrictEqual(t.output);
    },
  );
});
