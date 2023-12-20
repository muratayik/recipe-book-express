import * as CategoryRepository from "./category.repository";

export const getCategories = async () =>
  await CategoryRepository.getCategories();

export const getCategory = async (id: number) => {
  const category = await CategoryRepository.getCategory(id);
  if (!category) {
    throw new Error(`Category with id ${id} not found!`);
  }
  return category;
};

export const getCategoryFromPublicId = async (categoryPublicId: string) => {
  const category = await CategoryRepository.getCategoryByPublicId(
    categoryPublicId
  );
  if (!category) {
    throw new Error(`Category with public id ${categoryPublicId} not found!`);
  }

  return category;
};
