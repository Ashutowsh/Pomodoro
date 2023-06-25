import React, { useContext } from "react";
import { OptionContext } from "../context/SetOptions";
function Clock() {
  const { time, toggleClock, pause, reset } = useContext(OptionContext);

  const getTimeFormat = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;

    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  return (
    <div>
      <div className="big-circle center">
        <div className="small-circle center">{getTimeFormat(time)}</div>
      </div>
      <div className="mode">
        <ul className="options1">
          <li>
            <button
              className="choice"
              onClick={toggleClock}
              style={{ backgroundColor: pause ? "orange" : "red" }}
            >
              {pause ? "Start" : "Pause"}
            </button>
          </li>
          <li>
            <button className="choice" onClick={reset}>
              Reset
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Clock;
