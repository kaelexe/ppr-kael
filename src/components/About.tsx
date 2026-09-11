import React from "react";
import {
  AboutWrapper,
  AboutContent,
  TextContainer,
  SectionTitle,
  Line,
  TechColumn,
} from "./styles/About.styles";
import { Button, Text } from "@chakra-ui/react";
import Marquee from "./framer-motion/Marquee";

const About: React.FC = () => {
  return (
    <AboutWrapper>
      <SectionTitle>
        Who Am I?
        <Line />
      </SectionTitle>

      <AboutContent>
        <TextContainer>
          <Text fontSize={["md", "md", "lg"]} textAlign="justify" mt={4}>
            I'm a web developer based in Davao City, Philippines. My experience
            spans frontend development with React, TypeScript, and Tailwind CSS,
            full-stack work with PHP, CodeIgniter, and MySQL, and UI/UX design in
            Figma. Since graduating, I've focused on professional and freelance
            client projects.
          </Text>
          <Button
            as="a"
            href={`${process.env.PUBLIC_URL}/John_Michael_Amto_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume (opens in a new tab)"
            mt="8"
            fontSize="sm"
            colorScheme="orange"
            width={["150px", "150px", "180px"]}
          >
            View Resume
          </Button>
        </TextContainer>
        <TechColumn>
          <Marquee />
        </TechColumn>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
