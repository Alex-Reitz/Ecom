import React from "react";
import { Layout } from "../../components/Layout";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";

interface indexProps {}

const Categories: React.FC<indexProps> = ({}) => {
  return <Layout variant="small">Hello from categories</Layout>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Categories);
