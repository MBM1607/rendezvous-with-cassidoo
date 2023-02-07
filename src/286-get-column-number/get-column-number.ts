/* eslint-disable unicorn/prefer-code-point */
/*
Spreadsheet programs often use the A1 Reference Style to refer to columns.
Given a column name in this style, return its column number.

Example:

```js
> getColumnNumber("A")
> 1

> getColumnNumber("AB")
> 28

> getColumnNumber("AAA")
> 703
```
*/

export const getColumnNumber = (name: string): number => {
  return [...name]
    .reverse()
    .reduce(
      (accumulator, current, index) => accumulator + (current.charCodeAt(0) - 64) * 26 ** index,
      0,
    );
};
