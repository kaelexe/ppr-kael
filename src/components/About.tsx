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
  const onClickDownload = () => {
    console.log("Download Resume");
  };

  return (
    <AboutWrapper>
      <SectionTitle>
        Who Am I?
        <Line />
      </SectionTitle>

      <AboutContent>
        <TextContainer>
          <Text fontSize={["sm", "md", "lg"]} textAlign="justify" mt={4}>
            I'm a web developer who blends clean design with efficient code. I
            focus on building fast, accessible, and responsive web experiences
            that work beautifully on any device. Whether it’s crafting intuitive
            user interfaces or writing scalable backend logic.
          </Text>
          <Button
            onClick={onClickDownload}
            mt="8"
            fontSize="sm"
            colorScheme="orange"
            width={["100px", "150px", "180px"]}
          >
            Download Resume
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
