import styled, { keyframes } from "styled-components";
import { Text } from "@chakra-ui/react";


// anims
const moveRight = keyframes`
    0% {
        opacity: 0;
        transform: translate(100px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`;

const moveLeft = keyframes`
    0% {
        opacity: 0;
        transform: translate(150px);
    }

    100% {
        opacity: 1;
        transform: translate(0);
    }
`;


export const Hom = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 100px;
    font-size: 50px;
    width: 50%;

    @media screen and (max-width: 797px){
        font-size: 25px;
    }

    @media screen and (max-width: 600px){
        font-size: 30px;
    }

    @media screen and (max-width: 400px){
        font-size: 18px;
    }

`;

export const Heading = styled(Text)`
    display: block;
`;

export const TopText = styled.div`
    pointer-events: none;
    animation-name: ${moveRight};
    animation-duration: 0.7s;

`;

export const BottomText = styled.div`
    animation-name: ${moveLeft};
    animation-duration: 1s;
`;

export const Type = styled.div`
    font-size: 40px;
    color: #e35a1f83;

    @media screen and (max-width: 797px){
        font-size: 25px;
    }

    @media screen and (max-width: 600px){
        font-size: 24px;
    }

    @media screen and (max-width: 400px){
        font-size: 15px;
    }

`;