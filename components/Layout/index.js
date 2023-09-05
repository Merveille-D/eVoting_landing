import React from "react";
import NavBar from "./NavBar";
import { Box } from "@chakra-ui/react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <NavBar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
