import { AppDataSource } from "../config/data-source";
import { Instruction } from "./instruction.entity";

const createRepository = () => AppDataSource.getRepository(Instruction);

export const getInstructionsOfMeal = (mealId: number) =>
  createRepository().findBy({ mealId });
