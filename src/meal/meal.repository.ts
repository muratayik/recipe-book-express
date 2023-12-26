import { In } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Meal } from "./meal.entity";

const createRepository = () => AppDataSource.getRepository(Meal);

export const getByCategoryId = (categoryId: number) =>
  createRepository().findBy({ categoryId });

export const getMealByPublicId = (publicId: string) =>
  createRepository().findOneBy({ publicId });

export const getMultipleMealsByPublicId = (mealPublicIdList: string[]) =>
  createRepository().find({ where: { publicId: In([...mealPublicIdList]) } });
