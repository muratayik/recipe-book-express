import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import { AppDataSource } from "./config/data-source";

import CategoryController from "./category/category.controller";
import MealController from "./meal/meal.controller";
import AccountController from "./account/account.controller";
import FavoriteController from "./favorite/favorite.controller";

import ErrorHandler from "./error/error.middleware";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/account", AccountController);
app.use("/category", CategoryController);
app.use("/meal", MealController);
app.use("/favorite", FavoriteController);

app.use(ErrorHandler);

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => {
      console.log("Server is running on port: " + PORT);
    });
    console.log("Data Source has been initialized!");
  })
  .catch((error) => console.log(error));
