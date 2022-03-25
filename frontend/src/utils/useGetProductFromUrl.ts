import { useRouter } from "next/router";
import { useGetIntId } from "./useGetIntId";

export const useGetProductFromUrl = () => {
  const intId = useGetIntId();
};
