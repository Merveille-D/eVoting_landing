import React from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import hero1 from "../public/images/hero1.jpg";
import section1 from "../public/images/section1.jpg";
import feature1 from "../public/images/feature1.jpg";
import feature2 from "../public/images/feature2.jpg";
import feature3 from "../public/images/feature3.jpg";
import feature4 from "../public/images/feature4.jpg";
import image1 from "../public/images/how-to-organize-vote.png";
import image2 from "../public/images/how-to-vote.png";
import hero2 from "../public/images/hero2.jpg";
import hero3 from "../public/images/hero3.jpg";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import ToolCard from "../components/ToolCard";
import { MdCheckCircle } from "react-icons/md";
import { links } from "../utils/data";
import Image from "next/image";

const Home = ({}) => {
  return (
    <>
      <Head>
        <title>
          eVoting - Plateforme de création et de vote en ligne sécurisée
        </title>
        <meta
          name="description"
          content="Simplifiez vos élections et sondages en utilisant eVoting, la plateforme de vote en ligne sécurisée, pratique et facile à utiliser. Authentification à deux facteurs et chiffrement de bout en bout pour garantir la sécurité des données et prévenir les fraudes."
        />
        <meta
          name="keywords"
          content="eVoting, vote en ligne, plateforme de vote, élections en ligne, sondages en ligne, sécurité des données, authentification à deux facteurs, chiffrement de bout en bout"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="" />
      </Head>

      <Layout>
        <Hero items={heroItems} />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Layout>
    </>
  );
};

export default Home;

const infosData = [
  {
    reverse: true,
    background: true,
    title: "Créer un vote",
    description:
      "Notre plateforme de vote en ligne permet de créer facilement et rapidement un vote en ligne pour vos élections et sondages. Voici les fonctionnalités que nous offrons ",
    button: {
      label: "Créer une election",
      link: links.admin,
      color: "brandRed",
    },
    imageSrc: image1,
    steps: [
      "Connectez-vous en tant qu'administrateur pour le compte de votre organisation.",
      "Créer le électeurs (ils recevront par sms et par mail les identifiants avec un lien unique de vote ).",
      "Créer les candidats.",
      "Créer le vote.",
    ],
  },
  {
    reverse: false,
    background: false,
    title: "Votez en ligne ",
    description:
      "Notre plateforme de vote en ligne sécurisée offre une expérience de vote fluide et facile à utiliser. Voici comment cela fonctionne ",
    button: {
      label: "Commencer à voter",
      link: links.user,
      color: "brandGreen",
    },
    imageSrc: image2,
    steps: [
      "Pour voter vous allez recevoir un sms et un mail contenant vos identifiants d'accèss (ID Secret) ainsi qu'un lien unique de vote.",
      "Cliquer sur le lien de vote ou renseignez vos identifiants sur la page de vote pour accéder à la liste electorale.",
      "Choisissez votre candidat.",
      "Valider votre choix.",
    ],
  },
];

const Info = ({
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

const heroItems = [
  {
    id: 1,
    label: "Bienvenue sur la plateforme de vote en ligne eVoting",
    description:
      "eVoting est la solution idéale pour organiser des élections en ligne en toute simplicité, sécurité et accessibilité.",
    imageSrc: hero3,
  },
  {
    id: 2,
    label: "Votez en ligne facilement",
    description:
      "eVoting offre une plateforme de vote en ligne simple et intuitive pour tous les types d'élections.",
    imageSrc: hero1,
  },
  {
    id: 3,
    label: "Un vote en ligne sûr et transparent",
    description:
      "La sécurité est notre priorité absolue chez eVoting. Nous utilisons les dernières technologies pour garantir l'intégrité du processus de vote et la confidentialité des données.",
    imageSrc: hero2,
  },
  {
    id: 4,
    label: "Une solution de vote accessible",
    description:
      "Avec eVoting, les électeurs peuvent participer à des élections en ligne depuis n'importe où dans le monde, à tout moment. Notre plateforme est accessible depuis tous les appareils.",
    imageSrc: hero3,
  },
  {
    id: 5,
    label: "Des élections rapides et efficaces",
    description:
      "Grâce à notre plateforme de vote en ligne, les élections peuvent être menées rapidement et efficacement. Les résultats sont disponibles en temps réel et peuvent être facilement analysés grâce à notre tableau de bord de rapport de vote.",
    imageSrc: hero1,
  },
];

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

const Section2 = () => {
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

const Section3 = () => {
  return (
    <>
      <Box py={10}>
        <Container maxW={"container.lg"}>
          <VStack>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              <Heading textAlign={"center"} size={"md"}>
                Comment ça marche ?
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
        </Container>
      </Box>

      {infosData.map((element, index) => {
        return <Info {...element} key={index} />;
      })}
    </>
  );
};

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
