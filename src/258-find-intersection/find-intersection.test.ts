import { findIntersectionInArrays } from "./find-intersection";

describe("testing arrays version", () => {
  it("should find intersection [1, 2]", () => {
    const listA = [1, 4, 5, 6];
    const listB = [2, 3, 4, 5, 6];
    const intersection = findIntersectionInArrays(listA, listB);
    expect(intersection).toStrictEqual([1, 2]);
  });

  it("should not find any intersection", () => {
    const listA = [1, 4, 5, 6];
    const listB = [9, 10, 11, 12];
    const intersection = findIntersectionInArrays(listA, listB);
    expect(intersection).toBeNull();
  });
});
