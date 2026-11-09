import styled from "styled-components";

export const PortfolioSurface = styled.div`
  position: relative;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  height: 100vh;
  height: 100dvh;
  padding-top: 64px;
  overflow: hidden;
`;

export const PageViewport = styled.div`
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
`;

export const DotCanvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  mask-image: linear-gradient(to bottom, transparent, black 18%, black 80%, transparent);
`;
