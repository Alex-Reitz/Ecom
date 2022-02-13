import { withUrqlClient } from "next-urql";
import { Layout } from "../components/Layout";
import { createUrqlClient } from "../utils/createUrqlClient";

const Index = () => {
  return <Layout>Home page</Layout>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
