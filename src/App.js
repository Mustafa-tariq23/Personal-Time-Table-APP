import React, { useState, useEffect } from "react";
import DailyTasksApp from "./components/DailyTasksApp";
import "./global.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    setDarkMode(savedTheme === "true");
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""} px-6 py-12`}>
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-4 py-2 rounded-lg text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>
      <DailyTasksApp darkMode={darkMode} />
    </div>
  );
}

export default App;
