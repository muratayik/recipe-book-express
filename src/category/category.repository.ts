import { AppDataSource } from "../config/data-source";
import { Category } from "./category.entity";

const createRepository = () => AppDataSource.getRepository(Category);

export const getCategories = () => createRepository().find({});
