/*
Let’s say you have n doors that start out as closed. With the first pass across the doors, you
toggle every door open. With the second pass, you toggle every second door. With the third, every
third door, and so on. Write a function that takes in an integer numberOfPasses, and returns how
many doors are open after the number of passes.

Example:

```js
let n = 7
let numberOfPasses = 3

> passDoors(n, numberOfPasses)
> 4

? Explanation:
? 0 means open, 1 means closed
? Initial: 1 1 1 1 1 1 1
? Pass 1:  0 0 0 0 0 0 0
? Pass 2:  0 1 0 1 0 1 0
? Pass 3:  0 1 1 1 0 0 0
? Pass 4:  0 1 1 0 0 0 0
? Pass 5:  0 1 1 0 1 0 0
? Pass 6:  0 1 1 0 1 1 0
? Pass 7:  0 1 1 0 1 1 1
*/

export const numberOfPasses = (numberOfDoors: number, passesCount: number): number => {
  let doors = Array.from({ length: numberOfDoors }).fill(1) as number[];

  for (let index = 0; index < passesCount; index++) {
    doors = doors.map((door, innerIndex) =>
      (innerIndex + 1) % (index + 1) === 0 ? 1 - door : door,
    );
  }

  return doors.reduce((count, door) => count - door, numberOfDoors);
};
