import styled from "styled-components";
import { Image } from "@chakra-ui/react";
import { Breakpoints } from "../../styles/Dimensions";

export const AboutContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  color: #fff;
  font-size: 4rem;
  transition: all 0.5s ease;

  h2 {
    @media (width <= ${Breakpoints.width.tablet.medium}px) {
      //for some reason, both h2 has different behaviour in terms of being centered
      //for 1st h2 (THE MAN)
      text-align: -webkit-center;
      //for 1st h2 (TECHNOLOGIES)
      place-items: center;
    }
  }
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height: 100vh;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fecture = styled.i`
  object-fit: cover;
  /* object-position: center; */
  /* border-radius: full; */
  /* box-sizing: 300px; */

  @media (width <= ${Breakpoints.width.tablet.medium}px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 10%;
  height: 4px;
  background-color: #e35a1f83;
  margin: 0 0 1rem 0;
  margin-top: 1rem;
`;
