import { create } from "domain";
import { AppDataSource } from "../config/data-source";
import { Favorite } from "./favorite.entity";

const createRepository = () => AppDataSource.getRepository(Favorite);

export const getFavorites = (email: string) =>
  createRepository().findBy({ email });

export const getFavorite = (email: string, mealPublicId: string) =>
  createRepository().findOneBy({ email, mealPublicId });

export const createFavorite = async (email: string, mealPublicId: string) => {
  const favoriteRepository = createRepository();
  const favorite = favoriteRepository.create();

  favorite.email = email;
  favorite.mealPublicId = mealPublicId;

  await favoriteRepository.save(favorite);
  return favorite;
};

export const removeFavorite = (favorite: Favorite) =>
  createRepository().remove(favorite);
