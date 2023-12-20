import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: string;

  @Column({ name: "meal_id" })
  mealId: number;
}
