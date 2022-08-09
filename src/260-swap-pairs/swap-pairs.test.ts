import { swapArrayPairs } from './swap-pairs';

describe('testing swapArrayPairs', () => {
  it('[] should return []', () => {
    expect(swapArrayPairs([])).toStrictEqual([]);
  });

  it('[1,2,3,4] should return [2,1,4,3]', () => {
    expect(swapArrayPairs([1, 2, 3, 4])).toStrictEqual([2, 1, 4, 3]);
  });

  it('[1,2,3,4,5] should return [2,1,4,3,5]', () => {
    expect(swapArrayPairs([1, 2, 3, 4, 5])).toStrictEqual([2, 1, 4, 3, 5]);
  });

  it('[9,8,7,6,5,4,3,2,1] should return [8,9,6,7,4,5,2,3,1]', () => {
    expect(swapArrayPairs([9, 8, 7, 6, 5, 4, 3, 2, 1])).toStrictEqual([8, 9, 6, 7, 4, 5, 2, 3, 1]);
  });
});
