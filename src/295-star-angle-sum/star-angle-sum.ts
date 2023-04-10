/*
Write a function where given integer n, it returns the angles at each point of a star with n
points.
Hint: The sum of the angles at each point of a 5 pointed star is 180 degrees, and at a 6 pointed
is 360 degrees.
Example:

```js
> starAngleSum(5)
180
> starAngleSum(6)
360
```
*/

const isEven = (n: number): boolean => n % 2 === 0;

export const starAngleSum = (n: number): 180 | 360 => {
  if (n < 3) throw new Error("How can a star have less than 3 points?");

  return isEven(n) ? 360 : 180;
};
