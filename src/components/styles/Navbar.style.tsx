import styled from "styled-components";

interface NavibarProps {
  open: boolean;
}

export const NavContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 1000;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;

  .logo-desktop {
    display: block;
  }

  .logo-mobile {
    display: none;
  }

  @media (max-width: 768px) {
    .logo-desktop {
      display: none;
    }

    .logo-mobile {
      display: block;
    }
  }
`;

export const Navibar = styled.ul<NavibarProps>`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: 900px) {
    flex-direction: column;
    background: white;
    position: absolute;
    top: 80px;
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 250px;
    height: auto;
    padding: 1rem;
    box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease;
    border-radius: 0 0 0 10px;
  }
`;

export const Options = styled.a`
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  color: #333;
  transition: 0.3s ease;

  &:hover {
    color: #e35a1f;
  }
`;

export const Burgir = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
    font-size: 2rem;
    cursor: pointer;
  }
`;

export const LogoIcon = styled.i``;
