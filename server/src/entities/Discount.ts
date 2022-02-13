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
export class Discount extends BaseEntity {
  @Field()
  @ManyToOne(() => Products, (products) => products.discount_id)
  id: Products;

  @Field()
  @Column({ unique: true })
  Name!: string;

  @Field()
  @Column({ unique: false })
  Description!: string;

  @Field()
  @Column({ unique: true })
  Discount_percent!: number;

  @Field()
  @Column({ unique: true })
  Active!: Boolean;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
