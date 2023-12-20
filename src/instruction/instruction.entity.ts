import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Instruction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  sequence: number;

  @Column()
  step: string;

  @Column({ name: "meal_id" })
  mealId: number;
}
