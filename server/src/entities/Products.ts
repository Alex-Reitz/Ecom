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
import { Product_Categories } from "./Product_Categories";

@ObjectType()
@Entity()
export class Products extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

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
  @ManyToOne(
    () => Product_Categories,
    (product_categories) => product_categories.product_id
  )
  product_categories: Product_Categories;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
