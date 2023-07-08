import { Box, Container } from "@chakra-ui/react";
import React from "react";

const ContainerWrapper = ({ children, ...props }) => {
  return (
    <>
      <Container maxW={"container.lg"} zIndex={1} position={"relative"}>
        {children}
      </Container>
    </>
  );
};

export default ContainerWrapper;
