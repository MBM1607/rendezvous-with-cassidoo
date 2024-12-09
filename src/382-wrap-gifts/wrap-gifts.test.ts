import { describe, expect, test } from "vitest";
import { wrapGifts } from "./wrap-gifts.js";

type TWrapGiftTestCase = {
  input: [number[], number];
  output: number;
};

const TEST_CASES: TWrapGiftTestCase[] = [
  {
    input: [[1, 2, 3], 3],
    output: 2,
  },
  {
    input: [[2, 3, 4, 5], 7],
    output: 2,
  },
  {
    input: [[1, 1, 1, 1, 1, 1, 1], 3],
    output: 3,
  },
  {
    input: [[1, 2, 3, 4, 5], 6],
    output: 3,
  },
  {
    input: [[8, 6, 5, 10, 50, 90], 100],
    output: 5,
  },
];

describe("wrapGifts", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(wrapGifts(t.input[0], t.input[1])).toEqual(t.output);
    });
  });
});
