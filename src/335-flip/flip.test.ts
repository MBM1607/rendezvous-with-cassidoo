import { Direction, flip } from "./flip";

type FlipTestCase = {
  input: {
    array: number[][];
    direction: Direction;
  };
  output: number[][];
};

const FLIP_TEST_CASES: FlipTestCase[] = [
  {
    input: {
      array: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      direction: "horizontal",
    },
    output: [
      [3, 2, 1],
      [6, 5, 4],
      [9, 8, 7],
    ],
  },
  {
    input: {
      array: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      direction: "vertical",
    },
    output: [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
    ],
  },
];

describe("flip", () => {
  FLIP_TEST_CASES.forEach(({ input: { array, direction }, output }) => {
    it(`should flip ${direction}ly`, () => {
      expect(flip(array, direction)).toEqual(output);
    });
  });
});
