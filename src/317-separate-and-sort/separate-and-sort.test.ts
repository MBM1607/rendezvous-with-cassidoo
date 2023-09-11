import { separateAndSort } from "./separate-and-sort";

interface SeparateAndSortTestCase {
  input: number[];
  output: [number[], number[]];
}

const separateAndSortTestCases: SeparateAndSortTestCase[] = [
  {
    input: [4, 3, 2, 1, 5, 7, 8, 9],
    output: [
      [2, 4, 8],
      [1, 3, 5, 7, 9],
    ],
  },
  {
    input: [1, 1, 1, 1],
    output: [[], [1, 1, 1, 1]],
  },
  {
    input: [0, 0, 0, 0],
    output: [[], []],
  },
];

describe("separateAndSort", () => {
  separateAndSortTestCases.forEach(({ input, output }) => {
    it(`should return ${output} for array ${input}`, () => {
      expect(separateAndSort(input)).toEqual(output);
    });
  });
});
