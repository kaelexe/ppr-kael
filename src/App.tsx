import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About"
import "./App.css";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Landing />
        <About />
      </ChakraProvider>
    </>
  );
}

export default App;
