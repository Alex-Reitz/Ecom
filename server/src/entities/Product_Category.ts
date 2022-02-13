import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Products } from "./Products";

@ObjectType()
@Entity()
export class Product_Category extends BaseEntity {
  @Field()
  @ManyToOne(() => Products, (products) => products.category_id)
  id: Products;

  @Field()
  @Column({ unique: true })
  Name!: string;

  @Field()
  @Column({ unique: false })
  Description!: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
