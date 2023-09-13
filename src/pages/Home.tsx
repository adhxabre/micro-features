import React from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown19,
  faImage,
  faTemperatureFull,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <React.Fragment>
      <div className="bg-slate-900 w-full h-screen flex justify-center items-center">
        <div className="w-3/4 h-3/4 bg-slate-800 rounded-2xl p-10">
          <h1 className="text-white text-3xl text-center font-bold">
            Micro-Features
          </h1>
          <div className="p-10 flex flex-col gap-5 justify-start items-center">
            <div className="w-full flex justify-between p-3 border border-slate-300 rounded-2xl">
              <div className="w-full h-full">
                <h1 className="text-white text-md font-semibold">
                  Degree Converter <FontAwesomeIcon icon={faTemperatureFull} />
                </h1>
                <p className="text-white text-sm font-light">
                  <span className="text-red-500 font-bold">Hard</span>, React
                  (JavaScript), Function, Logic, Conditional Rendering
                </p>
              </div>
              <Link
                to="/degree-converter"
                className="bg-slate-600 border-2 border-slate-600 w-80 p-2 text-white font-normal rounded-full ease-out duration-200 hover:scale-105 hover:bg-transparent"
              >
                <h1 className="text-center">Solve Challenge</h1>
              </Link>
            </div>
            <div className="w-full flex justify-between p-3 border border-slate-300 rounded-2xl">
              <div className="w-full h-full">
                <h1 className="text-white text-md font-semibold">
                  Meme Generator <FontAwesomeIcon icon={faImage} />
                </h1>
                <p className="text-white text-sm font-light">
                  <span className="text-green-500 font-bold">Easy</span>, React
                  (JavaScript), Axios, Function, Conditional Rendering, Fetch
                  API, Async/Await
                </p>
              </div>
              <Link
                to="/meme-generator"
                className="bg-slate-600 border-2 border-slate-600 w-80 p-2 text-white font-normal rounded-full ease-out duration-200 hover:scale-105 hover:bg-transparent"
              >
                <h1 className="text-center">Solve Challenge</h1>
              </Link>
            </div>
            <div className="w-full flex justify-between p-3 border border-slate-300 rounded-2xl">
              <div className="w-full h-full">
                <h1 className="text-white text-md font-semibold">
                  Number Guess <FontAwesomeIcon icon={faArrowDown19} />
                </h1>
                <p className="text-white text-sm font-light">
                  <span className="text-orange-500 font-bold">Medium</span>,
                  React (JavaScript), Function, Logic, Conditional Rendering
                </p>
              </div>
              <Link
                to="/number-guess"
                className="bg-slate-600 border-2 border-slate-600 w-80 p-2 text-white font-normal rounded-full ease-out duration-200 hover:scale-105 hover:bg-transparent"
              >
                <h1 className="text-center">Solve Challenge</h1>
              </Link>
            </div>
          </div>
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
