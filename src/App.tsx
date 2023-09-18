import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DegreeConverter from "./pages/DegreeConverter";
import MemeGenerator from "./pages/MemeGenerator";
import NumberGuess from "./pages/NumberGuess";
import CurrencyConverter from "./pages/CurrencyConverter";
import SalaryCalculator from "./pages/SalaryCalculator";
import WordScramble from "./pages/WordScramble";
import MobileLegend from "./pages/MobileLegend";
import TicTacToe from "./pages/TicTacToe";
import CountdownTimer from "./pages/CountdownTimer";

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/degree-converter" element={<DegreeConverter />} />
        <Route path="/meme-generator" element={<MemeGenerator />} />
        <Route path="/number-guess" element={<NumberGuess />} />
        <Route path="/currency-converter" element={<CurrencyConverter />} />
        <Route path="/salary-calculator" element={<SalaryCalculator />} />
        <Route path="/word-scramble" element={<WordScramble />} />
        <Route path="/mobile-legend" element={<MobileLegend />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/countdown-timer" element={<CountdownTimer />} />
      </Routes>
    </React.Fragment>
  );
}
