import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ToolCard = ({ title, description, link, image, shadow = false }) => {
  const imageSrc = image;
  return (
    <Card
      variant="outline"
      align={"center"}
      h="100%"
      boxShadow={shadow ? "xl" : ""}
      _hover={{ boxShadow: shadow ? "" : "xl" }}
    >
      <CardBody w={"100%"} p={4}>
        <VStack
          w={"100%"}
          h="100%"
          justifyContent="space-between"
          alignItems={"center"}
          gap={2}
        >
          <div style={{ width: "100%", height: "10rem", position: "relative" }}>
            <Image
              loading="eager"
              priority={true}
              formats={["auto", "webp", "avif"]}
              src={imageSrc}
              alt="Accessibility Section Image"
              placeholder="blur"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          <Heading
            textAlign={"center"}
            noOfLines={1}
            colorScheme={"blue"}
            size="sm"
          >
            {title}
          </Heading>

          <Text fontSize={"sm"} textAlign={"center"} noOfLines={3}>
            {description}
          </Text>

          <CardFooter>
            <Button
              colorScheme="blue"
              size={"sm"}
              variant={"link"}
              rightIcon={<AiOutlineArrowRight />}
            >
              En savoir plus
            </Button>
          </CardFooter>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default ToolCard;
