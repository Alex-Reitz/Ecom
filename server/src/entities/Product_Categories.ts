import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";

@ObjectType()
@Entity()
export class Product_Categories extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @OneToMany(() => Products, (product) => product.product_categories)
  product: Products[];

  @Field()
  @Column({ unique: true })
  category_id!: number;
}
