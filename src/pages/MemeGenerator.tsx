import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function MemeGenerator() {
  const [isMeme, setIsMeme] = React.useState<string>("");

  const MemeFetch = async () => {
    const response = await axios.get("https://meme-api.com/gimme");
    return setIsMeme(response.data.url);
  };

  const GetMeme: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    MemeFetch();
    console.log(isMeme);
  };

  return (
    <React.Fragment>
      <header className="bg-gray-700 z-[9999] top-0 fixed w-full h-auto py-2 px-20">
        <Link to="/">
          <h1 className="font-medium">
            <FontAwesomeIcon icon={faChevronLeft} /> Go Back
          </h1>
        </Link>
      </header>
      <div className="w-full h-screen bg-slate-900 p-20">
        <div className="w-full p-5 flex justify-center items-center gap-2 text-white text-xl font-normal">
          Meme Generator 💀
          <button
            onClick={(e) => GetMeme(e)}
            className="border border-white rounded-full bg-white text-slate-800 font-bold px-4 py-1 ease-out duration-200 hover:bg-transparent hover:text-white"
          >
            Generate!
          </button>
        </div>
        <div className="w-full h-5/6 flex justify-center items-center">
          {isMeme ? (
            <img
              src={isMeme}
              alt="finest-meme"
              className="h-full w-auto object-fit"
            />
          ) : (
            <p className="text-white text-2xl font-normal">
              Press the{" "}
              <button
                onClick={(e) => GetMeme(e)}
                className="border border-white rounded-full bg-white text-slate-800 font-bold px-4 py-1 ease-out duration-200 hover:bg-transparent hover:text-white"
              >
                Generate!
              </button>{" "}
              button to get random memes!
            </p>
          )}
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
