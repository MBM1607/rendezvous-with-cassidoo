export const yahtzeeOptions = [
  "ones",
  "twos",
  "threes",
  "fours",
  "fives",
  "sixes",
  "three of a kind",
  "four of a kind",
  "full house",
  "small straight",
  "large straight",
  "chance",
  "yahtzee",
] as const;

export const numToOption = {
  1: "ones",
  2: "twos",
  3: "threes",
  4: "fours",
  5: "fives",
  6: "sixes",
} as const;

const smallStraightArrangements = ["1234", "2345", "3456"];

const largeStraightArrangements = ["12345", "23456"];

export type TYahtzeeOption = (typeof yahtzeeOptions)[number];

export const yahtzeeDiceSides = [1, 2, 3, 4, 5, 6] as const;
export type TYahtzeeDiceSide = (typeof yahtzeeDiceSides)[number];
export type TYahtzeeDiceRoll = [
  TYahtzeeDiceSide,
  TYahtzeeDiceSide,
  TYahtzeeDiceSide,
  TYahtzeeDiceSide,
  TYahtzeeDiceSide,
];

export const getOptionsFromDice = (dices: TYahtzeeDiceRoll): Set<TYahtzeeOption> => {
  const options = new Set<TYahtzeeOption>(["chance"]);
  const counter = new Map<TYahtzeeDiceSide, number>();

  yahtzeeDiceSides.forEach(side => {
    const count = dices.filter(dice => dice === side).length;
    counter.set(side, count);
  });

  const sortedDice = dices.sort().join("");

  smallStraightArrangements.forEach(arrangement => {
    if (sortedDice.includes(arrangement)) {
      options.add("small straight");
    }
  });

  largeStraightArrangements.forEach(arrangement => {
    if (sortedDice.includes(arrangement)) {
      options.add("large straight");
    }
  });

  counter.forEach((count, side) => {
    if (count === 0) return;

    options.add(numToOption[side]);

    if (count === 2) {
      const anyThreeOfAKind = Array.from(counter.values()).some(value => value >= 3);

      if (anyThreeOfAKind) {
        options.add("full house");
      }
    }
    if (count >= 3) {
      options.add("three of a kind");
    }
    if (count >= 4) {
      options.add("four of a kind");
    }
    if (count === 5) {
      options.add("yahtzee");
    }
  });

  return options;
};

export type TYahtzeeRoundResult = {
  dice: TYahtzeeDiceRoll;
  options: Set<TYahtzeeOption>;
};

export const yahtzeeRound = (): TYahtzeeRoundResult => {
  const dice = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 6) + 1,
  ) as TYahtzeeDiceRoll;

  const options = getOptionsFromDice(dice);

  return { dice, options };
};
