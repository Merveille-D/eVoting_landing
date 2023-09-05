import React from "react";
import Layout from "../Layout";
import { heroItems } from "./heroItems";
import Hero from "../Hero";
import dynamic from "next/dynamic";
import Section1 from "./Section1";
import Section2 from "./Section2";
const Section3 = dynamic(() => import("./Section3"), {
  ssr: false,
});
const Section4 = dynamic(() => import("./Section4"), {
  ssr: false,
});
const Home = () => {
  return (
    <Layout>
      <Hero items={heroItems} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
};

export default Home;
