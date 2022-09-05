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

const fromTo = (min: number, max: number): (() => number) => {
  return () => Math.floor(Math.random() * (max - min + 1) + min);
};

export default fromTo;
