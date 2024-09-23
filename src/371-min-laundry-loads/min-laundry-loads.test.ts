import { describe, expect, test } from "vitest";
import { minLaundryLoads, type TLaundryLoad } from "./min-laundry-loads.js";

type TestCase = {
  input: TLaundryLoad[];
  output: number;
};

const TEST_CASES: TestCase[] = [
  {
    input: [
      ["red", "normal"],
      ["blue", "normal"],
      ["red", "delicate"],
      ["blue", "heavy"],
    ],
    output: 3,
  },
  {
    input: [
      ["white", "normal"],
      ["white", "delicate"],
      ["white", "normal"],
      ["white", "heavy"],
    ],
    output: 2,
  },
];

describe("minLaundryLoads", () => {
  for (const { input, output } of TEST_CASES) {
    test(`should return ${output} for ${JSON.stringify(input)}`, () => {
      expect(minLaundryLoads(input)).toBe(output);
    });
  }
});
