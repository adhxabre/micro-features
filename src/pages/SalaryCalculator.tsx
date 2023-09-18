import React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SalaryCalculator() {
  const [gajiPokok, setGajiPokok] = React.useState<number>(0);
  const [tunjangan, setTunjangan] = React.useState<number>(0);
  const [kewajibanPokok, setKewajibanPokok] = React.useState<number>(0);
  const [gajiKotor, setGajiKotor] = React.useState<number>(0);
  const [gajiBersih, setGajiBersih] = React.useState<number>(0);

  const hitungGaji = () => {
    const gajiKotor = gajiPokok + tunjangan;
    const gajiBersih = gajiKotor - kewajibanPokok;

    setGajiKotor(gajiKotor);
    setGajiBersih(gajiBersih);
  };

  const formatNumber = (number: number) => {
    const formatNumber = new Intl.NumberFormat("id-ID");
    return formatNumber.format(number);
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
      <div className="w-full h-screen bg-slate-900 p-20 flex justify-center items-center">
        <div className="mt-5 p-10 border border-slate-400 rounded-2xl">
          <h1 className="text-center mb-4 text-white text-4xl font-semibold">
            Salary Calculator
          </h1>
          <div className="grid grid-cols-2 gap-16">
            <div className="grid grid-rows-4 w-full">
              <div className="mb-3 form-control">
                <label htmlFor="gajiPokok" className="label">
                  Basic Salary
                </label>
                <input
                  type="number"
                  className="input w-full"
                  id="gajiPokok"
                  value={gajiPokok}
                  onChange={(e) => setGajiPokok(Number(e.target.value))}
                />
              </div>
              <div className="mb-3 form-control">
                <label htmlFor="tunjangan" className="label">
                  Allowance
                </label>
                <input
                  type="number"
                  className="input w-full"
                  id="tunjangan"
                  value={tunjangan}
                  onChange={(e) => setTunjangan(Number(e.target.value))}
                />
              </div>
              <div className="mb-3 form-control">
                <label htmlFor="kewajibanPokok" className="label">
                  Obligations
                </label>
                <input
                  type="number"
                  className="input w-full"
                  id="kewajibanPokok"
                  value={kewajibanPokok}
                  onChange={(e) => setKewajibanPokok(Number(e.target.value))}
                />
              </div>
              <button className="btn btn-neutral" onClick={hitungGaji}>
                Submit
              </button>
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-3xl text-center font-semibold">Result</h1>
              <p>Gross Salary: {`Rp. ${formatNumber(gajiKotor)}`}</p>
              <p>Basic Salary: {`Rp. ${formatNumber(gajiPokok)}`}</p>
              <p>Net Salary: {`Rp. ${formatNumber(gajiBersih)}`}</p>
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
