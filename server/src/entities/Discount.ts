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
