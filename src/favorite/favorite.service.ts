import { FavoriteRequest } from "./dto/favorite-request.dto";
import * as FavoriteRepository from "./favorite.repository";

import * as MealService from "../meal/meal.service";

export const getFavorites = async (email: string) =>
  FavoriteRepository.getFavorites(email);

export const addMealToFavorites = async (
  email: string,
  favoriteRequest: FavoriteRequest
) => {
  const { mealPublicId } = favoriteRequest;
  await MealService.getMealByPublicId(mealPublicId);

  const favorite = await FavoriteRepository.getFavorite(email, mealPublicId);

  return favorite
    ? favorite
    : await FavoriteRepository.createFavorite(email, mealPublicId);
};

export const removeFromFavorites = async (
  email: string,
  favoriteRequest: FavoriteRequest
) => {
  const { mealPublicId } = favoriteRequest;
  const favorite = await FavoriteRepository.getFavorite(email, mealPublicId);
  if (favorite) {
    await FavoriteRepository.removeFavorite(favorite);
  }
};
