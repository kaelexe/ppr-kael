import styled from "styled-components";
import { motion } from "framer-motion";

export const PreviewPanel = styled(motion.section)`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 0;
  min-height: 0;
  border: 1px solid var(--portfolio-border);
  border-radius: 8px;
  overflow: hidden;
`;

export const PreviewToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--portfolio-border);
  .preview-actions { display: flex; flex-wrap: wrap; gap: 0.25rem; }
`;

export const PreviewViewport = styled.div`
  position: relative;
  flex: 1;
  min-height: 0;
  background: white;
  iframe { display: block; width: 100%; height: 100%; border: 0; }
`;

export const PreviewStatus = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding: 2rem;
  background: var(--chakra-colors-chakra-body-bg);
  &.preview-notice { inset: auto 1rem 1rem; padding: 1rem; border: 1px solid var(--portfolio-border); border-radius: 6px; }
  @media (prefers-reduced-motion: reduce) {
    .chakra-skeleton { animation: none; }
  }
`;
