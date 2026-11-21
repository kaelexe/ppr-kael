import styled from "styled-components";
import { Heading } from "@chakra-ui/react";

export const ContactWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 3rem 2rem;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  min-height: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  max-width: 700px;
  min-width: 0;
  margin: auto;
  overflow-wrap: anywhere;
`;

export const ContactTitle = styled(Heading)`
  && {
    font-size: clamp(2.25rem, 5vw, 4rem);
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.04em;
  }
`;

export const ContactEmail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding-top: 1.5rem;
  border-top: 1px solid var(--portfolio-border);
`;

export const ContactActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
`;
