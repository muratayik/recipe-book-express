import * as IngredientRepository from "./ingredient.repository";

export const getIngredientsOfMeal = (mealId: number) =>
  IngredientRepository.getIngredientsOfMeal(mealId);
