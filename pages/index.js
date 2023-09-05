import React from "react";
import SEOHead from "../components/shared/SEOHead";
import dynamic from "next/dynamic";
const Home = dynamic(() => import("../components/Home/"), {
  ssr: false,
});
const HomePage = ({}) => {
  return (
    <>
      <SEOHead
        title="eVoting - Plateforme de création et de vote en ligne sécurisée"
        description="Simplifiez vos élections et sondages en utilisant eVoting, la plateforme de vote en ligne sécurisée, pratique et facile à utiliser. Authentification à deux facteurs et chiffrement de bout en bout pour garantir la sécurité des données et prévenir les fraudes."
      />
      <Home />
    </>
  );
};

export default HomePage;
