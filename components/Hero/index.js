import React from "react";
import Item from "./item";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box } from "@chakra-ui/react";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Hero = ({ items }) => {
  return (
    <Box>
      <Carousel swipeable autoPlay infinite responsive={responsive}>
        {items.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
      </Carousel>
    </Box>
  );
};

export default Hero;
