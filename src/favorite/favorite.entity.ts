import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Favorite {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column({ name: "meal_id" })
  mealPublicId: string;
}
