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
import { Product_Category } from "./Product_Category";

@ObjectType()
@Entity()
export class Products extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  @ManyToOne(
    () => Product_Category,
    (product_category) => product_category.product_id
  )
  product_category: Product_Category;

  @Field()
  @Column({ unique: true })
  name!: string;

  @Field()
  @Column({ unique: false })
  description!: string;

  @Field()
  @Column({ unique: false })
  price!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
