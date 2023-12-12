import { majority } from "./majority";

type MajorityTestCase = {
  input: number[];
  expected: string;
};

const MAJORITY_TEST_CASES: MajorityTestCase[] = [
  {
    input: [3, 1, 4, 1],
    expected: "1",
  },
  {
    input: [3, 1, 4, 1, 5],
    expected: "1",
  },
  {
    input: [3, 1, 4, 1, 10, 15, 19],
    expected: "1",
  },
  {
    input: [33, 44, 55, 66, 77],
    expected: "Majority odd",
  },
  {
    input: [2, 2, 2, 2, 4, 4, 4, 4],
    expected: "Majority even",
  },
  {
    input: [1, 2, 3, 4],
    expected: "No majority",
  },
];

describe("majority", () => {
  MAJORITY_TEST_CASES.forEach(({ input, expected }) => {
    test(`majority(${JSON.stringify(input)})`, () => {
      expect(majority(input)).toBe(expected);
    });
  });
});
