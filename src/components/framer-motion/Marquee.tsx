// src/components/framer-motion/Marquee.tsx
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import html from "../../assets/html-icon.png";
import css from "../../assets/css-icon.png";
import js from "../../assets/js-icon.png";
import php from "../../assets/php-icon.png";
import react from "../../assets/react-icon.png";
import ci from "../../assets/ci-icon.png";
import mysql from "../../assets/mysql-icon.png";
import github from "../../assets/github-icon.png";
import nodejs from "../../assets/node-icon.png";
import java from "../../assets/java-icon.png";
import divider from "../../assets/divider.png";

const techIcons = [
  html,
  css,
  js,
  java,
  php,
  divider,
  react,
  nodejs,
  ci,
  divider,
  mysql,
  divider,
  github,
];

const MarqueeWrapper = styled.div`
  overflow: hidden;
  width: 100%;
`;

const MarqueeTrack = styled(motion.div)`
  display: flex;
  width: max-content;
  gap: 2rem;
  white-space: nowrap;
`;

const TechIcon = styled.div`
  font-size: 2rem;
`;

const Marquee: React.FC = () => {
  // Duplicate icons to make loop seamless
  const repeatedIcons = [...techIcons, ...techIcons];

  return (
    <MarqueeWrapper>
      <MarqueeTrack
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedIcons.map((icon, index) => (
          <TechIcon key={index}>
            <img src={icon} alt={`tech-${index}`} width={30} height={30} />
          </TechIcon>
        ))}
      </MarqueeTrack>
    </MarqueeWrapper>
  );
};

export default Marquee;
