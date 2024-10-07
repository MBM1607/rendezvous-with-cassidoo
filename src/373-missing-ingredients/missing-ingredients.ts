export type TIngredients = {
  name: string;
  expirationDate: string;
};

export const missingIngredients = (recipe: string[], pantry: TIngredients[]): number => {
  let missingIngredients = 0;
  const currentDate = new Date().toISOString();

  recipe.forEach(ingredient => {
    const foundIngredient = pantry.find(
      item => item.name === ingredient && item.expirationDate >= currentDate,
    );

    if (!foundIngredient) {
      missingIngredients++;
    }
  });

  return missingIngredients;
};
