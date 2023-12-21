import express, { Request, Response, NextFunction } from "express";

import * as MealService from "./meal.service";

const router = express.Router();

router.get(
  "/byCategory/:categoryPublicId",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { categoryPublicId } = req.params;
      const mealsOfCategory = await MealService.getMealsByCategory(
        categoryPublicId
      );

      res.send(mealsOfCategory);
    } catch (error: any) {
      next(error);
    }
  }
);

router.get(
  "/:mealPublicId/detail",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { mealPublicId } = req.params;
      const mealDetail = await MealService.getMealDetailByPublicId(
        mealPublicId
      );
      res.send(mealDetail);
    } catch (error: any) {
      next(error);
    }
  }
);

export default router;
