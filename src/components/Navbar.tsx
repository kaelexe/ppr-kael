import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import { ReactComponent as KLX } from "../assets/klx_logo.svg";
import {
  NavContainer,
  LogoIcon,
  Navibar,
  Options,
  Burgir,
} from "./styles/Navbar.style";
import { GlobalStyles } from "./styles/Global.styles";
import { RiAlignRight } from "react-icons/ri";
import { GoX } from "react-icons/go";

export default function Navbar() {
  const [click, setClick] = useState(false);

  const clickHandler = () => setClick(!click);

  return (
    <NavContainer>
      <GlobalStyles />
      <LogoIcon as="a" href="#" className="logo">
        <KLX />
      </LogoIcon>

      <Navibar click={click}>
        <li>
          <Options as="a" href="#" className="active">
            Home
          </Options>
        </li>
        <li>
          <Options as="a" href="#">
            About
          </Options>
        </li>
        {/* <li>
          <Options as="a" href="#">
            
          </Options>
        </li> */}
        <li>
          <Options as="a" href="#">
            Projects
          </Options>
        </li>
        <li>
          <Options as="a" href="#">
            Contacts
          </Options>
        </li>
      </Navibar>

      <Burgir onClick={clickHandler}>
        {click ? <GoX /> : <RiAlignRight />}
      </Burgir>
    </NavContainer>
  );
}
