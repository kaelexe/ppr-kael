import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

export const GlobalStyles = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease;
    scrollbar-width: none;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  li {
    color: #222327;
    list-style: none;
    font-size: 30px;
    margin: 25px;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .logo i {
    font-size: 28px;
    margin-right: 3px;
  }

  @media (max-width: 1280px) {
    header {
      padding: 14px 2%;
      transition: 0.2s;
    }

    .navbar a {
      padding: 5px 0;
      margin: 0px 20px;
    }
  }

  section {
    scroll-margin-top: 80px;
  }
`;
