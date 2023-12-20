import { AppDataSource } from "../config/data-source";
import { Meal } from "./meal.entity";

const createRepository = () => AppDataSource.getRepository(Meal);

export const getByCategoryId = (categoryId: number) =>
  createRepository().findBy({ categoryId });

export const getMealByPublicId = (publicId: string) =>
  createRepository().findOneBy({ publicId });
