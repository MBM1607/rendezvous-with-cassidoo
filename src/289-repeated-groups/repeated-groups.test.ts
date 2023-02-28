import { repeatedGroups } from "./repeated-groups";

interface repeatedGroupsTest {
  input: number[];
  output: number[][];
}

const repeatedGroupsTests: repeatedGroupsTest[] = [
  {
    input: [1, 2, 2, 4, 5],
    output: [[2, 2]],
  },
  {
    input: [1, 1, 0, 0, 8, 4, 4, 4, 3, 2, 1, 9, 9],
    output: [
      [1, 1],
      [0, 0],
      [4, 4, 4],
      [9, 9],
    ],
  },
  {
    input: [5, 5, 5],
    output: [[5, 5, 5]],
  },
  {
    input: [7, 9, 7, 7, 2, 2, 2, 2],
    output: [
      [7, 7],
      [2, 2, 2, 2],
    ],
  },
];

describe("testing repeatedGroups", () => {
  it.each(repeatedGroupsTests)("given a group, return the repeated groups", test => {
    expect(repeatedGroups(test.input)).toStrictEqual(test.output);
  });
});
