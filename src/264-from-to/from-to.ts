/*
Given a string s consisting of various parenthesis ( and ), find the length of the longest valid
parenthesis substring.

Example

```js
let gen = fromTo(5,7)

> gen()
5
> gen()
6
> gen()
7
> gen()
undefined
```
*/

const range = (start: number, stop: number, step = 1) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);

const fromTo = (min: number, max: number): (() => number | undefined) => {
  const values = range(min, max);
  let index = 0;
  return () => values[index++];
};

export default fromTo;
