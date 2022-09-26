import ordinal from './ordinal';

const tests = [
  { number: 1, ordinal: '1st' },
  { number: 2, ordinal: '2nd' },
  { number: 3, ordinal: '3rd' },
  { number: 4, ordinal: '4th' },
  { number: 5, ordinal: '5th' },
  { number: 6, ordinal: '6th' },
  { number: 7, ordinal: '7th' },
  { number: 8, ordinal: '8th' },
  { number: 9, ordinal: '9th' },
  { number: 10, ordinal: '10th' },
  { number: 11, ordinal: '11th' },
  { number: 12, ordinal: '12th' },
  { number: 13, ordinal: '13th' },
  { number: 14, ordinal: '14th' },
  { number: 15, ordinal: '15th' },
  { number: 16, ordinal: '16th' },
  { number: 17, ordinal: '17th' },
  { number: 18, ordinal: '18th' },
  { number: 19, ordinal: '19th' },
  { number: 20, ordinal: '20th' },
  { number: 21, ordinal: '21st' },
  { number: 22, ordinal: '22nd' },
  { number: 23, ordinal: '23rd' },
  { number: 24, ordinal: '24th' },
  { number: 25, ordinal: '25th' },
  { number: 26, ordinal: '26th' },
  { number: 27, ordinal: '27th' },
  { number: 28, ordinal: '28th' },
  { number: 29, ordinal: '29th' },
  { number: 30, ordinal: '30th' },
  { number: 100, ordinal: '100th' },
  { number: 1000, ordinal: '1000th' },
  { number: 5003, ordinal: '5003rd' },
];

describe('testing ordinal', () => {
  for (const test of tests) {
    it(`ordinal(${test.number}) should return ${test.ordinal}`, () => {
      expect(ordinal(test.number)).toBe(test.ordinal);
    });
  }
});
