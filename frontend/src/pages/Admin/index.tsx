import React from "react";
import { Layout } from "../../components/Layout";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";

interface indexProps {}
//Form that takes in information about a product, name, description, sku, category, inventory, price
//Only admin can add a new product, make middleware to check isAdmin
const Admin: React.FC<indexProps> = ({}) => {
  return <Layout variant="regular"></Layout>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Admin);
