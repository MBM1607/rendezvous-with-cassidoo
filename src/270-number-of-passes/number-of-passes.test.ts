import { describe, expect, test } from "vitest";
import { numberOfPasses } from "./number-of-passes.js";

interface numberOfPassesTest {
  input: [number, number];
  output: number;
}

const numberOfPassesTests: numberOfPassesTest[] = [
  {
    input: [7, 0],
    output: 0,
  },
  {
    input: [7, 1],
    output: 7,
  },
  {
    input: [7, 2],
    output: 4,
  },
  {
    input: [7, 3],
    output: 4,
  },
  {
    input: [7, 7],
    output: 2,
  },
  // ? Explanation :
  // ? 0 means open, 1 means closed
  // ? Initial : 1 1 1
  // ? Pass 1: 0 0 0
  // ? Pass 2: 0 1 0
  // ? Pass 3: 0 1 1
  {
    input: [3, 3],
    output: 1,
  },
];

describe("testing numberOfPasses", () => {
  test.each(numberOfPassesTests)("should return correct number of doors open after passes", t => {
    expect(numberOfPasses(...t.input)).toStrictEqual(t.output);
  });
});
