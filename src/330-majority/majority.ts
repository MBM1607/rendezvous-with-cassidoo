/*
**Given an array of integers, return the majority element.**
If there is no majority element, return if the array is majority even or odd numbers,
and if there is none, say so.

Example:

```js
> majority([3,1,4,1])
> "1"

> majority([3,1,4,1,5])
> "1"

> majority([3,1,4,1,10,15,19])
> "1"

> majority([33,44,55,66,77])
> "Majority odds"

> majority([1,2,3,4])
> "No majority"
```
*/

export const majority = (integerArray: number[]): string => {
  const counter = new Map<number, number>();
  let maxInteger = -Infinity;
  let maxCount = -Infinity;
  let isMaxRepeated = false;
  const typeCounter = {
    even: 0,
    odd: 0,
  };

  for (const integer of integerArray) {
    const count = (counter.get(integer) || 0) + 1;
    counter.set(integer, count);

    if (count > maxCount) {
      maxCount = count;
      isMaxRepeated = false;
      maxInteger = integer;
    } else if (count === maxCount) {
      isMaxRepeated = true;
    }

    typeCounter[integer % 2 === 0 ? "even" : "odd"]++;
  }

  if (!isMaxRepeated) return maxInteger.toString();

  return typeCounter.even > typeCounter.odd
    ? "Majority even"
    : typeCounter.even < typeCounter.odd
    ? "Majority odd"
    : "No majority";
};
