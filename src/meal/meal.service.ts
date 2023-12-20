import * as MealRepository from "./meal.repository";
import * as CategoryService from "../category/category.service";
import * as IngredientService from "../ingredient/ingredient.service";
import * as InstructionService from "../instruction/instruction.service";
import { MealDetailDTO } from "./dto/meal-detail.dto";

export const getMealsByCategory = async (categoryPublicId: string) => {
  const category = await CategoryService.getCategoryFromPublicId(
    categoryPublicId
  );
  return await MealRepository.getByCategoryId(category.id);
};

export const getMealDetailByPublicId = async (
  mealPublicId: string
): Promise<MealDetailDTO> => {
  const meal = await MealRepository.getMealByPublicId(mealPublicId);
  if (!meal) {
    throw new Error(`Meal with public id ${mealPublicId} not found!!!`);
  }
  const category = await CategoryService.getCategory(meal.categoryId);
  const ingredientList = await IngredientService.getIngredientsOfMeal(meal.id);
  const instructionList = await InstructionService.getInstructionsOfMeal(
    meal.id
  );

  return {
    mealInfo: meal,
    categoryInfo: category,
    instructions: instructionList,
    ingredients: ingredientList,
  };
};