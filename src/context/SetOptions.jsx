import React, { createContext, useState, useEffect } from "react";
import sound from "../timer.mp3";
export const OptionContext = createContext({
  time: null,
  setTime: null,
  pause: null,
  setPause: null,
  toggleClock: null,
  color: null,
  setColor: null,
  reset: null,
  handleWork: null,
  handleShortBreak: null,
  handleLongBreak: null,
  curstate: null,
  setcurstate: null,
  setwork: null,
  setLongBreak: null,
  setShortBreak: null,
  work: null,
  LongBreak: null,
  ShortBreak: null,
});

const audio = new Audio(sound);

export const OptionProvider = ({ children }) => {
  const [colorWork, setColorWork] = useState("red");
  const [colorShortBreak, setColorShortBreak] = useState("orange");
  const [colorLongBreak, setColorLongBreak] = useState("orange");
  const [isAudioPlaying, setIsAudioPlayin] = useState(false);

  const [work, setwork] = useState(30);
  const [ShortBreak, setShortBreak] = useState(5);
  const [LongBreak, setLongBreak] = useState(15);
  const [curstate, setcurstate] = useState("work");
  const [time, setTime] = useState(
    curstate === "work"
      ? work * 60
      : curstate === "Short-break"
      ? ShortBreak * 60
      : LongBreak * 60
  );

  function playMusic() {
    if (!isAudioPlaying) {
      audio.play();
      setIsAudioPlayin(true);
    }
  }
  const [pause, setPause] = useState(true);
  useEffect(() => {
    if (time > 0 && !pause) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, pause]);

  useEffect(() => {
    if (time <= 0) {
      playMusic();
    }
  }, [time]);

  useEffect(() => {
    if (isAudioPlaying == true) {
      audio.pause();
      setIsAudioPlayin(false);
    }
  }, [pause]);

  const toggleClock = () => {
    setPause(!pause);
  };

  const handleWork = () => {
    setcurstate("work");
    setTime(work * 60);
    setColorWork("red");
    setColorShortBreak("orange");
    setColorLongBreak("orange");
  };

  const handleShortBreak = () => {
    setcurstate("Short-break");
    setTime(ShortBreak * 60);
    setPause(true);
    setColorWork("orange");
    setColorShortBreak("red");
    setColorLongBreak("orange");
  };

  const handleLongBreak = () => {
    setcurstate("Long-break");
    setTime(LongBreak * 60);
    setPause(true);
    setColorWork("orange");
    setColorShortBreak("orange");
    setColorLongBreak("red");
  };
  const reset = () => {
    curstate === "work"
      ? setTime(work * 60)
      : curstate === "Short-break"
      ? setTime(ShortBreak * 60)
      : setTime(LongBreak * 60);
    setPause(true);
  };

  const apply = () => {
    setTime(
      curstate === "work"
        ? work * 60
        : curstate === "Short-break"
        ? ShortBreak * 60
        : LongBreak * 60
    );
  };
  const value = {
    time,
    setTime,
    pause,
    setPause,
    toggleClock,
    reset,
    handleWork,
    handleShortBreak,
    handleLongBreak,
    setwork,
    setLongBreak,
    setShortBreak,
    apply,
    colorWork,
    colorLongBreak,
    colorShortBreak,
  };
  return (
    <OptionContext.Provider value={value}>{children}</OptionContext.Provider>
  );
};
