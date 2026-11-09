import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaPause, FaPlay } from "react-icons/fa";
import html from "../../assets/html-icon.png";
import css from "../../assets/css-icon.png";
import js from "../../assets/js-icon.png";
import php from "../../assets/php-icon.png";
import react from "../../assets/react-icon.png";
import ci from "../../assets/ci-icon.png";
import mysql from "../../assets/mysql-icon.png";
import github from "../../assets/github-icon.png";
import nodejs from "../../assets/node-icon.png";
import java from "../../assets/java-icon.png";

const techIcons = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: js, name: "JavaScript" },
  { src: java, name: "Java" },
  { src: php, name: "PHP" },
  { src: react, name: "React" },
  { src: nodejs, name: "Node.js" },
  { src: ci, name: "CodeIgniter" },
  { src: mysql, name: "MySQL" },
  { src: github, name: "GitHub" },
];

const move = keyframes`
  to { transform: translateX(-50%); }
`;

const MarqueeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  .motion-control { display: grid; place-items: center; width: 32px; height: 32px; flex-shrink: 0; opacity: 0.6; border-radius: 50%; }
  .motion-control:hover { opacity: 1; background: rgba(128,128,128,0.12); }
  .motion-control:focus-visible { outline: 2px solid var(--portfolio-accent, #ffa500); outline-offset: 3px; }
  @media (prefers-reduced-motion: reduce) { .motion-control { display: none; } }
`;

const MarqueeWrapper = styled.div`
  overflow: hidden;
  flex: 1;
  min-width: 0;
  mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  @media (prefers-reduced-motion: reduce) { mask-image: none; }
`;

const MarqueeTrack = styled.div<{ $paused: boolean }>`
  display: flex;
  width: max-content;
  animation: ${move} 28s linear infinite;
  animation-play-state: ${({ $paused }) => $paused ? "paused" : "running"};
  ${MarqueeWrapper}:hover & { animation-play-state: paused; }
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    width: 100%;
    > div[aria-hidden="true"] { display: none; }
  }
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 2rem;
  padding-right: 2rem;
  img { display: block; width: 30px; height: 30px; object-fit: contain; }
  @media (prefers-reduced-motion: reduce) {
    flex-wrap: wrap;
    gap: 1.25rem;
    padding-right: 0;
    flex-shrink: 1;
  }
`;

const Marquee: React.FC = () => {
  const [paused, setPaused] = useState(false);

  return (
    <MarqueeRow role="group" aria-label="Technology skills">
      <MarqueeWrapper>
        <MarqueeTrack $paused={paused}>
          <IconGroup>
            {techIcons.map((icon) => <img key={icon.name} src={icon.src} alt={icon.name} title={icon.name} width={30} height={30} />)}
          </IconGroup>
          <IconGroup aria-hidden="true">
            {techIcons.map((icon) => <img key={icon.name} src={icon.src} alt="" width={30} height={30} />)}
          </IconGroup>
        </MarqueeTrack>
      </MarqueeWrapper>
      <button
        className="motion-control"
        type="button"
        aria-label={paused ? "Play technology animation" : "Pause technology animation"}
        onClick={() => setPaused(!paused)}
      >
        {paused ? <FaPlay size={11} aria-hidden="true" /> : <FaPause size={11} aria-hidden="true" />}
      </button>
    </MarqueeRow>
  );
};

export default Marquee;
