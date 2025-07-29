import React from "react";
import {
  FooterContainer,
  Text,
  IconLinks,
} from "../components/styles/Footer.styles";
import { FaGithub, FaDiscord, FaFacebook, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <Text>© {new Date().getFullYear()} John Kael. All rights reserved.</Text>
      <IconLinks>
        <a href="mailto:your@email.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://discordapp.com/users/yourdiscordid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord"
        >
          <FaDiscord />
        </a>
        <a
          href="https://facebook.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
      </IconLinks>
    </FooterContainer>
  );
};

export default Footer;
