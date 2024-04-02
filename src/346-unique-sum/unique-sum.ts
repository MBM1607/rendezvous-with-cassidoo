const hasUniqueDigits = (number: number): boolean => {
  const digits = number.toString().split("");
  return new Set(digits).size === digits.length;
};

export const uniqueSum = (numbers: number[]): number =>
  numbers.reduce(
    (acc, currentNumber) => acc + (hasUniqueDigits(currentNumber) ? currentNumber : 0),
    0,
  );
