import React, { useState } from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Footer from "./components/Footer";
import { GlobalStyles } from "./styles/Global.styles";
import theme from "./styles/Theme";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Landing />;
      case "about":
        return <About />;
      default:
        return <Landing />;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <GlobalStyles />
      <Navbar onNavigate={(page) => setCurrentPage(page)} />
      {renderPage()}
      <Footer />
    </ChakraProvider>
  );
}

export default App;
