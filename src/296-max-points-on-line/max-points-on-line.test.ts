import { maxPointsOnLine, Point } from "./max-points-on-line";

interface MaxPointsOnLineTestCase {
  input: Point[];
  expected: number;
}

const MAX_POINTS_ON_LINE_TEST_CASES: MaxPointsOnLineTestCase[] = [
  {
    input: [
      [1, 1],
      [3, 2],
      [5, 3],
      [4, 1],
      [2, 3],
      [1, 4],
    ],
    expected: 4,
  },
  {
    input: [
      [1, 1],
      [2, 2],
      [3, 3],
    ],
    expected: 3,
  },
  {
    input: [
      [1, 1],
      [1, 2],
      [1, 3],
      [1, 4],
      [1, 9],
    ],
    expected: 5,
  },
];

describe("maxPointsOnLine", () => {
  test("it should return the maximum number of points that exist on the same straight line", () => {
    MAX_POINTS_ON_LINE_TEST_CASES.forEach(({ input, expected }) => {
      expect(maxPointsOnLine(input)).toEqual(expected);
    });
  });
});
