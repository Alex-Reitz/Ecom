import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Brand } from "./Brand";

@ObjectType()
@Entity()
export class Products extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  name!: string;

  @Field()
  @Column({ unique: false })
  description!: string;

  @Field()
  @Column({ unique: false })
  price!: number;

  @Field()
  @ManyToOne(() => Category, (category) => category.ID)
  category: Category;

  @Field()
  @ManyToOne(() => Brand, (brand) => brand.ID)
  brand: Brand;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
