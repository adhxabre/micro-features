import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function WordScramble() {
  const words = [
    "Apple",
    "Banana",
    "Cherry",
    "Grape",
    "Orange",
    "Avocado",
    "Guava",
    "Strawberry",
    "Pineapple",
    "Starfruit",
    "Dragonfruit",
    "Raspberry",
    "Blueberry",
  ];

  const [currentWord, setCurrentWord] = React.useState<string>("");
  const [scrambledWord, setScrambledWord] = React.useState<string>("");
  const [inputWord, setInputWord] = React.useState<string>("");
  const [score, setScore] = React.useState<number>(0);

  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  };

  const scrambleWord = (word: string) => {
    const wordArray = word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join("");
  };

  const checkAnswer = () => {
    if (inputWord.toLowerCase() === currentWord.toLowerCase()) {
      setScore(score + 1);
      setCurrentWord(getRandomWord());
      setInputWord("");
    } else {
      alert("Jawaban salah, coba lagi.");
    }
  };

  React.useEffect(() => {
    setCurrentWord(getRandomWord());
  }, []);

  React.useEffect(() => {
    setScrambledWord(scrambleWord(currentWord));
  }, [currentWord]);

  return (
    <React.Fragment>
      <header className="bg-gray-700 z-[9999] top-0 fixed w-full h-auto py-2 px-20">
        <Link to="/">
          <h1 className="font-medium">
            <FontAwesomeIcon icon={faChevronLeft} /> Go Back
          </h1>
        </Link>
      </header>
      <div className="w-full h-screen bg-slate-900 p-20 flex justify-center items-center">
        <div className="mt-5">
          <h1 className="text-center text-white text-5xl font-semibold mb">
            Word Scramble
          </h1>
          <div className="flex">
            <div className="flex flex-col">
              <p className="text-2xl text-center font-semibold my-10">
                Score: {score}
              </p>
              <h2 className="font-thin text-2xl text-center">Scrambled word</h2>
              <p className="text-center text-6xl font-bold mb-5">
                {scrambledWord}
              </p>
              <div className="join my-5">
                <input
                  type="text"
                  className="input join-item"
                  value={inputWord}
                  onChange={(e) => setInputWord(e.target.value)}
                />
                <button
                  className="btn btn-neutral join-item"
                  onClick={checkAnswer}
                >
                  Check Answer
                </button>
              </div>
            </div>
          </div>
        </div>
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
