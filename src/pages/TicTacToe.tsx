import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function TicTacToe() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = React.useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index: number) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const renderSquare = (index: number) => {
    return (
      <button
        className="btn btn-neutral w-20 h-20 text-white text-2xl text-center font-bold"
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  const getStatus = () => {
    if (winner) {
      return (
        <div className="alert alert-success">
          Winner: {winner}
          <button className="btn btn-neutral ml-2" onClick={() => resetGame()}>
            Play Again
          </button>
        </div>
      );
    } else if (board.every((square) => square)) {
      return (
        <div className="alert alert-info">
          Draw! No Winner.
          <button className="btn btn-primary ml-2" onClick={() => resetGame()}>
            Play Again
          </button>
        </div>
      );
    } else {
      return <div className="alert">Next player: {xIsNext ? "X" : "O"}</div>;
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  const renderBoard = () => {
    const rows = [];

    for (let i = 0; i < 3; i++) {
      const squares = [];
      for (let j = 0; j < 3; j++) {
        const index = i * 3 + j;
        squares.push(renderSquare(index));
      }
      rows.push(
        <div className="flex flex-row" key={i}>
          {squares}
        </div>
      );
    }

    return rows;
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
      <div className="w-full h-screen bg-slate-900 p-20 flex flex-col items-center">
        <div className="text-center text-6xl text-white font-semibold mb-20">
          <h1>TicTacToe</h1>
        </div>
        <div className="text-center mb-10 w-1/4">{getStatus()}</div>
        <div className="flex w-full h-full items-center justify-center">
          <div className="grid grid-row-3">{renderBoard()}</div>
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

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};
