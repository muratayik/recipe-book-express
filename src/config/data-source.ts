import { DataSource } from "typeorm";
import { Category } from "../category/category.entity";
import { Meal } from "../meal/meal.entity";
import { Ingredient } from "../ingredient/ingredient.entity";
import { Instruction } from "../instruction/instruction.entity";

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: parseInt(DB_PORT || "5432"),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [Category, Meal, Ingredient, Instruction],
});
