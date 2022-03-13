import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "../../components/Layout";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { useRouter } from "next/router";
import { InputField } from "../../components/InputField";
import { useAddProductMutation } from "../../generated/graphql";

interface indexProps {}
//Form that takes in information about a product, name, description, sku, category, inventory, price
//Only admin can add a new product, make middleware to check isAdmin

const Admin: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, addProduct] = useAddProductMutation();

  return (
    <Layout variant="small">
      <Formik
        initialValues={{ name: "", description: "", price: 0 }}
        onSubmit={async (values) => {
          console.log(values);
          const response = await addProduct({
            input: {
              name: values.name,
              description: values.description,
              price: parseInt(values.price),
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
