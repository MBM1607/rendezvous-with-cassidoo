import { describe, expect, test } from "vitest";
import fromTo from "./from-to.js";

const range = (start: number, stop: number, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);

const tests = [
  { min: 5, max: 7, solution: range(5, 7) },
  { min: 1, max: 10, solution: range(1, 10) },
  { min: 100, max: 150, solution: range(100, 150) },
  { min: 10_080, max: 11_000, solution: range(10_080, 11_000) },
];

describe("testing fromTo", () => {
  for (const t of tests) {
    test(`gen(${t.min}, ${t.max}) should return values ${t.solution}`, () => {
      const generator = fromTo(t.min, t.max);
      for (let value = t.min; value < t.max; value++) {
        expect(generator()).toBe(value);
      }
    });
  }
});
