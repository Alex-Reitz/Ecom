import { Box, Button, Select, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import { Layout } from "../../components/Layout";
import {
  useAddProductMutation,
  useAllCategoriesQuery,
} from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";

interface indexProps {}
//Form that takes in information about a product, name, description, sku, category, inventory, price
//Only admin can add a new product or add new category, make middleware to check isAdmin

const Admin: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [value, setValue] = useState(1);
  const [, addProduct] = useAddProductMutation();
  const [cat] = useAllCategoriesQuery();

  return (
    <Layout>
      <Box
        display={"flex"}
        flexDirection="column"
        alignItems="center"
        width={"100%"}
      >
        <Box>
          <Text fontSize={22} display={"flex"} justifyContent={"center"}>
            Add a Product
          </Text>
        </Box>
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: null,
            category: value,
          }}
          onSubmit={async (values) => {
            const response = await addProduct({
              input: {
                name: values.name,
                description: values.description,
                price: parseInt(values.price),
                category: parseInt(value),
              },
            });
            console.log(response);
            router.push("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField
                width={"40vw"}
                name="name"
                placeholder="Name"
                label="Name"
              />
              <Box mt={4}>
                <InputField
                  textarea
                  name="description"
                  placeholder="description..."
                  label="Description"
                />
                <Select
                  pt={2}
                  pb={2}
                  onChange={(e) => setValue(e.target.value)}
                  name="select"
                >
                  {cat.data?.allCategories.map((item) => (
                    <option value={item.ID}>{item.name}</option>
                  ))}
                </Select>
                <InputField name="price" label="Price" />
              </Box>
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                colorScheme={"teal"}
              >
                Add Product
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Admin);
