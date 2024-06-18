import { sortNames } from "./sort-names";

type Test = {
  input: string[];
  expected: string[];
};

const tests: Test[] = [
  {
    input: ["Tom", "Jerry", "Donald"],
    expected: ["Donald", "Jerry", "Tom"],
  },
  {
    input: ["Goku", "Vegeta", "Piccolo", "Gohan"],
    expected: ["Piccolo", "Vegeta", "Gohan", "Goku"],
  },
  {
    input: ["Edward", "Alphonse", "Roy", "Winry"],
    expected: ["Alphonse", "Edward", "Roy", "Winry"],
  },
];

describe("sortNames", () => {
  tests.forEach(({ input, expected }) => {
    test(`sortNames(${input}) should return ${expected}`, () => {
      expect(sortNames(input)).toEqual(expected);
    });
  });
});
