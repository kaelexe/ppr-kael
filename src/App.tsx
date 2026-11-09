import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DotField from "./components/DotField";
import { PageViewport, PortfolioSurface } from "./components/styles/DotField.styles";
import { GlobalStyles } from "./styles/Global.styles";
import PortfolioThemeProvider from "./styles/PortfolioThemeProvider";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Landing />;
      case "contact":
        return <Contact />;
      case "projects":
        return <Projects />;
      default:
        return <Landing />;
    }
  };

  return (
    <PortfolioThemeProvider>
      <GlobalStyles />
      <PortfolioSurface>
        <DotField />
        <Navbar onNavigate={(page) => setCurrentPage(page)} />
        <PageViewport>{renderPage()}</PageViewport>
        <Footer />
      </PortfolioSurface>
    </PortfolioThemeProvider>
  );
}

export default App;
