import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { AppDataSource } from "./config/data-source";

import CategoryController from "./category/category.controller";
import MealController from "./meal/meal.controller";

const app = express();

app.use("/category", CategoryController);
app.use("/meal", MealController);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on port: " + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
