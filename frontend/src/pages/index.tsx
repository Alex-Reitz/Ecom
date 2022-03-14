import { Box, Text } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import { Layout } from "../components/Layout";
import { createUrqlClient } from "../utils/createUrqlClient";
import Image from "next/image";
import background from "../Images/home_page_background.webp";

const Index = () => {
  return (
    <Layout>
      <Box display={"flex"} width={"100rem"}>
        <Image
          src={background}
          alt="background of keyboard"
          objectFit="cover"
          height={"350px"}
        />
      </Box>
      <Box display={"flex"} justifyContent="center" width="100vw">
        <Text fontSize={22} mt={8}>
          Best Selling Keyboards
        </Text>
      </Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
