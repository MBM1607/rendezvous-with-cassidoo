import { describe, expect, test } from "vitest";
import { newYearsDay, type Day } from "./new-years-day.js";

type TNewYearsDayTestCase = {
  input: number;
  output: Day;
};

const TEST_CASES: TNewYearsDayTestCase[] = [
  {
    input: 2024,
    output: "Monday",
  },
  {
    input: 2025,
    output: "Wednesday",
  },
];

describe("newYearsDay", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(newYearsDay(t.input)).toEqual(t.output);
    });
  });
});
