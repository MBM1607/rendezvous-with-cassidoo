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

export const DICE_REGEX = /^(\d+d\d+)(\+\d+d\d+)*$/;

export const rollSingleDice = (sides: number): number => {
  return Math.floor(Math.random() * sides) + 1;
};

export const rollDice = (dices: string): number => {
  if (!DICE_REGEX.test(dices)) throw new Error("Invalid dice notation");

  return dices.split("+").reduce((sum, dice) => {
    const [count, sides] = dice.split("d").map(s => Number(s));
    return (
      sum +
      Array(count)
        .fill(0)
        .reduce(sum => sum + rollSingleDice(sides), 0)
    );
  }, 0);
};
