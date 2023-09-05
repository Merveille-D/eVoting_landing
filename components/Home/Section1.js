import React from "react";
import { motion } from "framer-motion";
import section1 from "../../public/images/section1.jpg";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { links } from "../../utils/data";
import Image from "next/image";

const Section1 = () => {
  return (
    <>
      <Box py={4}>
        <Container maxW={"container.lg"}>
          <Flex
            minH={"500px"}
            alignItems={"center"}
            flexDirection={{
              base: "column-reverse",
              md: "row-reverse",
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
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "ease-in", delay: 1 }}
                >
                  <Heading
                    textAlign={{ base: "center", md: "left" }}
                    size={"md"}
                  >
                    C'est quoi eVoting ?
                  </Heading>
                </motion.div>
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring", delay: 1 }}
                >
                  <Box width="49px" height="2px" bgColor="brandBlue.500" />
                </motion.div>
              </VStack>
              <Text
                color={"gray"}
                fontSize={"sm"}
                textAlign={{ base: "center", md: "left" }}
              >
                Simplifiez vos votes en ligne
              </Text>
              <Text fontSize={"sm"} textAlign={{ base: "center", md: "left" }}>
                Nous offrons une solution de vote en ligne sécurisée, pratique
                et facile à utiliser pour les élections et les sondages. Notre
                plateforme utilise le chiffrement de bout en bout et une
                authentification à deux facteurs pour garantir la sécurité des
                données et prévenir les fraudes.
              </Text>
              <Text fontSize={"sm"} textAlign={{ base: "center", md: "left" }}>
                Que vous soyez une organisation, une entreprise, un gouvernement
                ou une association, notre plateforme de vote en ligne sécurisée
                est la solution idéale pour vos besoins de vote en ligne.
              </Text>
              <Button
                as={"a"}
                target="_blank"
                rel="noopener noreferrer"
                size={"sm"}
                colorScheme="brandBlue"
                href={links.user}
                variant={"solid"}
              >
                Commencer
              </Button>
            </VStack>
            <Spacer />
            <Flex
              minWidth={{ base: "100%", md: "400px" }}
              maxW={"400px"}
              height={"400px"}
              boxShadow={"md"}
              position={"relative"}
            >
              <Image
                loading="eager"
                priority={true}
                formats={["auto", "webp", "avif"]}
                src={section1}
                alt=" Section Image"
                placeholder="blur"
                fill
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
export default Section1;
