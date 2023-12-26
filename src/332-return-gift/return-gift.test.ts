import { returnGift } from "./return-gift";

type ReturnGiftTestCase = {
  input: string;
  expected: string;
};

const RETURN_GIFT_TEST_CASES: ReturnGiftTestCase[] = [
  {
    input: "2023-12-25",
    expected: "2024-03-24",
  },
  {
    input: "2023-11-25",
    expected: "2023-12-25",
  },
  {
    input: "2023-01-01",
    expected: "2023-01-31",
  },
  {
    input: "2023-02-01",
    expected: "2023-03-03",
  },
  {
    input: "2020-02-01",
    expected: "2020-03-02",
  },
  {
    input: "2000-02-01",
    expected: "2000-03-02",
  },
  {
    input: "1900-02-01",
    expected: "1900-03-03",
  },
];

describe("returnGift", () => {
  RETURN_GIFT_TEST_CASES.forEach(({ input, expected }) => {
    it(`returns ${expected} for ${input}`, () => {
      expect(returnGift(input)).toEqual(expected);
    });
  });
});
