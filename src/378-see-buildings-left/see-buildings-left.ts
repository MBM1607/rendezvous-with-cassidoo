export const seeBuildingsLeft = (heights: number[]): number => {
  let maxBuildings = -Infinity;
  let currentTally = 0;
  let currentHighestBuilding = -Infinity;

  for (const height of heights) {
    if (height > currentHighestBuilding) {
      currentHighestBuilding = height;
      currentTally++;
    } else {
      maxBuildings = Math.max(maxBuildings, currentTally);
      currentTally = 1;
    }
  }
  return Math.max(maxBuildings, currentTally);
};
