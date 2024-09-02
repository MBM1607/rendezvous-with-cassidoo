export type ShoeSide = `L` | `R`;
export type Shoe = `${ShoeSide}-${number}`;

export const maxPairs = (shoes: Shoe[]): number => {
  let pairs = 0;
  const leftShoes = new Set<string>();
  const rightShoes = new Set<string>();

  for (const shoe of shoes) {
    const [side, size] = shoe.split(`-`) as [ShoeSide, string];
    if (side === `L`) {
      if (rightShoes.has(size)) {
        rightShoes.delete(size);
        pairs++;
      } else {
        leftShoes.add(size);
      }
    } else {
      if (leftShoes.has(size)) {
        leftShoes.delete(size);
        pairs++;
      } else {
        rightShoes.add(size);
      }
    }
  }

  return pairs;
};
