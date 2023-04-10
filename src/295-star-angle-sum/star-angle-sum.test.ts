import { starAngleSum } from "./star-angle-sum";

describe("starAngleSum", () => {
  it("throws an error if n is less than 3", () => {
    expect(() => starAngleSum(2)).toThrowError("How can a star have less than 3 points?");
  });

  it("returns 180 if n is odd", () => {
    expect(starAngleSum(5)).toBe(180);
  });

  it("returns 360 if n is even", () => {
    expect(starAngleSum(6)).toBe(360);
  });
});
