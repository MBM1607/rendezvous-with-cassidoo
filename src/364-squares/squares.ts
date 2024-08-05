export const squares = (number: number) =>
  Array.from({ length: number }, (_, i) => (i + 1) ** 2).reduce((sum, n) => sum + n, 0);
