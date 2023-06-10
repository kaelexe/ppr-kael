import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />

        <section id="home">
          <Landing />
        </section>

        <section id="about">
          <About />
        </section>
      </ChakraProvider>
    </>
  );
}

export default App;
