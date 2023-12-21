import express, { Request, Response, NextFunction } from "express";

import * as CategoryService from "./category.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categories = await CategoryService.getCategories();
    res.send(categories);
  } catch (error: any) {
    next(error);
  }
});

export default router;
