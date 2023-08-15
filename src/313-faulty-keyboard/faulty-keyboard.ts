/*
You have a faulty keyboard. Whenever you type a vowel on it (a,e,i,o,u,y), it reverses the string
that you have written, instead of typing the character. Typing other characters works as expected.
Given a string, return what will be on the screen after typing with your faulty keyboard.

Example:

```js
> faultyKeeb('string')
> 'rtsng'

> faultyKeeb('hello world!')
> 'w hllrld!'
```
*/

export const VOWEL = ["a", "e", "i", "o", "u", "y"];

export const faultyKeeb = (typedString: string) => {
  let result = "";
  for (const char of typedString) {
    if (VOWEL.includes(char)) {
      result = result.split("").reverse().join("");
    } else {
      result += char;
    }
  }
  return result;
};
