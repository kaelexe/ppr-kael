import React, { useState } from "react";
import { GlobalStyles, Container } from "./styles/Global.styles";
import {
  Hom,
  Intro,
  Heading,
  TopText,
  BottomText,
  Type,
} from "./styles/Landing.style";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const [state] = useState({
    toptext: "Hi,",
    bottomtext: "I'm John Michael",
  });

  return (
    <>
      <Container>
        <GlobalStyles />
        <Hom>
          <Intro>
            <Heading>
              <TopText>{state.toptext}</TopText>
              <BottomText>{state.bottomtext}</BottomText>
            </Heading>
            <Type>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  strings: [
                    "an I.T Student,",
                    "a Web Developer,",
                    "UI/UX designer.",
                  ],
                }}
              />
            </Type>
          </Intro>
        </Hom>
      </Container>
    </>
  );
};

export default Landing;
