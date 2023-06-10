import React, { useEffect, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { ReactComponent as KLX } from "../assets/klx_logo.svg";
import { ReactComponent as KLXMAIN } from "../assets/klx_main.svg";
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
import { Breakpoints } from "../styles/Dimensions";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const clickHandler = () => setClick(!click);

  useEffect(() => {
    // Event handler to update the window size state
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <NavContainer>
      <GlobalStyles />
      <LogoIcon as="a" href="#home" className="logo">
        {windowSize.width > Breakpoints.width.tablet.large ? (
          <KLXMAIN />
        ) : (
          <KLX />
        )}
      </LogoIcon>

      <Navibar click={click}>
        {/* <li>
          <Options as="a" href="#" className="active">
            Home
          </Options>
        </li> */}
        <li>
          <Options as="a" href="#about">
            About
          </Options>
        </li>
        {/* <li>
          <Options as="a" href="#">
            
          </Options>
        </li> */}
        <li>
          <Options as="a" href="#">
            Works
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
