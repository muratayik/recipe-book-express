import { AppDataSource } from "../config/data-source";
import { Category } from "./category.entity";

const createRepository = () => AppDataSource.getRepository(Category);

export const getCategories = () => createRepository().find({});

export const getCategory = (id: number) => createRepository().findOneBy({ id });

export const getCategoryByPublicId = (categoryPublicId: string) =>
  createRepository().findOneBy({ publicId: categoryPublicId });
