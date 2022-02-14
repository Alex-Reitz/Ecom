import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products";

@ObjectType()
@Entity()
export class Product_Inventory extends BaseEntity {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Products, (products) => products.inventory_id)
  id: Products;

  @Field()
  @Column({ unique: true })
  Quantity!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
