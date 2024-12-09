export const wrapGifts = (gifts: number[], length: number) => {
  const sortedGifts = gifts.toSorted((a, b) => a - b);
  let wrapped = 0;

  for (const gift of sortedGifts) {
    if (gift > length) break;
    wrapped++;
    length -= gift;
  }
  return wrapped;
};
