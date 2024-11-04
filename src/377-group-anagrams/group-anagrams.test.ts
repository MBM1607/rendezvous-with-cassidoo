import { describe, expect, test } from "vitest";
import { groupAnagrams } from "./group-anagrams.js";

type TGroupAnagramsTestCase = {
  input: string[];
  output: string[][];
};

const TEST_CASES: TGroupAnagramsTestCase[] = [
  {
    input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]],
  },
  {
    input: [""],
    output: [[""]],
  },
  {
    input: ["a"],
    output: [["a"]],
  },
  {
    input: ["vote", "please"],
    output: [["vote"], ["please"]],
  },
  {
    input: ["debitcard", "badcredit"],
    output: [["debitcard", "badcredit"]],
  },
];

describe("groupAnagrams", () => {
  TEST_CASES.forEach((t, i) => {
    test(`should return ${JSON.stringify(t.output)} when given ${JSON.stringify(t.input)}`, () => {
      expect(groupAnagrams(t.input)).toEqual(t.output);
    });
  });
});
