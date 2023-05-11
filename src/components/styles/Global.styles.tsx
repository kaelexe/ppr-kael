import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @importurl ('https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap');
    
    *{
      margin: 0;
      padding: 0;
      font-family: "Poppins";
      box-sizing: border-box;
    }

    li{
      color: #222327;
      text-decoration: none;
      list-style: none;
      font-size: 30px;
      margin: 25px;
    }

    .logo i {
      font-size: 28px;
      margin-right: 3px;
    }

    @media (max-width: 1280px) {
      header{
        padding: 14px 2%;
        transition: .2s;
      }
      .navbar a {
        padding: 5px 0;
        margin: 0px 20px
      }
    }
`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    max-height: 700px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 50px;
    padding-left: 50px;

`;
