import { FavoriteRequest } from "./dto/favorite-request.dto";
import * as FavoriteRepository from "./favorite.repository";

import * as MealService from "../meal/meal.service";

export const getFavorites = async (email: string) => {
  const favoriteList = await FavoriteRepository.getFavorites(email);
  if (!favoriteList.length) return [];

  const mealPublicIdList = favoriteList.map((f) => f.mealPublicId);
  const mealList = await MealService.getMultipleMealsByPublicId(
    mealPublicIdList
  );

  return mealList;
};

export const addMealToFavorites = async (
  email: string,
  favoriteRequest: FavoriteRequest
) => {
  const { mealPublicId } = favoriteRequest;
  await MealService.getMealByPublicId(mealPublicId);

  const favorite = await FavoriteRepository.getFavorite(email, mealPublicId);

  if (!favorite) {
    await FavoriteRepository.createFavorite(email, mealPublicId);
  }

  const mealByPublicId = await MealService.getMealByPublicId(mealPublicId);
  return mealByPublicId;
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

  const mealByPublicId = await MealService.getMealByPublicId(mealPublicId);
  return mealByPublicId;
};
