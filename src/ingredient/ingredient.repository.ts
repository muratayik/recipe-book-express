import { AppDataSource } from "../config/data-source";
import { Ingredient } from "./ingredient.entity";

const createRepository = () => AppDataSource.getRepository(Ingredient);

export const getIngredientsOfMeal = (mealId: number) =>
  createRepository().findBy({ mealId });
