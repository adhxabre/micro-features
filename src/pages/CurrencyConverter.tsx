import { faChevronLeft, faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

export default function CurrencyConverter() {
  const [amount, setAmount] = React.useState(0);
  const [fromCurrency, setFromCurrency] = React.useState("usd");
  const [toCurrency, setToCurrency] = React.useState("usd");
  const [result, setResult] = React.useState("");

  const exchangeRates = {
    usd: {
      eur: 0.85,
      gbp: 0.75,
      idr: 14300,
    },
    eur: {
      usd: 1.18,
      gbp: 0.89,
      idr: 16859.5,
    },
    gbp: {
      usd: 1.33,
      eur: 1.12,
      idr: 19066.67,
    },
    idr: {
      usd: 0.00007,
      eur: 0.000059,
      gbp: 0.000052,
    },
  };

  const convertCurrency = () => {
    if (isNaN(amount)) {
      alert("Masukkan jumlah yang valid.");
      return;
    }

    if (
      !(fromCurrency in exchangeRates) ||
      !(toCurrency in exchangeRates[fromCurrency])
    ) {
      alert("You can't exchange using the same currency.");
      return;
    }

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * conversionRate).toFixed(2);
    setResult(`${convertedAmount} ${toCurrency.toUpperCase()}`);
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
      <div className="w-full h-screen bg-slate-900 p-20 flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl text-white font-bold mb-10">
          Currency Converter <FontAwesomeIcon icon={faCoins} />
        </h1>
        <div className="p-3 w-1/2 border border-white rounded-xl">
          <div className="flex justify-between items-center">
            <input
              className="input p-2 w-full mr-5"
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              placeholder="Input amount"
            />
            <select
              className="select p-2 w-1/4 mr-3"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="idr">IDR</option>
            </select>
            <span className="mr-3">TO</span>
            <select
              className="select p-2 w-1/4 mr-3"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
              <option value="gbp">GBP</option>
              <option value="idr">IDR</option>
            </select>
            <button
              onClick={convertCurrency}
              className="btn btn-neutral rounded-lg px-5"
            >
              Convert
            </button>
          </div>
          <p className="my-2 mt-10 text-white text-left text-xl font-medium">
            Result:
          </p>
          <div className="border border-slate-600 rounded-xl flex items-center p-3 w-full text-white text-md font-light">
            <span>
              {result ? result : "Please convert the currency first!"}
            </span>
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
