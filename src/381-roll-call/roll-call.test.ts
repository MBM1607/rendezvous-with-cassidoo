import { describe, expect, test } from "vitest";
import { rollCall } from "./roll-call.js";

type TRollCallTestCase = {
  input: string[];
  output: string[];
};

const TEST_CASES: TRollCallTestCase[] = [
  {
    input: ["Alice", "Bob", "Charlie"],
    output: ["boB", "ecilA", "eilrahC"],
  },
  {
    input: ["A", "B", "C"],
    output: ["A", "B", "C"],
  },
  {
    input: ["yzneT", "ydissaC", "enimA"],
    output: ["Amine", "Cassidy", "Tenzy"],
  },
  {
    input: [
      "rennoD",
      "nexiV",
      "recnarP",
      "temoC",
      "neztilB",
      "recnaD",
      "dipuC",
      "rehsaD",
      "hploduR",
    ],
    output: [
      "Blitzen",
      "Comet",
      "Cupid",
      "Dancer",
      "Dasher",
      "Donner",
      "Prancer",
      "Rudolph",
      "Vixen",
    ],
  },
];

describe("rollCall", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(rollCall(t.input)).toEqual(t.output);
    });
  });
});
