import {
  Box,
  Button,
  Divider,
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
  useAllBrandsQuery,
} from "../generated/graphql";
import { isServer } from "../utils/isServer";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Image from "next/image";
import logo from "../Images/logo.png";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const router = useRouter();
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery({ pause: isServer() });
  const [cat] = useAllCategoriesQuery();
  const [brands] = useAllBrandsQuery();
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
      <Flex align="center" background="white" borderRadius={10}>
        <Input
          color="#000"
          zIndex={0}
          placeholder="Search Products"
          width={"300px"}
          p={2}
        />
      </Flex>
    );
  }

  return (
    <>
      <Flex zIndex={1} position="sticky" bg="#fff" p={4}>
        <Flex flex={1} m="auto" align="center" maxW="95%">
          <NextLink href="/">
            <Link>
              <Heading
                display={"flex"}
                alignItems={"center"}
                color="#000"
                fontSize="2rem"
                fontStyle={"italic"}
                p={1}
              >
                <Image
                  src={logo}
                  alt="keyboard logo"
                  height={"40px"}
                  width={"40px"}
                />
                KeyBoard Warrior
              </Heading>
            </Link>
          </NextLink>
          <Box ml={"auto"}>{body}</Box>
        </Flex>
      </Flex>
      <Divider />
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
              {brands?.data?.allBrands?.map((brand) => (
                <Link
                  href={`/brands/${encodeURIComponent(brand.name)}`}
                  color="black"
                >
                  <MenuItem key={brand.ID} _hover={{ bg: "#fff" }}>
                    {brand.name}
                  </MenuItem>
                </Link>
              ))}
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
              <Link href="Product_admin" color="black">
                <MenuItem _hover={{ bg: "#fff" }}>Product Updates</MenuItem>
              </Link>
              <Link href="Brand_admin" color="black">
                <MenuItem borderRadius="md" _hover={{ bg: "#fff" }}>
                  Brand Updates
                </MenuItem>
              </Link>
              <Link href="Category_admin" color="black">
                <MenuItem _hover={{ bg: "#fff" }}>Category Updates</MenuItem>
              </Link>
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
