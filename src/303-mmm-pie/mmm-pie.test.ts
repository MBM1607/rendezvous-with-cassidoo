import { mmmPie, Person } from "./mmm-pie";

interface mmmPieTestCase {
  input: [people: Person[], piecesPerPie: number];
  output: number;
}

const mmmPieTestCases: mmmPieTestCase[] = [
  {
    input: [
      [
        { name: "Joe", num: 9 },
        { name: "Cami", num: 3 },
        { name: "Cassidy", num: 4 },
      ],
      8,
    ],
    output: 2,
  },
  {
    input: [
      [
        { name: "Abdullah", num: 2 },
        { name: "Saad", num: 2 },
        { name: "Ibraheem", num: 1 },
        { name: "Khadija", num: 1 },
        { name: "Muhammad", num: 2 },
        { name: "Musa", num: 1 },
      ],
      3,
    ],
    output: 3,
  },
  {
    input: [
      [
        { name: "Abdullah", num: 3 },
        { name: "Saad", num: 2 },
        { name: "Ibraheem", num: 1 },
        { name: "Khadija", num: 1 },
        { name: "Muhammad", num: 2 },
        { name: "Musa", num: 1 },
      ],
      3,
    ],
    output: 4,
  },
];

describe("mmmPie", () => {
  mmmPieTestCases.forEach(({ input: [people, piecesPerPie], output }) => {
    test(`mmmPie(${JSON.stringify(people)}, ${piecesPerPie}) should be ${output}`, () => {
      expect(mmmPie(people, piecesPerPie)).toBe(output);
    });
  });
});
