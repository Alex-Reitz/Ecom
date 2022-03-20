import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entities/Category";

@InputType()
class CategoryInput {
  @Field()
  name: string;
  @Field()
  description: string;
}

@Resolver(Category)
export class categoryResolver {
  @Query(() => [Category], { nullable: true })
  async allCategories() {
    return await Category.find();
  }

  @Mutation(() => Category)
  async addCategory(@Arg("input") input: CategoryInput): Promise<Category> {
    console.log(input);
    return Category.create({
      ...input,
    }).save();
  }
}
