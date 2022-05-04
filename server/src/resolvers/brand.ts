import {
  Arg,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { Brand } from "../entities/Brand";

@InputType()
class BrandInput {
  @Field()
  name: string;
  @Field()
  description: string;
}

@Resolver(Brand)
export class BrandResolver {
  @Query(() => [Brand], { nullable: true })
  async allBrands() {
    return await Brand.find();
  }

  @Mutation(() => Brand)
  async addBrand(@Arg("input") input: BrandInput): Promise<Brand> {
    return Brand.create({
      ...input,
    }).save();
  }

  @Query(() => Brand, { nullable: true })
  async brand(@Arg("id", () => Int) id: number): Promise<Brand | undefined> {
    console.log("Here is the brand", await Brand.findOne(id));
    return await Brand.findOne(id);
  }
}
