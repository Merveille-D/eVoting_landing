import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { links } from "../../../utils/data";
import ContainerWrapper from "../../shared/ContainerWrapper";
import Image from "next/image";

const Item = ({ imageSrc, label, description }) => {
  console.log(imageSrc);
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "100vw",
        minHeight: "600px",
        width: "100%",
        color: "black",
      }}
    >
      <Image
        fill
        loading="eager"
        priority={true}
        formats={["auto", "webp", "avif"]}
        src={imageSrc}
        placeholder="blur"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
        }}
        alt="Carousel Image"
      />

      <ContainerWrapper>
        <VStack
          width={{ base: "100%" }}
          maxW={"500px"}
          padding={[5, 10]}
          bgColor={"white"}
          boxShadow={"md"}
          borderRadius={"md"}
        >
          <VStack alignItems={{ base: "flex-start" }} gap={5}>
            <Heading size={"lg"}>{label}</Heading>
            <Text fontSize={"sm"}>{description}</Text>
            <Flex
              gap="4"
              alignItems={{ base: "flex-start", md: "center" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <Button
                as={"a"}
                target="_blank"
                rel="noopener noreferrer"
                size={{ base: "sm" }}
                colorScheme="brandRed"
                href={links.admin}
                variant={"outline"}
              >
                Je suis une organisation
              </Button>
              <Button
                as={"a"}
                target="_blank"
                rel="noopener noreferrer"
                href={links.user}
                size={{ base: "sm" }}
                colorScheme="brandGreen"
              >
                Je suis électeur
              </Button>
            </Flex>
          </VStack>
        </VStack>
      </ContainerWrapper>
    </div>
  );
};

export default Item;
