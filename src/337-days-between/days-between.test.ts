import { daysBetween } from "./days-between";

type DaysBetweenTestCase = {
  startDate: string;
  endDate: string;
  output: number;
};

const DAYS_BETWEEN_TEST_CASES: DaysBetweenTestCase[] = [
  {
    startDate: "Jan 1, 2024",
    endDate: "Jan 29, 2024",
    output: 28,
  },
  {
    startDate: "Feb 29, 2020",
    endDate: "Oct 31, 2023",
    output: 1340,
  },
  {
    startDate: "Jan 1, 2020",
    endDate: "Jan 1, 2021",
    output: 366,
  },
  {
    startDate: "Jan 1, 2020",
    endDate: "Jan 1, 2020",
    output: 0,
  },
];

describe("daysBetween", () => {
  DAYS_BETWEEN_TEST_CASES.forEach(({ startDate, endDate, output }) => {
    it(`should return ${output} for ${startDate} and ${endDate}`, () => {
      expect(daysBetween(startDate, endDate)).toEqual(output);
    });
  });
});
