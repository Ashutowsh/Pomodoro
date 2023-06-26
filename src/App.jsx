import React, { useState } from "react";
import Time from "./components/Time";
import Navbar from "./components/Navbar";
import Clock from "./components/Clock";
import Settings from "./components/Settings";

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const onSettingsOpen = () => {
    setIsSettingsOpen(true);
  };
  const onSettingsClose = () => {
    setIsSettingsOpen(false);
  };
  return (
    <div className="home center">
      <div className="title-container">
        <button className="settings" onClick={onSettingsOpen}>
          ⚙️
        </button>
        <Time />
      </div>
      <Navbar />
      <Settings
        isSettingsOpen={isSettingsOpen}
        onSettingsClose={onSettingsClose}
        onSettingsOpen={onSettingsOpen}
      />
      <Clock />
    </div>
  );
}
export default App;
