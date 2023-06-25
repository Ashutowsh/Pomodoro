import React, { useContext } from "react";
import { OptionContext } from "../context/SetOptions";
function Navbar() {
  const {
    colorWork,
    colorShortBreak,
    colorLongBreak,
    handleWork,
    handleShortBreak,
    handleLongBreak,
  } = useContext(OptionContext);
  return (
    <div>
      <ul className="options">
        <li>
          <button
            className="choice"
            onClick={handleWork}
            style={{ backgroundColor: colorWork }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            className="choice"
            onClick={handleShortBreak}
            style={{
              backgroundColor: colorShortBreak,
            }}
          >
            Short-Break
          </button>
        </li>
        <li>
          <button
            className="choice"
            onClick={handleLongBreak}
            style={{
              backgroundColor: colorLongBreak,
            }}
          >
            Long-Break
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
