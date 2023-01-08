import React from "react";
import introPicture from "./assets/intro.png";
import "./App.css";
import "./styles/global.scss";
import Title from "./components/Title";
import ChemicalElement from "./components/ChemicalElement";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import MenuItem from "./components/MenuItem";

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
        <div className="flex justify-center">
          <motion.img
            src={introPicture}
            className="intro-picture"
            alt="intro"
            animate={{ x: -300, y: 0 }}
            transition={{ ease: "easeOut", duration: 4 }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
