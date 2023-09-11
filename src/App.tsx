import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DegreeConverter from "./pages/DegreeConverter";
import MemeGenerator from "./pages/MemeGenerator";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/degree-converter" element={<DegreeConverter />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
      </Routes>
    </React.Fragment>
  );
}
