import * as CategoryRepository from "./category.repository";

export const getCategories = async () =>
  await CategoryRepository.getCategories();
