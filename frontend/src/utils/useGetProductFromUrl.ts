import { useGetProductQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetProductFromUrl = () => {
  const intId = useGetIntId();
  console.log(parseInt(intId), typeof intId);
  return useGetProductQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
