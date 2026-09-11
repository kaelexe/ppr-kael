import React from "react";
import {
  LandingWrapper,
  Hero,
  Intro,
  TopText,
  BottomText,
  Type,
  Description,
} from "./styles/Landing.style";
import Typewriter from "typewriter-effect";

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
            I'm a web developer based in Davao City, Philippines, with experience
            in React, TypeScript, and PHP. I work on frontend interfaces,
            full-stack applications, and UI/UX design for professional and
            freelance projects.
          </Description>
        </Intro>
      </Hero>
    </LandingWrapper>
  );
};

export default Landing;
