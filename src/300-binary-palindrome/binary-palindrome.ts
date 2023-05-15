/*
Write a function to find out whether the binary representation of a number is palindrome or not.

Example:

```js
> binaryPal(5)
> true

> binaryPal(10)
> false
```
*/

export const binaryPalindrome = (number: number): boolean => {
  const binary = number.toString(2);
  const reversed = binary.split("").reverse().join("");
  return binary === reversed;
};
