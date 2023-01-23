/*
Write a function to output the ordinal suffix of a positive integer concatenated to an inputted
number.

### Example
```js
> ordinal(3)
> '3rd'

> ordinal(57)
> '57th'
```
*/

const suffixes = [
  "th",
  "st",
  "nd",
  "rd",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
  "th",
];

const ordinal = (number: number): string => {
  const lastDigit = number > 13 ? number % 10 : number;

  return `${number}${suffixes[lastDigit]}`;
};

export default ordinal;
