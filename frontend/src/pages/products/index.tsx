import React from "react";
import { Layout } from "../../components/Layout";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useAllProductsQuery } from "../../generated/graphql";

interface indexProps {}

const Products: React.FC<indexProps> = ({}) => {
  const [all, allProducts] = useAllProductsQuery();
  console.log(all, allProducts);

  return <Layout variant="small">Hello from Products</Layout>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Products);
