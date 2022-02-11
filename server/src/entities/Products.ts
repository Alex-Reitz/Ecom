import { ObjectType, Field } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from "typeorm";

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
  @Column({ unique: true })
  Category_id!: number;

  @Field()
  @Column({ unique: true })
  Inventory_id!: number;

  @Field()
  @Column({ unique: false })
  Price!: number;

  @Field()
  @Column({ unique: true })
  Discount_id!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
