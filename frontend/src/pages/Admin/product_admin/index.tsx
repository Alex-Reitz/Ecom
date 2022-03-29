import { Box, Button, Select, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../../components/InputField";
import { Layout } from "../../../components/Layout";
import {
  useAddProductMutation,
  useAllBrandsQuery,
  useAllCategoriesQuery,
} from "../../../generated/graphql";
import { createUrqlClient } from "../../../utils/createUrqlClient";

interface indexProps {}

const ProductAdmin: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [category, setCategory] = useState(1);
  const [brand, setBrand] = useState(1);
  const [, addProduct] = useAddProductMutation();
  const [cat] = useAllCategoriesQuery();
  const [brands] = useAllBrandsQuery();
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
            price: 0,
            category: category,
            brand: brand,
          }}
          onSubmit={async (values) => {
            const response = await addProduct({
              input: {
                name: values.name,
                description: values.description,
                price: parseInt(values.price),
                category: parseInt(category),
                brand: parseInt(brand),
              },
            });
            console.log(values, response);
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
                  placeholder="Select Category"
                  onChange={(e) => setCategory(parseInt(e.target.value))}
                  name="category"
                >
                  {cat?.data?.allCategories?.map((cat) => (
                    <option key={cat.ID} value={cat.ID}>
                      {cat.name}
                    </option>
                  ))}
                </Select>
                <Select
                  pt={2}
                  pb={2}
                  placeholder="Select Brand"
                  onChange={(e) => setBrand(e.target.value)}
                  name="brand"
                >
                  {brands?.data?.allBrands?.map((brand) => (
                    <option key={brand.ID} value={brand.ID}>
                      {brand.name}
                    </option>
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

export default withUrqlClient(createUrqlClient, { ssr: true })(ProductAdmin);
