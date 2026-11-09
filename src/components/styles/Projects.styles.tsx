import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const appear = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ProjectsWrapper = styled.main`
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  align-items: center;
  gap: clamp(2rem, 5vw, 5rem);
  width: 100%;
  max-width: 1400px;
  height: 100%;
  min-height: 0;
  margin: auto;
  padding: 2rem clamp(1.25rem, 4vw, 4rem);
  @media (max-width: 1000px) {
    grid-template-columns: 155px minmax(0, 1fr);
    gap: 1.5rem;
  }
  @media (max-width: 767px) {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto minmax(0, 1fr);
    gap: 1.25rem;
    align-items: stretch;
    padding: 1rem 1.25rem;
  }
`;

export const ProjectRail = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
  .collection-label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.18em; opacity: 0.55; margin-bottom: 1.5rem; }
  button { display: flex; align-items: center; gap: 0.8rem; width: 100%; min-height: 48px; text-align: left; color: inherit; }
  .rail-line { width: 22px; height: 1px; background: currentColor; opacity: 0.4; flex-shrink: 0; transition: width 0.25s ease, opacity 0.25s ease; }
  .project-name { font-size: 0.875rem; opacity: 0; transform: translateX(-6px); transition: opacity 0.25s ease, transform 0.25s ease; }
  button[aria-pressed="true"] .rail-line { width: 44px; opacity: 1; }
  button[aria-pressed="true"] .project-name { opacity: 1; transform: translateX(0); }
  button:hover .rail-line { opacity: 1; }
  button:focus-visible { outline: 2px solid var(--portfolio-accent, #ffa500); outline-offset: 4px; border-radius: 3px; }
  .project-number, .project-arrow { display: none; }
  @media (max-width: 767px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    .collection-label, .rail-line { display: none; }
    button { width: auto; min-height: 42px; gap: 0.4rem; flex-shrink: 0; }
    .project-number { display: inline; font-size: 0.75rem; opacity: 0.6; }
    .project-name { opacity: 0.55; transform: none; font-size: 0.875rem; }
    button[aria-pressed="true"] .project-name { opacity: 1; }
    .project-arrow { display: inline; opacity: 0.4; flex-shrink: 0; }
    button:last-child .project-arrow { display: none; }
  }
  @media (max-width: 380px) {
    gap: 0.2rem;
    button { gap: 0.25rem; }
    .project-name { font-size: 0.8rem; }
    .project-arrow { width: 0.75rem; }
  }
  @media (max-width: 480px) {
    button:not([aria-pressed="true"]) .project-name { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    .rail-line, .project-name { transition: none; }
  }
`;

export const ProjectStage = styled(motion.article)`
  display: grid;
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  align-items: center;
  gap: clamp(1.5rem, 3vw, 3rem);
  min-width: 0;
  min-height: 0;
  max-height: 100%;
  overflow-y: auto;
  @media (max-width: 1100px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 1.5rem;
    align-content: center;
  }
  @media (max-width: 767px) {
    align-content: start;
    gap: 1rem;
  }
`;

export const ProjectCover = styled.figure`
  min-width: 0;
  margin: 0;
  img { display: block; width: 100%; height: min(340px, 43vh); object-fit: cover; object-position: top; border: 6px solid rgba(128,128,128,0.12); }
  figcaption { font-size: 0.75rem; line-height: 1.5; opacity: 0.55; margin-top: 0.75rem; }
  @media (max-width: 1100px) {
    img { height: clamp(130px, 22vh, 200px); }
    figcaption { display: none; }
  }
  @media (max-height: 650px) and (min-width: 1101px) {
    img { height: 230px; }
  }
  @media (max-width: 767px) {
    img { height: clamp(110px, 18vh, 170px); }
  }
`;

export const Cover = styled.div<{ $brand?: string }>`
  height: min(340px, 43vh);
  padding: clamp(1.25rem, 3vw, 2.5rem);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: ${({ $brand }) => $brand === "equipify" ? "#f4ede0" : "#dce9dc"};
  color: ${({ $brand }) => $brand === "equipify" ? "#14213d" : "#2f493c"};
  border: 6px solid ${({ $brand }) => $brand === "equipify" ? "#e5dccb" : "#cbd9cb"};
  .cover-mark { color: #ff6b5b; }
  .cover-eyebrow, .cover-footnote { text-transform: uppercase; font-size: 0.7rem; letter-spacing: 0.16em; }
  .cover-title { font-family: Georgia, serif; font-size: clamp(2rem, 4vw, 3.75rem); line-height: 0.95; letter-spacing: -0.055em; }
  .cover-title em { font-family: Georgia, serif; font-weight: normal; }
  .cover-rule { width: 2rem; height: 1px; background: currentColor; margin: 0.5rem 0; }
  p { font-size: 0.875rem; line-height: 1.5; }
  .cover-footnote { margin-top: 0.75rem; }
  @media (max-width: 1100px) {
    height: clamp(130px, 22vh, 200px);
    padding: 1.25rem 1.5rem;
    position: relative;
    .cover-title { font-size: clamp(2rem, 5vw, 3rem); }
    .cover-eyebrow { font-size: 0.65rem; }
    .cover-rule, .cover-footnote { display: none; }
    p { position: absolute; right: 1.5rem; bottom: 1.5rem; font-size: 0.8rem; }
  }
  @media (max-width: 767px) {
    height: clamp(110px, 18vh, 170px);
  }
`;

export const ProjectCopy = styled.div`
  min-width: 0;
  .project-title { font-size: clamp(1.8rem, 3vw, 2.9rem); font-weight: 500; letter-spacing: -0.045em; line-height: 1.12; margin-top: 0.8rem; }
  .project-subtitle { font-size: 1rem; margin-top: 0.75rem; }
  @media (max-width: 767px) {
    .project-title { margin-top: 0.5rem; }
    .project-subtitle { margin-top: 0.5rem; }
  }
`;

export const DetailNavigation = styled.nav`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid rgba(128,128,128,0.22);
  margin: 1.5rem 0 1.25rem;
  button { font-size: 0.875rem; padding: 0 0 0.65rem; color: inherit; opacity: 0.5; border-bottom: 1px solid transparent; }
  button[aria-pressed="true"] { opacity: 1; border-bottom-color: currentColor; }
  button:focus-visible { outline: 2px solid var(--portfolio-accent, #ffa500); outline-offset: 4px; }
  @media (max-width: 767px) { margin: 1rem 0; }
`;

export const ReadingPane = styled.div`
  min-height: 180px;
  animation: ${appear} 0.22s ease-out both;
  @media (max-width: 767px) { min-height: 150px; }
  @media (prefers-reduced-motion: reduce) { animation: none; }
`;

export const ChapterControls = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  button { width: 36px; height: 36px; border-radius: 50%; color: inherit; }
  button:hover:not(:disabled) { background: rgba(128,128,128,0.12); }
  button:disabled { opacity: 0.25; cursor: default; }
  button:focus-visible { outline: 2px solid var(--portfolio-accent, #ffa500); outline-offset: 2px; }
  span { font-size: 0.75rem; min-width: 50px; text-align: center; opacity: 0.6; }
`;

export const ProjectFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.25rem;
  > p { font-size: 0.75rem; }
  .storefront-access { display: flex; align-items: center; flex-wrap: wrap; gap: 0.75rem; width: 100%; }
  .storefront-access > p { font-size: 0.75rem; }
  .password-toggle { font-size: 0.875rem; text-decoration: underline; text-underline-offset: 4px; color: inherit; }
  .password-toggle:focus-visible { outline: 2px solid var(--portfolio-accent, #ffa500); outline-offset: 4px; }
  .storefront-access code { display: inline-block; padding: 0.2rem 0.6rem; border: 1px solid var(--portfolio-border); border-radius: 4px; font-size: 0.875rem; user-select: all; }
`;
