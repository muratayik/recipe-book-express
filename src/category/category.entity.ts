import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "public_id" })
  publicId: string;

  @Column()
  name: string;

  @Column({ name: "image_url" })
  imageUrl: string;

  @Column()
  description: string;
}
