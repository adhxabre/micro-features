import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function NumberGuess() {
  return (
    <React.Fragment>
      <header className="bg-gray-700 z-[9999] top-0 fixed w-full h-auto py-2 px-20">
        <Link to="/">
          <h1 className="font-medium">
            <FontAwesomeIcon icon={faChevronLeft} /> Go Back
          </h1>
        </Link>
      </header>
      <div className="bg-slate-900 w-full h-screen flex justify-center items-center">
        <div className="bg-slate-800 w-3/4 h-3/4 flex justify-center items-start rounded-2xl drop-shadow-lg p-10">
          <h1 className="text-4xl text-white text-center font-medium">
            Number Guessing Game
          </h1>
        </div>
      </div>
      <footer className="w-full p-1 m-1 flex justify-center items-center z-[9999] bottom-0 fixed text-slate-950">
        <Link to="https://github.com/adhxabre">
          <h1 className="w-auto h-auto px-3 py-1 rounded-2xl bg-white border-2 border-white ease-out duration-200 hover:scale-110 hover:text-white hover:bg-transparent">
            Made by <strong className="text-slate-400">Abel Dustin</strong> with
            💖
          </h1>
        </Link>
      </footer>
    </React.Fragment>
  );
}
