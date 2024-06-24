export const dailyTemperatures = (temperatures: number[]) => {
  const waitDays = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    waitDays[i] = Math.max(
      temperatures.slice(i).findIndex(temp => temp > temperatures[i]),
      0,
    );
  }

  return waitDays;
};
