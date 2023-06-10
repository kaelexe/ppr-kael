import React from "react";
import { GlobalStyles, Container } from "./styles/Global.styles";
import { ReactComponent as ME } from "../assets/me.svg";
import { ReactComponent as HTML } from "../assets/html_icon.svg";
import { ReactComponent as CSS } from "../assets/css_icon.svg";
import { ReactComponent as JS } from "../assets/js_icon.svg";
import { ReactComponent as REACT } from "../assets/react_icon.svg";
import { ReactComponent as JAVA } from "../assets/java_icon.svg";
import { ReactComponent as GIT } from "../assets/github_icon.svg";
import { ReactComponent as FIGMA } from "../assets/figma_icon.svg";
import {
  AboutContainer,
  AboutContent,
  Fecture,
  Line,
  TextContainer,
} from "./styles/About.styles";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";

function About() {
  const onClickDownLoad = () => {
    console.log("Download Resume");
  };

  return (
    <>
      <Container>
        <GlobalStyles />
        <AboutContainer>
          <AboutContent>
            <TextContainer>
              <Heading size="lg" fontWeight="600" fontSize="36px" color="#000">
                THE MAN
                <Line />
              </Heading>
              <Text
                fontSize="lg"
                textAlign="justify"
                color="#000"
                mt="10"
                mr="10"
              >
                I am a graduate of Bachelor of Science in Information Technology
                at the University of Immaculate Conception. I am an aspiring web
                developer. I am passionate about learning new technologies and I
                am always looking for new opportunities to improve my skills. I
                am a hardworking person and I always strive to give my best in
                everything I do. I am a team player and I can also work
                independently. I am a fast learner and I can easily adapt to new
                environments. I am also a good communicator and I am always open
                to constructive criticisms. I am a person who is willing to
                learn and I am always open to new ideas. I am also willing to
                share my knowledge and skills to others.
              </Text>
              <Button
                onClick={onClickDownLoad}
                mt="10"
                fontSize="15px"
                colorScheme="orange"
                w={["100px", "170px", "181px"]}
                h="40px"
              >
                Download Resume
              </Button>
            </TextContainer>
            <Fecture>
              <ME />
            </Fecture>
          </AboutContent>

          <Heading
            size="lg"
            fontWeight="600"
            fontSize="36px"
            color="#000"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            justifyContent="flex-end"
          >
            TECHNOLOGIES
            <Line />
          </Heading>
          <Stack
            direction="row"
            spacing="55"
            justifyContent="center"
            mt="10"
            display="flex"
            flexWrap="wrap"
          >
            <HTML />
            <CSS />
            <JS />
            <REACT />
            <JAVA />
            <GIT />
            <FIGMA />
          </Stack>
        </AboutContainer>
      </Container>
    </>
  );
}

export default About;
