import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToMany,
  OneToOne,
} from "typeorm";
import { Product_Category } from "./Product_Category";
import { Discount } from "./Discount";
import { Product_Inventory } from "./Product_Inventory";

@ObjectType()
@Entity()
export class Products extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column({ unique: true })
  Name!: string;

  @Field()
  @Column({ unique: false })
  Description!: string;

  @Field()
  @Column({ unique: true })
  SKU!: string;

  @Field()
  @OneToMany(() => Product_Category, (product_category) => product_category.id)
  category_id: Product_Category;

  @Field()
  @OneToOne(
    () => Product_Inventory,
    (product_inventory) => product_inventory.id
  )
  inventory_id: Product_Inventory;

  @Field()
  @Column({ unique: false })
  Price!: number;

  @Field()
  @OneToMany(() => Discount, (discount) => discount.id)
  discount_id: Discount;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
