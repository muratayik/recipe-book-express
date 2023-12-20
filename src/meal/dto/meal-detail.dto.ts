import { Category } from "../../category/category.entity";
import { Ingredient } from "../../ingredient/ingredient.entity";
import { Instruction } from "../../instruction/instruction.entity";
import { Meal } from "../meal.entity";

export class MealDetailDTO {
  mealInfo: Meal;
  categoryInfo: Category;
  instructions: Instruction[];
  ingredients: Ingredient[];
}
