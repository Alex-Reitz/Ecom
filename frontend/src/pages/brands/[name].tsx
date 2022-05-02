import React from "react";
import { Layout } from "../../components/Layout";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useRouter } from "next/router";

interface indexProps {}

const Brands: React.FC<indexProps> = ({}) => {
  const router = useRouter();
  const { name } = router.query;
  return <Layout variant="small">Hello from {name}</Layout>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Brands);
