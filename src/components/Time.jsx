import React, { useState } from "react";

function Time() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  };
  setInterval(updateTime, 1000);
  return (
    <div className="header">
      <p className="title">Pomodoro App</p>
      <p className="time center">{currentTime}</p>
    </div>
  );
}
export default Time;
