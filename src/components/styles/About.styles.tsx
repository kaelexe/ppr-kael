import styled from "styled-components";
import { Heading, Box } from "@chakra-ui/react";

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;
  overflow: hidden;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: calc(100vh - 60px);
`;

export const SectionTitle = styled(Heading)`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  flex-grow: 1;
  height: 2px;
  background: #ffa500;
  margin-left: 1rem;
`;

export const AboutContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const Portrait = styled(Box)`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    width: 300px;
    margin-right: 40px;

    svg {
      width: 100%;
      height: auto;
    }
  }
`;

export const TextContainer = styled(Box)`
  flex: 2;
  max-width: 700px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

export const TechColumn = styled(Box)`
  width: 100%;
  max-width: 700px;
`;
