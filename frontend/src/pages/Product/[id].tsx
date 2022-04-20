import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "../../components/Layout";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useGetProductFromUrl } from "../../utils/useGetProductFromUrl";

const Product = ({}) => {
  const [{ data, error, loading }] = useGetProductFromUrl();
  console.log(data);
  if (loading) {
    <Layout>
      <div>Loading</div>
    </Layout>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Product);
