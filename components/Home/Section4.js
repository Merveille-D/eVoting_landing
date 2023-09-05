import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { links } from "../../utils/data";

const Section4 = () => {
  return (
    <Box py={10} bgColor={"gray.200"}>
      <Container maxW={"container.lg"} centerContent>
        <VStack gap={2}>
          <VStack>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              <Heading textAlign={"center"} size={"md"}>
                Commencer dès maintenant à utiliser eVoting
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

          <ButtonGroup
            gap="2"
            alignItems={"center"}
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
              Créer un vote
            </Button>
            <Button
              as={"a"}
              target="_blank"
              rel="noopener noreferrer"
              size={{ base: "sm" }}
              variant={"solid"}
              colorScheme="brandGreen"
              href={links.user}
            >
              Voter
            </Button>
          </ButtonGroup>
        </VStack>
      </Container>
    </Box>
  );
};

export default Section4;
