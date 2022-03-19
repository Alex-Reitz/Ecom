import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Product_Category } from "./Product_Category";

@ObjectType()
@Entity()
export class Category extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  @OneToMany(
    () => Product_Category,
    (product_category) => product_category.category_id
  )
  category_id: Category;

  @Field()
  @Column({ unique: false })
  description!: string;
}
