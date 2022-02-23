import { MyContext } from "src/types";
import { MiddlewareFn } from "type-graphql";

export const isAdmin: MiddlewareFn<MyContext> = ({ context }, next) => {
  console.log(context.req.session);
  if (context.req.session.isAdmin === "false") {
    throw new Error("not an admin");
  }
  return next();
};
