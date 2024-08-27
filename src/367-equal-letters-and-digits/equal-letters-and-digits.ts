const hasEqualLettersAndDigits = (s: string): boolean => {
  const digits = s.match(/\d/g)?.length || 0;
  const letters = s.match(/[a-zA-Z]/g)?.length || 0;

  return digits === letters;
};

export const equalLettersAndDigits = (s: string): string => {
  let maxSubString = "";

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subString = s.substring(i, j + 1);
      if (hasEqualLettersAndDigits(subString) && subString.length > maxSubString.length) {
        maxSubString = subString;
      }
    }
  }

  return maxSubString;
};
