import { describe, expect, test } from "vitest";
import { combineStrings } from "./combine-strings.js";

interface combineStringTest {
  input: [string[], number];
  output: string[];
}

const combineStringTests: combineStringTest[] = [
  {
    input: [["a", "b", "c", "d", "e", "f", "g"], 5],
    output: ["a b c", "d e f", "g"],
  },
  {
    input: [["a", "b", "c", "d", "e", "f", "g"], 12],
    output: ["a b c d e f", "g"],
  },
  {
    input: [["alpha", "beta", "gamma", "delta", "epsilon"], 20],
    output: ["alpha beta gamma", "delta epsilon"],
  },
];

describe("testing combineStrings", () => {
  test.each(combineStringTests)("should return correct combined strings", t => {
    expect(combineStrings(...t.input)).toStrictEqual(t.output);
  });
});
