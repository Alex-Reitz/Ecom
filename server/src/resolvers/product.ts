import { isAdmin } from "../middleware/isAdmin";
import {
  Arg,
  Field,
  InputType,
  Mutation,
  Query,
  Resolver,
  UseMiddleware,
  Int,
} from "type-graphql";
import { Products } from "../entities/Products";

@InputType()
class ProductInput {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  category: number;
  @Field()
  brand: number;
  @Field()
  price: number;
}

@Resolver(Products)
export class productResolver {
  @Query(() => [Products], { nullable: true })
  async allProducts() {
    return await Products.find({ relations: ["category", "brand"] });
  }

  @Mutation(() => Products)
  @UseMiddleware(isAdmin)
  async addProduct(@Arg("input") input: ProductInput): Promise<Products> {
    return Products.create({
      ...input,
    }).save();
  }

  @Query(() => Products, { nullable: true })
  product(@Arg("id", () => Int) id: number): Promise<Products | undefined> {
    console.log(
      "Here is the product",
      Products.findOne(id, { relations: ["category", "brand"] })
    );
    return Products.findOne(id, { relations: ["category", "brand"] });
  }
}
