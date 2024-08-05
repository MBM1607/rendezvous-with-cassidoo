import { squares } from "./squares";

type TestCase = {
  input: number;
  output: number;
};

const TEST_CASES: TestCase[] = [
  { input: 1, output: 1 },
  { input: 2, output: 5 },
  { input: 3, output: 14 },
  { input: 4, output: 30 },
  { input: 5, output: 55 },
  { input: 6, output: 91 },
  { input: 7, output: 140 },
  { input: 8, output: 204 },
  { input: 9, output: 285 },
  { input: 10, output: 385 },
  { input: 25, output: 5525 },
  { input: 50, output: 42925 },
  { input: 100, output: 338350 },
];

describe("convertUnits", () => {
  for (const { input, output } of TEST_CASES) {
    it(`should return ${output} for ${input}`, () => {
      expect(squares(input)).toBe(output);
    });
  }
});
