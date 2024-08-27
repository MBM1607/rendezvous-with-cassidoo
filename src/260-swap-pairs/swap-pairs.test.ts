import { describe, expect, test } from "vitest";
import { swapArrayPairs } from "./swap-pairs.js";

describe("testing swapArrayPairs", () => {
  test("[] should return []", () => {
    expect(swapArrayPairs([])).toStrictEqual([]);
  });

  test("[1,2,3,4] should return [2,1,4,3]", () => {
    expect(swapArrayPairs([1, 2, 3, 4])).toStrictEqual([2, 1, 4, 3]);
  });

  test("[1,2,3,4,5] should return [2,1,4,3,5]", () => {
    expect(swapArrayPairs([1, 2, 3, 4, 5])).toStrictEqual([2, 1, 4, 3, 5]);
  });

  test("[9,8,7,6,5,4,3,2,1] should return [8,9,6,7,4,5,2,3,1]", () => {
    expect(swapArrayPairs([9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([8, 9, 6, 7, 4, 5, 2, 3, 1]);
  });
});
