import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  IconButton,
  Input,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { MdFacebook } from "react-icons/md";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { NAV_ITEMS } from "../../utils/data";
import Logo from "../shared/Logo";
const Footer = () => {
  return (
    <>
      <Box py={5} bgColor={"brandBlue.900"} textColor={"white"}>
        <Container maxW={"container.lg"}>
          <VStack spacing={5} alignItems={{ base: "flex-start", sm: "center" }}>
            <Logo />
            <Text fontSize={"sm"} fontWeight={500}>
              Inscrivez-vous sur notre Newsletter !!
            </Text>
            <form autoComplete="off" noValidate>
              <HStack width={{ base: "250px", sm: "450px", md: "500px" }}>
                <Input
                  size={"sm"}
                  placeholder="Entrer votre adresse mail"
                  width={"60%"}
                />
                <Button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  as={"a"}
                  target="_blank"
                  cursor={"pointer"}
                  rel="noopener noreferrer"
                  variant={"solid"}
                  colorScheme="brandBlue"
                  size={"sm"}
                  width={{ base: "40%" }}
                >
                  S'inscrire
                </Button>
              </HStack>
            </form>
            <Flex
              gap={{ base: 2, sm: 5 }}
              direction={{ base: "column", sm: "row" }}
            >
              {NAV_ITEMS.map((navItem, index) => (
                <Link
                  isExternal={navItem.isExternal}
                  fontSize={"sm"}
                  as={NextLink}
                  key={index}
                  p={2}
                  href={navItem.href ?? "#"}
                  fontWeight={500}
                  _hover={{
                    color: "brandYellow.500",
                  }}
                >
                  {navItem.label}
                </Link>
              ))}
            </Flex>
            <Divider />

            <Flex
              gap={{ base: 5, md: 0 }}
              justifyContent={"space-between"}
              w={"100%"}
              alignItems={{ base: "flex-start", sm: "center" }}
              direction={{ base: "column", md: "row" }}
            >
              <Text fontSize={"sm"}>
                eVoting : la solution idéale pour des élections en ligne fiables
              </Text>

              {/*  */}

              <HStack>
                <IconButton
                  icon={<AiFillYoutube />}
                  variant={"solid"}
                  colorScheme="brandBlue"
                  size={"sm"}
                />
                <IconButton
                  icon={<MdFacebook />}
                  variant={"solid"}
                  colorScheme="brandBlue"
                  size={"sm"}
                />
                {/*  */}
                <IconButton
                  icon={<AiOutlineTwitter />}
                  variant={"solid"}
                  colorScheme="brandBlue"
                  size={"sm"}
                />
              </HStack>

              <Text fontSize={"sm"}>Copyrighted © 2023 eVoting</Text>
            </Flex>
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
