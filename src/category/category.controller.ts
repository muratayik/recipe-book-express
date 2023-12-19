import express, { Request, Response } from "express";

import * as CategoryService from "./category.service";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const categories = await CategoryService.getCategories();
  res.send(categories);
});

export default router;
