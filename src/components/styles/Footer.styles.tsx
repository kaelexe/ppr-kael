import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  border-top: 1px solid ${({ theme }) => theme.border};
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
      color: ${({ theme }) => theme.accent};
    }
  }
`;
