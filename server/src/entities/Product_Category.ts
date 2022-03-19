import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Category } from "./Category";
import { Products } from "./Products";

@ObjectType()
@Entity()
export class Product_Category extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => ID)
  @OneToMany(() => Products, (product) => product.product_category)
  product_id: Products[];

  @Field()
  @ManyToOne(() => Category, (category) => category.category_id)
  category_id: Category;
}
