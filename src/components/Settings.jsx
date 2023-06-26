import React, { useContext } from "react";
import { OptionContext } from "../context/SetOptions";
function Settings({ isSettingsOpen, onSettingsClose, children }) {
  const { setLongBreak, setShortBreak, setwork, apply } =
    useContext(OptionContext);
  return (
    <>
      {isSettingsOpen && (
        <div className="settings-bg">
          <div className="settings-box">
            <div className="close">
              <button className="close-button center" onClick={onSettingsClose}>
                ❌
              </button>
              <p className="titleDuration">Set durations</p>
            </div>
            <div className="duration">
              <p>Work</p>
              <input
                type="number"
                placeholder="In mins"
                className="work-text"
                name="work"
                onChange={(e) => {
                  setwork(e.target.value);
                }}
              ></input>
            </div>

            <div className="duration">
              <p>Short Break</p>
              <input
                type="number"
                name="shortBreak"
                placeholder="In mins"
                onChange={(e) => {
                  setShortBreak(e.target.value);
                }}
              ></input>
            </div>

            <div className="duration">
              <p>Long Break</p>
              <input
                type="number"
                placeholder="In mins"
                name="longBreak"
                onChange={(e) => {
                  setLongBreak(e.target.value);
                }}
              ></input>
            </div>
            <button className="submit" onClick={apply}>
              Apply changes
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default Settings;
