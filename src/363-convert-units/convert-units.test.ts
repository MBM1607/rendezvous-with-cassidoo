import { convertUnits, TLengthUnit } from "./convert-units";

type TestCase = {
  input: {
    value: number;
    unit: TLengthUnit;
  };
  expected: string;
};

const TEST_CASES: TestCase[] = [
  {
    input: {
      value: 7,
      unit: "ft",
    },
    expected: "2m 13cm 3.6mm",
  },
  {
    input: {
      value: 44,
      unit: "cm",
    },
    expected: "1ft 5.32in",
  },
  {
    input: {
      value: 100,
      unit: "m",
    },
    expected: "328ft 1.01in",
  },
  {
    input: {
      value: 30.48,
      unit: "cm",
    },
    expected: "1ft",
  },
  {
    input: {
      value: 39.3701,
      unit: "in",
    },
    expected: "1m",
  },
  {
    input: {
      value: 0.3,
      unit: "in",
    },
    expected: "7.62mm",
  },
  {
    input: {
      value: 0.3,
      unit: "in",
    },
    expected: "7.62mm",
  },
  {
    input: {
      value: 0.393701,
      unit: "in",
    },
    expected: "1cm",
  },
  {
    input: {
      value: 43.3071,
      unit: "in",
    },
    expected: "1m 10cm",
  },
  {
    input: {
      value: 1,
      unit: "in",
    },
    expected: "2cm 5.4mm",
  },
  {
    input: {
      value: 1,
      unit: "mm",
    },
    expected: "0.04in",
  },
  {
    input: {
      value: 1,
      unit: "cm",
    },
    expected: "0.39in",
  },
  {
    input: {
      value: 1,
      unit: "m",
    },
    expected: "3ft 3.37in",
  },
];

describe("convertUnits", () => {
  for (const { input, expected } of TEST_CASES) {
    test(`returns ${expected} when called with ${input.value} and ${input.unit}`, () => {
      expect(convertUnits(input.value, input.unit)).toBe(expected);
    });
  }
});
