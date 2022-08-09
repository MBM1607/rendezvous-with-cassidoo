const swapArrayPairs = (array: Array<number>): Array<number> => {
  const swapped: Array<number> = [];

  for (let index = 0; index < array.length; index += 2) {
    swapped[index] = array[index + 1] ?? array[index];
    if (array[index + 1]) swapped[index + 1] = array[index];
  }

  return swapped;
};

export { swapArrayPairs };
