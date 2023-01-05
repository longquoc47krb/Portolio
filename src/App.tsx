import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title";
import ChemicalElement from "./components/ChemicalElement";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>
          Welcome to the{" "}
          <ChemicalElement symbol="Br" atomicBlock={35} fontSize="2xl" />
          eaking Bad
        </Title>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
