import { isAdmin } from "../middleware/isAdmin";
import {
  Ctx,
  Query,
  Resolver,
  Mutation,
  Arg,
  UseMiddleware,
  InputType,
  Field,
} from "type-graphql";
import { Products } from "../entities/Products";
import { MyContext } from "../types";

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
  allProducts(@Ctx() { req }: MyContext) {
    return Products.find(req.session.userId);
  }

  @Mutation(() => Products)
  @UseMiddleware(isAdmin)
  async addProduct(@Arg("input") input: productInput): Promise<Products> {
    return Products.create({
      ...input,
    }).save();
  }
}
