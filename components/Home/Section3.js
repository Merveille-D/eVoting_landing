import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";
import { Info } from "../Info";
import image1 from "../../public/images/how-to-organize-vote.png";
import image2 from "../../public/images/how-to-vote.png";
import { links } from "../../utils/data";

const Section3 = () => {
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
export default Section3;
