import React from "react";
import { Layout } from "../../components/Layout";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useAllProductsQuery } from "../../generated/graphql";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

interface indexProps {}

const Products: React.FC<indexProps> = ({}) => {
  const [{ data }] = useAllProductsQuery();

  return (
    <Layout variant="small">
      <Grid templateColumns="repeat(5, 1fr)" gap={6} width={"99vw"}>
        {!data ? (
          <Box>
            <Text>Loading...</Text>
          </Box>
        ) : (
          data.allProducts?.map((p) => (
            <GridItem w="100%" p={3}>
              <Center py={12}>
                <Box
                  p={6}
                  maxW={"330px"}
                  bg={useColorModeValue("white", "blue.400")}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  zIndex={-1}
                >
                  <Box
                    rounded={"lg"}
                    mt={1}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url()`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      {p.id}
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      {p.name}
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text fontWeight={800} fontSize={"xl"}>
                        ${p.price}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>
            </GridItem>
          ))
        )}
      </Grid>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Products);
