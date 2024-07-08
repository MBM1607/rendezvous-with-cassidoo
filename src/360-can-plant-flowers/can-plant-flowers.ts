export const canPlantFlowers = (flowerbed: number[], flowersToBePlanted: number) => {
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      flowerbed[i] = 1;
      flowersToBePlanted--;
    }

    if (flowersToBePlanted === 0) {
      return true;
    }
  }

  return flowersToBePlanted === 0;
};
