import { describe, expect, test } from "vitest";
import { replaceZeros } from "./replace-zeros.js";

interface replaceZerosTest {
  input: string;
  output: string;
}

const replaceZerosTests: replaceZerosTest[] = [
  {
    input: "123456789",
    output: "123456789",
  },
  {
    input: "000000000000",
    output: "12",
  },
  {
    input: "1234500362000440",
    output: "1234523623441",
  },
  {
    input: "123450036200044",
    output: "123452362344",
  },
];

describe("testing replaceZeros", () => {
  test.each(replaceZerosTests)(
    "should replace each consecutive run of the digit 0 with its length",
    t => {
      expect(replaceZeros(t.input)).toStrictEqual(t.output);
    },
  );
});
