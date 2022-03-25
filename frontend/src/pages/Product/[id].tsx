import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "../../components/Layout";
import { createUrqlClient } from "../../utils/createUrqlClient";

const Product = ({}) => {
  return (
    <Layout>
      <div>Loading</div>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Product);
