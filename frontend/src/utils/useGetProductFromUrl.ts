import { useGetProductQuery } from "../generated/graphql";
import { useGetIntId } from "./useGetIntId";

export const useGetProductFromUrl = () => {
  const intId = useGetIntId();
  return useGetProductQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
};
