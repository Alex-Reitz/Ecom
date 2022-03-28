import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import {
  useMeQuery,
  useLogoutMutation,
  useAllCategoriesQuery,
} from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({ pause: isServer() });
  const [cat] = useAllCategoriesQuery();
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
              <Heading color="white" fontSize="2rem" fontStyle={"italic"}>
                KeyBoard Warrior
              </Heading>
            </Link>
          </NextLink>
          <Box ml={"auto"}>{body}</Box>
        </Flex>
      </Flex>
      <Flex zIndex={1} position="sticky" top={0} bg="#FFF" p={3}>
        <Flex
          justify="space-between"
          flex={1}
          m="auto"
          align="center"
          maxW="50%"
        >
          <Box>
            <NextLink href="/">
              <Link>
                <Text fontSize="1.1rem">Home</Text>
              </Link>
            </NextLink>
          </Box>
          <Box>
            <NextLink href="/products">
              <Link>
                <Text fontSize="1rem">Products</Text>
              </Link>
            </NextLink>
          </Box>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.200" }}
              _expanded={{ bg: "gray.200" }}
              _focus={{ boxShadow: "outline" }}
              fontSize="1rem"
              borderColor="#000"
            >
              Categories <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="gray.200" p={0}>
              {cat?.data?.allCategories?.map((item) => (
                <MenuItem key={item.ID} _hover={{ bg: "#fff" }}>
                  {item.name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.200" }}
              _expanded={{ bg: "gray.200" }}
              _focus={{ boxShadow: "outline" }}
              fontSize="1rem"
              borderColor="#000"
            >
              Brands <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="gray.200" p={0}>
              <MenuItem borderRadius="md" _hover={{ bg: "#fff" }}>
                Keys+
              </MenuItem>
              <MenuItem borderRadius="md" _hover={{ bg: "#fff" }}>
                Plasma Board
              </MenuItem>
            </MenuList>
          </Menu>
          <Box>
            <NextLink href="/cart">
              <Link>
                <Text fontSize="1.1rem">Cart</Text>
              </Link>
            </NextLink>
          </Box>
          <Menu>
            <MenuButton
              px={4}
              py={2}
              transition="all 0.2s"
              borderRadius="md"
              borderWidth="1px"
              _hover={{ bg: "gray.200" }}
              _expanded={{ bg: "gray.200" }}
              _focus={{ boxShadow: "outline" }}
              fontSize="1rem"
              borderColor="#000"
            >
              Admin <ChevronDownIcon />
            </MenuButton>
            <MenuList bg="gray.200" p={0}>
              <NextLink href="Admin/product_admin">
                <Link color="black">
                  <MenuItem _hover={{ bg: "#fff" }}>Product Updates</MenuItem>
                </Link>
              </NextLink>
              <NextLink href="Admin/brand_admin">
                <Link color="black">
                  <MenuItem borderRadius="md" _hover={{ bg: "#fff" }}>
                    Brand Updates
                  </MenuItem>
                </Link>
              </NextLink>
            </MenuList>
          </Menu>
          <Box>
            <Button
              onClick={async () => {
                await logout();
                router.reload();
              }}
              fontSize={"1rem"}
              variant="outline"
              isLoading={logoutFetching}
              color="#000"
              borderColor="#000"
            >
              Logout
            </Button>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
