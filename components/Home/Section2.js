import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import ToolCard from "../ToolCard";

import feature1 from "../../public/images/feature1.jpg";
import feature2 from "../../public/images/feature2.jpg";
import feature3 from "../../public/images/feature3.jpg";
import feature4 from "../../public/images/feature4.jpg";
import { links } from "../../utils/data";

const Section2 = () => {
  const features = [
    {
      title: "Facilité d'utilisation",
      description:
        "Notre plateforme intuitive est facile à utiliser pour tous les utilisateurs, qu'ils soient votants ou organisateurs.",
      link: links.user,
      image: feature1,
    },
    {
      title: "Sécurité",
      description:
        "Nous utilisons les dernières technologies de sécurité pour protéger les données et garantir l'intégrité du vote.",
      image: feature2,
      link: links.user,
    },
    {
      title: "Accessibilité",
      description:
        "Nous permettons aux votants de participer aux élections à distance, en utilisant leur ordinateur ou leur téléphone portable.",
      image: feature3,
      link: links.user,
    },
    {
      title: "Fiabilité",
      description:
        "Notre plateforme fiable garantit la transparence et l'intégrité du processus électoral.",
      image: feature4,
      link: links.user,
    },
  ];
  return (
    <Box py={10}>
      <Container maxW={"container.lg"}>
        <VStack gap={2}>
          <VStack alignItems={"center"}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              <Heading textAlign={"center"} size={"md"}>
                Pourquoi choisir eVoting ?
              </Heading>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", delay: 1 }}
            >
              <Box width="49px" height="2px" bgColor="brandBlue.500" />
            </motion.div>
          </VStack>
          <Text fontSize={"sm"} textAlign={"center"} fontWeight={500}>
            La plateforme de vote en ligne est un outil simple et sûr pour
            organiser des élections en ligne. Notre plateforme permet de créer
            et de gérer des votes de manière efficace, transparente et
            sécurisée. Les avantages de notre plateforme sont la sécurité, la
            simplicité d'utilisation et la flexibilité.
          </Text>
        </VStack>
        <SimpleGrid columns={[1, 2, 3]} spacing={5} mt={10}>
          {features.map((element, index) => {
            return <ToolCard {...element} key={index} />;
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
export default Section2;
