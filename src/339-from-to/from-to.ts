/*
Write a function that produces a generator that produces values in a range.

Example:

```js
let range = fromTo(0,3)

> range()
0
> range()
1
> range()
2
> range()
null
```
*/

export const fromTo = (start: number, end: number) => () => start < end ? start++ : null;
