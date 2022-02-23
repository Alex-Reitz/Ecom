import React from "react";
import { Layout } from "../../components/Layout";
import { withUrqlClient } from "next-urql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

interface indexProps {}
//Form that takes in information about a product, name, description, sku, category, inventory, price
//Only admin can add a new product, make middleware to check isAdmin
const Admin: React.FC<indexProps> = ({}) => {
  function validateName(value) {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value.toLowerCase() !== "naruto") {
      error = "Jeez! You're not a fan 😱";
    }
    return error;
  }

  return (
    <Layout variant="small">
      <Heading>Add a Product</Heading>
      <Formik
        initialValues={{}}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Field name="product_name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="product_name">Product Name</FormLabel>
                  <Input
                    {...field}
                    id="product_name"
                    placeholder="Product Name"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="description" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Description</FormLabel>
                  <Input
                    {...field}
                    id="description"
                    placeholder="description"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Admin);
