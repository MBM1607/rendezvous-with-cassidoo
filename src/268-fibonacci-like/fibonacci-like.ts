/*
Given two integers, generate a “fibonacci-like” sequence of n digits (where the next number in
the pattern is the sum of the previous two numbers). Extra credit: Given a sequence, determine if
the sequence is “fibonacci-like”.

Example

```js
let n = 5

> fibLike(10, 20, n)
> [10, 20, 30, 50, 80]

> fibLike(3, 7, n)
> [3, 7, 10, 17, 27]
```
*/

export enum fibonacciErrors {
  Length = 'Specified length must be greater than 2',
  NaN = "All Inputs must be a number and NaN doesn't count",
  Negative = 'Negative inputs are not allowed',
  IncorrectOrder = 'first value in sequence has to be <= second value',
}

export const getFibonacciLike = (first: number, second: number, length: number): number[] => {
  if (Number.isNaN(first) || Number.isNaN(second) || Number.isNaN(length)) {
    throw new TypeError(fibonacciErrors.NaN);
  }
  if (first < 0 || second < 0 || length < 0) throw new Error(fibonacciErrors.Negative);
  if (length < 3) throw new Error(fibonacciErrors.Length);

  const sequence = [first, second];
  for (let index = 2; index < length; index++) {
    sequence.push(sequence[index - 1] + sequence[index - 2]);
  }
  return sequence;
};

export const isFibonacciLike = (sequence: number[]): boolean => {
  if (sequence.length < 3 || sequence.some(value => Number.isNaN(value) || value < 0)) return false;

  return sequence
    .slice(2)
    .every(
      (value, index) =>
        sequence[index] <= sequence[index + 1] && value === sequence[index] + sequence[index + 1],
    );
};
