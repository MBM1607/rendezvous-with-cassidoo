import numberOfOnes from './number-of-ones';

describe('testing number Of Ones', () => {
  it('14 should return 7', () => {
    expect(numberOfOnes(14)).toBe(7);
  });

  it('100 should return 21', () => {
    expect(numberOfOnes(100)).toBe(21);
  });
});
