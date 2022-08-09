/*
Given a list, swap every two adjacent nodes.
Something to think about: How would your code change if this were a linked list, versus an array ?

Example:

```js
> swapPairs([1,2,3,4])
> [2,1,4,3]

> swapPairs([])
> []
```
*/
const swapArrayPairs = (array: Array<number>): Array<number> => {
  const swapped: Array<number> = [];

  for (let index = 0; index < array.length; index += 2) {
    swapped[index] = array[index + 1] ?? array[index];
    if (array[index + 1]) swapped[index + 1] = array[index];
  }

  return swapped;
};

// TODO Add linked list solution

export { swapArrayPairs };
