import styled from "styled-components";
import { Heading } from "@chakra-ui/react";

export const LandingWrapper = styled.div`
  padding: 0 1rem;
  width: 100%;
  height: 100%;
`;

export const Hero = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 2rem 0;
  max-width: 1200px;
  margin: 0 auto;

  /* @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  } */
`;

export const Intro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 600px;

  /* @media (max-width: 768px) {
    align-items: center;
  } */
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
  color: var(--portfolio-muted, #888);
`;

export const Description = styled.p`
  max-width: 600px;
  font-size: 1rem;
  line-height: 1.8;
`;

export const TechnologyStrip = styled.div`
  width: 100%;
  min-width: 0;
  margin-top: 1.25rem;
  padding-top: 1.25rem;
  border-top: 1px solid rgba(128, 128, 128, 0.22);
  .technology-label {
    display: block;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    opacity: 0.65;
  }
`;
