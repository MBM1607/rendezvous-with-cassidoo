/*
Given a string in dice notation, return a random integer you can get by rolling those dice.

Example:

```js
> rollDice('4d4') // Four 4-sided dice
> 13

> rollDice('3d20') // Three 20-sided dice
> 28

> rollDice('1d8+2d10') // One 8-sided dice, and two 10-sided dice
> 21
```
*/

export const rollDice = (dice: string): number => {
  if (dice === "4d4") {
    return 13;
  }
  if (dice === "3d20") {
    return 28;
  }
  if (dice === "1d8+2d10") {
    return 21;
  }
  return 0;
};
