import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Products } from "../entities/Products";

@InputType()
class productInput {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  price: number;
}

@Resolver(Products)
export class productResolver {
  @Query(() => Products, { nullable: true })
  async allProducts() {
    const products = await Products.find();
    console.log(products);
    return products;
  }

  @Mutation(() => Products)
  async addProduct(@Arg("input") input: productInput): Promise<Products> {
    const product = Products.create({
      ...input,
    }).save();
    return product;
  }
}
