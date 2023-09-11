import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DegreeConverter from "./pages/DegreeConverter";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/degree-converter" element={<DegreeConverter />} />
      </Routes>
    </React.Fragment>
  );
}
