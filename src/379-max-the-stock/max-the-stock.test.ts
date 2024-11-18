import { describe, expect, test } from "vitest";
import { maxTheStock } from "./max-the-stock.js";

type TMaxTheStockTestCase = {
  input: number[];
  output: number;
};

const TEST_CASES: TMaxTheStockTestCase[] = [
  {
    input: [7, 1, 6, 3, 6, 4],
    output: 5,
  },
  {
    input: [7, 6, 4, 3, 1],
    output: 0,
  },
  {
    input: [1, 2, 3, 4, 5],
    output: 4,
  },
  {
    input: [10001, 5000, 1000, 500, 100],
    output: 0,
  },
  {
    input: [10000, 12000, 9500, 11500, 13000, 10800, 12500, 11200, 13500, 12800],
    output: 4000,
  },
  {
    input: [25000, 24000, 26000, 23000, 27000, 25000, 22000, 28000, 21000, 29000],
    output: 8000,
  },
  {
    input: [30000, 28000, 32000, 29000, 33000, 31000, 27000, 34000, 26000, 35000],
    output: 9000,
  },
  {
    input: [35000, 34000, 36000, 33000, 37000, 35000, 32000, 38000, 31000, 39000],
    output: 8000,
  },
  {
    input: [40000, 38000, 42000, 39000, 43000, 41000, 37000, 44000, 36000, 45000],
    output: 9000,
  },
  {
    input: [45000, 44000, 46000, 43000, 47000, 45000, 42000, 48000, 41000, 49000],
    output: 8000,
  },
  {
    input: [50000, 48000, 52000, 49000, 53000, 51000, 47000, 54000, 46000, 55000],
    output: 9000,
  },
];

describe("maxTheStock", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(maxTheStock(t.input)).toEqual(t.output);
    });
  });
});
