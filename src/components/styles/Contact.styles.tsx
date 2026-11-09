import styled from "styled-components";
import { Heading, Box } from "@chakra-ui/react";

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
  min-height: 100%;
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
  background: var(--portfolio-accent, #ffa500);
  margin-left: 1rem;
`;

export const ContactContent = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 700px;
  margin: 1rem auto 0;
  overflow-wrap: anywhere;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
