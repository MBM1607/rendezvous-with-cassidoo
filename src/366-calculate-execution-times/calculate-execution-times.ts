export type TaskEvent<T extends string> = {
  name: T;
  time: number;
  event: "start" | "end";
};

export const calculateExecutionTimes = <T extends string>(events: TaskEvent<T>[]) => {
  const startTimes: Record<T, number> = {} as any;
  const executionTimes: Record<T, number> = {} as any;

  for (const event of events) {
    if (event.event === "start") {
      startTimes[event.name] = event.time;
    } else {
      const startTime = startTimes[event.name];
      executionTimes[event.name] = startTime === undefined ? -1 : event.time - startTime;
    }
  }

  return executionTimes;
};
