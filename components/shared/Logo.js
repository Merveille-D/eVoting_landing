import React from "react";
import { useRouter } from "next/router";
import LogoImage from "../../public/images/logo-eVoting.png";
import { motion } from "framer-motion";
import Image from "next/image";

const Logo = ({ animate }) => {
  const router = useRouter();

  return (
    <motion.div
      initial={animate ? { y: -200 } : ""}
      animate={animate ? { y: 0 } : ""}
      transition={animate ? { delay: 1, duration: 1.5, type: "spring" } : ""}
      onClick={() => {
        router.push("/");
      }}
      style={{
        position: "relative",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
        height: "50px",
        width: "5rem",
      }}
    >
      <Image
        src={LogoImage}
        fill
        alt="Carousel Image"
        style={{ objectFit: "contain", objectPosition: "center" }}
        pointerEvents="none"
        loading="eager"
        priority={true}
        formats={["auto", "webp", "avif"]}
        placeholder="blur"
      />
      {/* Votre contenu ici */}
    </motion.div>
  );
};

export default Logo;
