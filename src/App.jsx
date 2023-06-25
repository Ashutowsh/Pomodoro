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
      <Time />
      <button className="settings" onClick={onSettingsOpen}>
        ⚙️
      </button>
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
