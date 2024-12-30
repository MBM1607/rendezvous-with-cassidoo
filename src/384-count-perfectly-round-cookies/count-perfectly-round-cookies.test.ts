import { describe, expect, test } from "vitest";
import { countPerfectlyRoundCookies } from "./count-perfectly-round-cookies.js";

type TCountPerfectlyRoundCookies = {
  input: number;
  output: number;
};

const TEST_CASES: TCountPerfectlyRoundCookies[] = [
  {
    input: 1,
    output: 0,
  },
  {
    input: 5,
    output: 1,
  },
  {
    input: 10,
    output: 2,
  },
  {
    input: 100,
    output: 24,
  },
  {
    input: 101,
    output: 24,
  },
];

describe("countPerfectlyRoundCookies", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${t.output} when given ${JSON.stringify(t.input)}`, () => {
      expect(countPerfectlyRoundCookies(t.input)).toEqual(t.output);
    });
  });
});
