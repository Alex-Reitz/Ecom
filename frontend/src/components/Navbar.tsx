import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useMeQuery, useLogoutMutation } from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({ pause: isServer() });
  let body = null;

  if (fetching) {
    body = null;
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="login">
          <Link color="white" mr={2}>
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
  } else {
    body = (
      <Flex align="center" background="white" borderRadius={20}>
        <Input zIndex={0} placeholder="Search Products" />
      </Flex>
    );
  }

  return (
    <>
      <Flex zIndex={1} position="sticky" bg="#000" p={2}>
        <Flex flex={1} m="auto" align="center" maxW="95%">
          <NextLink href="/">
            <Link>
              <Heading color="white" fontStyle={"italic"}>
                KeyBoard
              </Heading>
            </Link>
          </NextLink>
          <Box ml={"auto"}>{body}</Box>
        </Flex>
      </Flex>
      <Flex zIndex={1} position="sticky" top={0} bg="#fff" p={3}>
        <Flex
          justify="space-between"
          flex={1}
          m="auto"
          align="center"
          maxW="50%"
        >
          <Box fontSize={"1.5rem"}>
            <NextLink href="/">
              <Link>
                <Text>Home</Text>
              </Link>
            </NextLink>
          </Box>
          <Box fontSize={"1.5rem"}>
            <NextLink href="/products">
              <Link>
                <Text>Products</Text>
              </Link>
            </NextLink>
          </Box>
          <Box fontSize={"1.5rem"}>
            <NextLink href="/categories">
              <Link>
                <Text>Categories</Text>
              </Link>
            </NextLink>
          </Box>
          <Box fontSize={"1.5rem"}>
            <NextLink href="/brands">
              <Link>
                <Text>Brands</Text>
              </Link>
            </NextLink>
          </Box>
          <Box fontSize={"1.5rem"}>
            <NextLink href="/cart">
              <Link>
                <Text>Cart</Text>
              </Link>
            </NextLink>
          </Box>
          <Box>
            <Button
              onClick={async () => {
                await logout();
                router.reload();
              }}
              fontSize={"1.2rem"}
              isLoading={logoutFetching}
              variant="outline"
              color="#000"
            >
              Logout
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
