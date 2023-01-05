import React from "react";
import introPicture from "./assets/intro.png";
import "./App.css";
import "./styles/global.scss";
import Title from "./components/Title";
import ChemicalElement from "./components/ChemicalElement";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>
          Welcome to the{" "}
          <ChemicalElement symbol="Br" atomicBlock={35} fontSize="4xl" />
          eaking <ChemicalElement symbol="b" atomicBlock={56} fontSize="4xl" />
          ad
        </Title>
        <img src={introPicture} className="intro-picture" alt="intro" />
      </header>
    </div>
  );
}

export default App;
