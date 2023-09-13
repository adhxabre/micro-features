import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DegreeConverter from "./pages/DegreeConverter";
import MemeGenerator from "./pages/MemeGenerator";
import NumberGuess from "./pages/NumberGuess";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/degree-converter" element={<DegreeConverter />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
        <Route path="/number-guess" element={<NumberGuess />} />
      </Routes>
    </React.Fragment>
  );
}
