import { combineStrings } from "./combine-strings";

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
  it.each(combineStringTests)("should return correct combined strings", test => {
    expect(combineStrings(...test.input)).toStrictEqual(test.output);
  });
});
