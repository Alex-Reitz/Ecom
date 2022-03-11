import React from "react";
import { Layout } from "../../components/Layout";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useAllProductsQuery } from "../../generated/graphql";

interface indexProps {}

const Products: React.FC<indexProps> = ({}) => {
  const [{ data }] = useAllProductsQuery();

  return (
    <Layout variant="small">
      {!data ? (
        <div>Loading...</div>
      ) : (
        data.allProducts?.map((p) => <div key={p.id}>{p.name}</div>)
      )}
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Products);
