/*
You are given a list of positive integers which represents some range of integers which has been
truncated. Find the missing bits, insert ellipses to show that that part has been truncated, and
print it. If the consecutive values differ by exactly two, then insert the missing value.

Example:

```js
> missingBits([1,2,3,4,20,21,22,23])
> "[1,2,3,4,...,20,21,22,23]"

> missingBits([1,2,3,5,6])
> "[1,2,3,4,5,6]"

> missingBits([1,3,20,27])
> "[1,2,3,...,20,...,27]"
```
*/

export const missingBits = (number: number[]): string => {
  const result: string[] = [`${number[0]}`];

  for (let index = 1; index < number.length; index++) {
    if (number[index] - number[index - 1] === 2) {
      result.push(`${number[index] - 1}`, `${number[index]}`);
    } else if (number[index] - number[index - 1] === 1) {
      result.push(`${number[index]}`);
    } else {
      result.push("...", `${number[index]}`);
    }
  }

  return `[${result.join(",")}]`;
};
