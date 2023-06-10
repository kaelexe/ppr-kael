import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import { Container } from "./Global.styles";

interface ComponentProps {
  click: boolean;
}

export const NavContainer = styled.header`
  position: fixed;
  height: 80px;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 28px 1;
  transition: all 0.5s ease;

  ${Container}
`;

export const Navibar = styled.ul<ComponentProps>`
  display: flex;

  & a.active {
    color: #e35a1f83;
  }

  @media screen and (max-width: 900px) {
    position: absolute;
    top: 100%;
    right: ${({ click }) => (click ? 0 : "-100%")};
    width: 270px;
    height: 37vh;
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    opacity: 1;
    transition: all 0.5s ease;

    & a {
      display: block;
      margin: 10px 0;
      padding: 0px 25px;
    }
  }

  @media screen and (max-height: 940px) {
    & a {
      display: block;
      margin: 5px 0;
      padding: 0px 10px;
    }
  }
`;

export const LogoIcon = styled.i`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;

export const TitleStyle = styled.span`
  font-size: 1.1rem;
  font-weight: 600;
`;

export const Burgir = styled.div`
  visibility: hidden;

  @media (max-width: 900px) {
    visibility: visible;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 67%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Options = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0px, 30px;
  transition: all 0.5s ease;

  &:hover {
    color: #e35a1f83;
  }

  @media (max-width: 900px) {
    &:hover {
      transform: translateY(5px);
    }
  }
`;
