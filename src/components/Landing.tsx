import React from "react";
import {
  LandingWrapper,
  Hero,
  Intro,
  TopText,
  BottomText,
  Type,
} from "./styles/Landing.style";
import Typewriter from "typewriter-effect";
import { ThemeProvider } from "@chakra-ui/react";

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
                strings: ["I.T Graduate", "Web Developer", "UI/UX Designer"],
              }}
            />
          </Type>
        </Intro>
      </Hero>
    </LandingWrapper>
  );
};

export default Landing;
