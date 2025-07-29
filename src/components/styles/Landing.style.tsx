import styled from "styled-components";
import { Heading } from "@chakra-ui/react";

export const LandingWrapper = styled.div`
  width: 100%;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const TopText = styled(Heading)`
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 400;
  margin: 0;
`;

export const BottomText = styled(Heading)`
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 600;
  margin: 0;
`;

export const Type = styled.div`
  font-size: clamp(1.2rem, 3vw, 2rem);
  color: #888;
`;
