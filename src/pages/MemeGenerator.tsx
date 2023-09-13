import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

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
        <p className="text-white text-xl absolute z-[8888] bottom-0 right-0 mb-10 mr-10">
          What should you do! <FontAwesomeIcon icon={faArrowDown} />
        </p>
      </div>
      <section id="todo" className="w-full h-[60vh] bg-slate-800 p-20">
        <h1 className="text-center text-white text-4xl font-bold">
          What should you do!
        </h1>
        <div className="overflow-x-auto w-1/2 mx-auto mt-10">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Topic</th>
                <th>Explanation</th>
                <th>Is Done</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Fetch API</td>
                <td>
                  Know how to getting data from an API and render it on
                  client-side
                </td>
                <td className="flex justify-center">
                  <input type="checkbox" className="checkbox" />
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Function</td>
                <td>
                  Know how to create a function that runs a commands we need to
                  execute, specifically to get a data
                </td>
                <td className="flex justify-center">
                  <input type="checkbox" className="checkbox" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="w-full h-[40vh] bg-slate-900 p-10 flex flex-col">
        <h1 className="text-center text-4xl text-white font-semibold">
          Submit your task here!
        </h1>
        <form className="w-full flex justify-center gap-10 my-auto">
          <div className="form-control w-full">
            <label className="label">Github Repository Link</label>
            <input
              type="text"
              placeholder="https://github.com/xxxxx/meme-generator"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">Vercel Link</label>
            <input
              type="text"
              placeholder="https://xxxxx.vercel.app/"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <button type="submit" className="btn btn-neutral mt-auto w-60">
              Submit
            </button>
          </div>
        </form>
      </section>
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
