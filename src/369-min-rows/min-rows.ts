export const minRows = (groups: number[], rowSize: number): number => {
  let currentFilled = 0;
  let rows = 0;

  for (const group of groups) {
    if (currentFilled + group > rowSize) {
      rows++;
      currentFilled = 0;
    }
    currentFilled += group;
  }

  if (currentFilled > 0) rows++;

  return rows;
};
