import express, { Request, Response, NextFunction } from "express";

import { extractAccountInfoFromToken } from "./token.middleware";
import * as FavoriteService from "./favorite.service";

const router = express.Router();

router.use(extractAccountInfoFromToken);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const favoriteList = await FavoriteService.getFavorites(req.email);
    res.send(favoriteList);
  } catch (error) {
    next(error);
  }
});

router.post("/add", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const favorite = await FavoriteService.addMealToFavorites(
      req.email,
      req.body
    );

    res.send(favorite);
  } catch (error) {
    next(error);
  }
});

router.post(
  "/remove",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const favorite = await FavoriteService.removeFromFavorites(
        req.email,
        req.body
      );

      res.send(favorite);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
