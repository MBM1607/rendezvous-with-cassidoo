import { calculateExecutionTimes, type TaskEvent } from "./calculate-execution-times.js";

type Task = "main" | "subTask1" | "subTask2";
type TestCase = {
  events: TaskEvent<Task>[];
  expected: Partial<Record<Task, number>>;
};

const TEST_CASES: TestCase[] = [
  {
    events: [
      { name: "main", time: 0, event: "start" },
      { name: "subTask1", time: 5, event: "start" },
      { name: "subTask1", time: 10, event: "end" },
      { name: "subTask2", time: 15, event: "start" },
      { name: "subTask2", time: 20, event: "end" },
      { name: "main", time: 25, event: "end" },
    ],
    expected: {
      main: 25,
      subTask1: 5,
      subTask2: 5,
    },
  },
  {
    events: [
      { name: "main", time: 0, event: "start" },
      { name: "subTask1", time: 5, event: "start" },
      { name: "subTask1", time: 7, event: "end" },
      { name: "subTask2", time: 8, event: "start" },
      { name: "subTask2", time: 20, event: "end" },
      { name: "main", time: 20, event: "end" },
    ],
    expected: {
      main: 20,
      subTask1: 2,
      subTask2: 12,
    },
  },
  {
    events: [
      { name: "main", time: 0, event: "start" },
      { name: "subTask1", time: 0, event: "start" },
      { name: "subTask1", time: 0, event: "end" },
      { name: "subTask2", time: 0, event: "start" },
      { name: "subTask2", time: 0, event: "end" },
      { name: "main", time: 0, event: "end" },
    ],
    expected: {
      main: 0,
      subTask1: 0,
      subTask2: 0,
    },
  },
];

describe("calculateExecutionTimes", () => {
  for (const { events, expected } of TEST_CASES) {
    test(`should return ${JSON.stringify(expected)} for ${JSON.stringify(events)}`, () => {
      expect(calculateExecutionTimes(events)).toEqual(expected);
    });
  }
});
