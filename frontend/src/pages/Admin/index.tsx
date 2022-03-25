import { Box, Button, Select } from "@chakra-ui/react";
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
    <Layout variant="small">
      <Formik
        initialValues={{ name: "", description: "", price: 0, category: value }}
        onSubmit={async (values) => {
          console.log(values);
          const response = await addProduct({
            input: {
              name: values.name,
              description: values.description,
              price: parseInt(values.price),
              category: parseInt(value),
            },
          });
          console.log(response);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField name="name" placeholder="Name" label="Name" />
            <Box mt={4}>
              <InputField
                textarea
                name="description"
                placeholder="description..."
                label="Description"
              />
              <Select onChange={(e) => setValue(e.target.value)} name="select">
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
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Admin);
