import React from "react";
import introPicture from "./assets/intro.png";
import "./App.css";
import "./styles/global.scss";
import Title from "./components/Title";
import ChemicalElement from "./components/ChemicalElement";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Title>
          Welcome to the{" "}
          <ChemicalElement symbol="Br" atomicBlock={35} fontSize="4xl" />
          eaking <ChemicalElement symbol="ba" atomicBlock={56} fontSize="4xl" />
          d
        </Title>
        <motion.img
          src={introPicture}
          className="intro-picture"
          alt="intro"
          initial={{ x: 0, y: 200 }}
          animate={{ x: -300, y: 0 }}
          transition={{ ease: "easeOut", duration: 4 }}
        />
      </div>
    </div>
  );
}

export default App;
