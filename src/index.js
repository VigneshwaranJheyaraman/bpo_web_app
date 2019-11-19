import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import BPOIndex from "./components/BPOIndex/BPOIndex";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <BPOIndex />
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
