import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--portfolio-footer-bg);
  color: inherit;
  font-size: 0.875rem;
  border-top: 1px solid var(--portfolio-border);
  @media (max-width: 480px) {
    padding: 0.75rem 1.25rem;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
    font-size: 0.75rem;
  }
`;

export const Text = styled.p`
  margin: 0;
`;

export const IconLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: inherit;
    font-size: 1.25rem;
    transition: color 0.3s;

    &:hover {
      color: var(--portfolio-accent);
    }
  }
`;
