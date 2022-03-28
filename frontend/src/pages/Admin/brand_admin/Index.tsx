import { Box, Button, Text } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React from "react";
import { InputField } from "../../../components/InputField";
import { Layout } from "../../../components/Layout";
import { useAddBrandMutation } from "../../../generated/graphql";
import { createUrqlClient } from "../../../utils/createUrqlClient";

interface indexProps {}

const BrandAdmin: React.FC<{}> = ({}) => {
  const router = useRouter();
  const [, addBrand] = useAddBrandMutation();

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
            Add a Brand
          </Text>
        </Box>
        <Formik
          initialValues={{
            name: "",
            description: "",
          }}
          onSubmit={async (values) => {
            const response = await addBrand({
              input: {
                name: values.name,
                description: values.description,
              },
            });
            console.log(response);
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
              </Box>
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                colorScheme={"teal"}
              >
                Add Brand
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(BrandAdmin);
