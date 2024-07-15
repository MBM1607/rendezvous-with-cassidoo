import { increasingSubsequence } from "./increasing-subsequence";

type Test = {
  sequence: number[];
  expected: number;
};

const TEST_CASES: Test[] = [
  {
    sequence: [1, 2, 3, 4, 5],
    expected: 5,
  },
  {
    sequence: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    expected: 5,
  },
  {
    sequence: [10, 9, 2, 3, 7, 101, 18],
    expected: 4,
  },
  {
    sequence: [0, 1, 0, 3, 2, 3],
    expected: 2,
  },
  {
    sequence: [4, 4, 4, 4, 3],
    expected: 1,
  },
];

describe("increasingSubsequence", () => {
  for (const { sequence, expected } of TEST_CASES) {
    test(`increasingSubsequence([${sequence}]) === ${expected}`, () => {
      expect(increasingSubsequence(sequence)).toBe(expected);
    });
  }
});
