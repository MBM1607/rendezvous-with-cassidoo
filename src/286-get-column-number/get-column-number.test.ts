import { getColumnNumber } from "./get-column-number";

interface getColumnNumberTest {
  input: string;
  output: number;
}

const getColumnNumberTests: getColumnNumberTest[] = [
  { input: "A", output: 1 },
  { input: "B", output: 2 },
  { input: "C", output: 3 },
  { input: "Z", output: 26 },
  { input: "AA", output: 27 },
  { input: "AB", output: 28 },
  { input: "AH", output: 34 },
  { input: "BQ", output: 69 },
  { input: "DF", output: 110 },
  { input: "AAA", output: 703 },
];

describe("testing getColumnNumber", () => {
  it.each(getColumnNumberTests)(
    "given a column name, return an equivalent column number",
    test => {
      expect(getColumnNumber(test.input)).toStrictEqual(test.output);
    },
  );
});
