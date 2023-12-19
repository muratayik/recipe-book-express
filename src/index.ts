import express from "express";
import dotenv from "dotenv";

import CategoryController from "./category/category.controller";
import MealController from "./meal/meal.controller";

dotenv.config();

const app = express();

app.use("/category", CategoryController);
app.use("/meal", MealController);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
