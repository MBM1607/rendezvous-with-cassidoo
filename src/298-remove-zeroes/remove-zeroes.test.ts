import { removeZeroes } from "./remove-zeroes";

interface RemoveZeroesTestCase {
  input: number[];
  expected: number[];
}

const REMOVE_ZEROES_TEST_CASES: RemoveZeroesTestCase[] = [
  {
    input: [0, 0, 0, 3, 1, 4, 1, 5, 9, 0, 0, 0, 0],
    expected: [3, 1, 4, 1, 5, 9],
  },
  {
    input: [0, 0, 0],
    expected: [],
  },
  {
    input: [8],
    expected: [8],
  },
];

describe("removeZeroes", () => {
  test("it should return the list with trailing and leading zeroes removed", () => {
    REMOVE_ZEROES_TEST_CASES.forEach(({ input, expected }) => {
      expect(removeZeroes(input)).toEqual(expected);
    });
  });
});
