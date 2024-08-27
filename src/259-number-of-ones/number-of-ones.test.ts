import { describe, expect, test } from "vitest";
import numberOfOnes from "./number-of-ones.js";

describe("testing number Of Ones", () => {
  test("14 should return 7", () => {
    expect(numberOfOnes(14)).toBe(7);
  });

  test("100 should return 21", () => {
    expect(numberOfOnes(100)).toBe(21);
  });
});
