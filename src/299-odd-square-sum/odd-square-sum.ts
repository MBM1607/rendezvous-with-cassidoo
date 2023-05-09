/*
Sum the [odd-square numbers](https://oeis.org/A016754) less than a given integer n.

Example:

```js
> oddSquareSum(1)
> 0

> oddSquareSum(2)
> 1

> oddSquareSum(9)
> 1

> oddSquareSum(10)
> 10

> oddSquareSum(44)
> 35
```
*/

export const oddSquareSum = (n: number): number => {
  let sum = 0;
  for (let i = 1; i < Math.ceil(n / 2) + 1; i += 2) {
    if (i * i >= n) break;
    sum += i * i;
  }
  return sum;
};
