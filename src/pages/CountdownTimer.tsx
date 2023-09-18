import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function CountdownTimer() {
  type clock = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  const [targetDateTime, setTargetDateTime] = React.useState<string>("");
  const [timeRemaining, setTimeRemaining] = React.useState<clock>();
  const [isCounting, setIsCounting] = React.useState<boolean>(false);
  const [countdownMessage, setCountdownMessage] = React.useState<string>(
    "Thinking about countdown."
  );

  React.useEffect(() => {
    let intervalId: number;

    if (isCounting) {
      const targetTime = new Date(targetDateTime).getTime();

      if (isNaN(targetTime)) {
        alert("Insert valid date and time!");
        setIsCounting(false);
        return;
      }

      intervalId = setInterval(() => {
        const now = new Date().getTime();
        const remaining = targetTime - now;

        if (remaining <= 0) {
          clearInterval(intervalId);
          setIsCounting(false);
          setCountdownMessage("Time's up!");
          setTimeRemaining({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
          });
        } else {
          const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
          const hours = Math.floor(
            (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          const minutes = Math.floor(
            (remaining % (1000 * 60 * 60)) / (1000 * 60)
          );
          const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

          setTimeRemaining({
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
          });
        }
      }, 1000);
    }

    // Membersihkan interval saat komponen unmount atau isCounting berubah
    return () => clearInterval(intervalId);
  }, [isCounting, targetDateTime]);

  const startCountdown = () => {
    setIsCounting(true);
    setCountdownMessage("Countdown started");
  };

  const resetCountdown = () => {
    setIsCounting(false);
    setCountdownMessage("Thinking about countdown.");
    setTargetDateTime("");
    setTimeRemaining({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
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
        <h1 className="text-center text-6xl text-white font-semibold">
          Countdown Time
        </h1>
        <div className="p-5 border border-white rounded-xl my-auto w-1/2 h-1/2">
          <p className="text-xl font-medium mb-2">
            Enter the Target Date and Time:
          </p>
          <div className="join w-1/2">
            <input
              className="input join-item w-full"
              type="datetime-local"
              value={targetDateTime}
              onChange={(e) => setTargetDateTime(e.target.value)}
              disabled={isCounting}
            />
            {!isCounting ? (
              <button
                onClick={startCountdown}
                className="btn btn-primary rounded-xl join-item"
                disabled={isCounting}
              >
                {isCounting ? "Countdownting" : "Start"}
              </button>
            ) : (
              <button
                onClick={resetCountdown}
                className="btn btn-danger rounded-xl join-item"
              >
                Reset
              </button>
            )}
          </div>
          <div
            id="countdownDisplay"
            className="w-full h-3/4 flex justify-center items-center text-3xl text-white text-center"
          >
            {isCounting ? (
              <div className="flex gap-5">
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeRemaining?.days }}></span>
                  </span>
                  days
                </div>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeRemaining?.hours }}></span>
                  </span>
                  hours
                </div>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeRemaining?.minutes }}></span>
                  </span>
                  min
                </div>
                <div>
                  <span className="countdown font-mono text-4xl">
                    <span style={{ "--value": timeRemaining?.seconds }}></span>
                  </span>
                  sec
                </div>
              </div>
            ) : (
              countdownMessage
            )}
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
