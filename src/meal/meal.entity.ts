import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "public_id" })
  publicId: string;

  @Column()
  name: string;

  @Column({ name: "image_url" })
  imageUrl: string;

  @Column({ name: "youtube_url" })
  youtubeUrl: string;

  @Column({ name: "source_url" })
  sourceUrl: string;

  @Column({ name: "category_id" })
  categoryId: number;
}
