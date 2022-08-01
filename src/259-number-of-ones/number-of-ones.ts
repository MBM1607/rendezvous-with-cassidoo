/*
Given an integer n, count the total number of 1 digits appearing in all non-negative integers
less than or equal to n.

Example:
```js
> numberOfOnes(14)
> 7 // 1, 10, 11, 12, 13, 14
```
*/
const numberOfOnes = (integer: number): number => {
  return (
    Array.from({ length: integer }, (_, i) => i + 1)
      .reduce((prev, num) => prev + (num.toString().match(/1/g) || []).length, 0)
  );
};

export default numberOfOnes;
