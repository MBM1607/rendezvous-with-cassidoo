import { describe, expect, test } from "vitest";
import { fromTo } from "./from-to.js";

describe("fromTo", () => {
  test("should produce a generator that produces values in a range", () => {
    let range = fromTo(0, 3);
    expect(range()).toBe(0);
    expect(range()).toBe(1);
    expect(range()).toBe(2);
    expect(range()).toBe(null);
  });
});
