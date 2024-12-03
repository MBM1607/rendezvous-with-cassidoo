export const rollCall = (reversedNames: string[]) =>
  reversedNames.map(name => name.split("").toReversed().join("")).sort();
