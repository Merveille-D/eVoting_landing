import {
  Container,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Box, Button, ButtonGroup, Flex, Link, Spacer } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
} from "@chakra-ui/react";
import { NAV_ITEMS, links } from "../../utils/data";
import Logo from "../shared/Logo";

const NavBar = () => {
  const showTopNavbar = useBreakpointValue({
    base: false,
    lg: true,
  });

  const router = useRouter();

  return (
    <Box
      position="sticky"
      top="0"
      w="full"
      boxShadow={"md"}
      backgroundColor={"brandBlue.900"}
      zIndex={100}
      color={"white"}
    >
      <Container py={3} maxW={"container.lg"}>
        <HStack>
          {/* Logo  */}
          <Logo animate={true} />
          <Spacer />

          {showTopNavbar ? (
            <Flex gap={5}>
              {NAV_ITEMS.map((navItem, index) => (
                <Link
                  isExternal={navItem.isExternal}
                  fontSize={"sm"}
                  as={NextLink}
                  key={index}
                  p={2}
                  href={navItem.href ?? "#"}
                  fontWeight={500}
                  color={
                    router.asPath === navItem.href ? "brandYellow.500" : "white"
                  }
                  _hover={{
                    color: router.asPath === navItem.href ? "" : "gray.300",
                  }}
                >
                  {navItem.label}
                </Link>
              ))}
              <ButtonGroup gap="4">
                <Button
                  as={"a"}
                  target="_blank"
                  rel="noopener noreferrer"
                  size={"sm"}
                  colorScheme="brandGreen"
                  href={links.admin}
                  variant={"solid"}
                >
                  Créer un vote
                </Button>
                <Button
                  as={"a"}
                  target="_blank"
                  rel="noopener noreferrer"
                  size={"sm"}
                  colorScheme="brandYellow"
                  variant="link"
                  href={links.user}
                >
                  Voter
                </Button>
              </ButtonGroup>
            </Flex>
          ) : (
            <Hamburger />
          )}
        </HStack>
      </Container>
    </Box>
  );
};

export default NavBar;

const Hamburger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
    <>
      <IconButton
        my={2}
        aria-label="Menu"
        onClick={onOpen}
        variant={"outline"}
        colorScheme="white"
        size={"sm"}
      >
        <AiOutlineMenu />
      </IconButton>

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            boxShadow={"sm"}
            bgColor={"brandBlue.900"}
            color={"white"}
          >
            <HStack justifyContent={"space-between"}>
              <Text fontSize={"sm"}>Menu</Text>
              <IconButton
                my={2}
                aria-label="CloseButton"
                onClick={onClose}
                variant={"outline"}
                colorScheme="white"
                size={"sm"}
              >
                <AiOutlineClose />
              </IconButton>
            </HStack>
          </DrawerHeader>

          <DrawerBody>
            <VStack gap={2}>
              {NAV_ITEMS.map((navItem, index) => (
                <Button
                  target={navItem.isExternal ? "_blank" : ""}
                  rel={navItem.isExternal ? "noopener noreferrer" : ""}
                  width={"100%"}
                  size={"sm"}
                  as={NextLink}
                  key={index}
                  href={navItem.href ?? "#"}
                  variant={router.asPath === navItem.href ? "outline" : "ghost"}
                  colorScheme={
                    router.asPath === navItem.href ? "brandYellow" : ""
                  }
                  onClick={onClose}
                >
                  {navItem.label}
                </Button>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <ButtonGroup width={"full"} justifyContent={"space-around"}>
              <Button
                as={"a"}
                target="_blank"
                rel="noopener noreferrer"
                size={"sm"}
                colorScheme="brandGreen"
                href={links.admin}
                variant={"solid"}
              >
                Créer un vote
              </Button>
              <Button
                as={"a"}
                target="_blank"
                rel="noopener noreferrer"
                size={"sm"}
                colorScheme="brandYellow"
                variant="link"
                href={links.user}
              >
                Voter
              </Button>
            </ButtonGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
