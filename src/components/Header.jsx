import React from "react";
import { MainContext, useContext } from "../context/context";

import { BsMoonFill } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";

function Header() {
  const style = {
    fontSize: "18px",
    paddingRight: "7px",
  };
  const { darkMode, setDarkMode } = useContext(MainContext);

  return (
    <div id="header" className={`${darkMode ? "active" : ""}`}>
      <div className="container">
        <h1>Where in the world?</h1>
        <div
          onClick={() => {
            setDarkMode(!darkMode);
            localStorage.setItem("dark", !darkMode);
          }}
          className="dark-mode-box"
        >
          {darkMode ? (
            <FiSettings style={style} />
          ) : (
            <BsMoonFill style={style} />
          )}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </div>
      </div>
    </div>
  );
}

export default Header;
