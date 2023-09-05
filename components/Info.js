import {
  Box,
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MdCheckCircle } from "react-icons/md";

export const Info = ({
  reverse,
  title,
  description,
  button,
  background,
  imageSrc,
  steps,
}) => {
  return (
    <Box py={4} bgColor={background ? "gray.200" : ""}>
      <Container maxW={"container.lg"}>
        <Flex
          minH={"500px"}
          alignItems={"center"}
          flexDirection={{
            base: "column-reverse",
            md: reverse ? "row-reverse" : "row",
          }}
          gap={6}
        >
          <VStack
            alignItems={{ base: "center", md: "flex-start" }}
            maxW={{ base: "100%", md: "500px" }}
            minW={"300px"}
            gap={3}
            p={{ base: 6, md: 0 }}
          >
            <VStack alignItems={{ base: "center", md: "flex-start" }}>
              <Heading textAlign={{ base: "center", md: "left" }} size={"md"}>
                {title}
              </Heading>
              <Box width="49px" height="2px" bgColor="brandBlue.400" />
            </VStack>
            <Text fontSize={"sm"} textAlign={{ base: "center", md: "left" }}>
              {description}
            </Text>

            <List spacing={3}>
              {steps.map((step, index) => {
                return (
                  <div key={index}>
                    <ListItem fontSize={"sm"} fontWeight={500}>
                      <ListIcon as={MdCheckCircle} color="brandGreen.500" />
                      {step}
                    </ListItem>
                  </div>
                );
              })}
            </List>
            <Button
              as={"a"}
              target="_blank"
              rel="noopener noreferrer"
              size={"sm"}
              colorScheme={button.color}
              href={button.link}
              variant={"outline"}
            >
              {button.label}
            </Button>
          </VStack>
          <Spacer />

          <motion.div
            initial={{ x: reverse ? -200 : 200 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            style={{ width: "100%" }}
          >
            <Flex
              minWidth={{ base: "100%", md: "400px" }}
              maxW={"400px"}
              height={"400px"}
              justifyContent="center"
              position={"relative"}
            >
              <Image
                loading="eager"
                priority={true}
                formats={["auto", "webp", "avif"]}
                src={imageSrc}
                alt=" Section Image"
                placeholder="blur"
                fill
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};
