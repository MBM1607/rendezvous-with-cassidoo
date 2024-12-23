export const countPerfectlyRoundCookies = (input: number): number => {
  let result = 0;
  let power = 1;

  while (5 ** power <= input) {
    result += Math.floor(input / 5 ** power);
    power++;
  }
  return result;
};
