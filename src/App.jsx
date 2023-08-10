import React, { useState, useEffect } from "react";
import { MainContext } from "./context/context";
import { Route, Routes } from "react-router-dom";
import "./assets/style/App.css";
//Pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Error from "./pages/Error";
//Components
import Header from "./components/Header"

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("dark");
    if (theme === "true") {
      setDarkMode(true);
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);

  const data = {
    darkMode,
    setDarkMode,
  };

  return (
    <div className="app">
      <MainContext.Provider value={data}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail/:countryName" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </MainContext.Provider>
    </div>
  );
}

export default App;
