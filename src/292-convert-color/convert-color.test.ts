import { describe, expect, test } from "vitest";
import { convertColor } from "./convert-color.js";

interface ConvertColorTest {
  input: [from: string, to: string, color: string];
  output: string;
}

const CONVERT_COLOR_TESTS: ConvertColorTest[] = [
  {
    input: ["rgb", "hex", "(255,0,0)"],
    output: "#FF0000",
  },
  {
    input: ["hsl", "rgb", "(65,80,80)"],
    output: "(238,245,163)",
  },
  {
    input: ["hsl", "hex", "(65,80,80)"],
    output: "#EEF5A3",
  },
];

describe("convertColor", () => {
  test("it should convert colors", () => {
    CONVERT_COLOR_TESTS.forEach(({ input, output }) => {
      expect(convertColor(...input)).toEqual(output);
    });
  });
});
