import { Ctx, Query, Resolver } from "type-graphql";
import { Products } from "../entities/Products";
import { MyContext } from "../types";

@Resolver(Products)
export class productResolver {
  @Query(() => Products, { nullable: true })
  allProducts(@Ctx() { req }: MyContext) {
    return Products.findOne(req.session.userId);
  }
}
