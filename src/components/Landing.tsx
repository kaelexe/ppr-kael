import React from "react";
import {
  LandingWrapper,
  Hero,
  Intro,
  TopText,
  BottomText,
  Type,
  Description,
  TechnologyStrip,
} from "./styles/Landing.style";
import Typewriter from "typewriter-effect";
import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Marquee from "./framer-motion/Marquee";

const Landing = () => {
  return (
    <LandingWrapper>
      <Hero>
        <Intro>
          <TopText>Hi,</TopText>
          <BottomText>I'm John Michael</BottomText>
          <Type>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 70,
                strings: ["React & TypeScript Developer", "Full-Stack Developer", "UI/UX Designer"],
              }}
            />
          </Type>
          <Description>
            I'm a web developer based in the  Philippines, with experience
            in React, TypeScript, and PHP. I work on frontend interfaces,
            full-stack applications, and UI/UX design for professional and
            freelance projects.
          </Description>
          <Button
            as="a"
            href={`${process.env.PUBLIC_URL}/John_Michael_Amto_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Resume (opens in a new tab)"
            colorScheme="orange"
            fontSize="sm"
            rightIcon={<ExternalLinkIcon />}
            mt="2"
          >
            View Resume
          </Button>
          <TechnologyStrip>
            <span className="technology-label">Technologies I work with</span>
            <Marquee />
          </TechnologyStrip>
        </Intro>
      </Hero>
    </LandingWrapper>
  );
};

export default Landing;
