import React from 'react'
import { BsMoonFill} from "react-icons/bs";

function Header() {

  const style = {
    fontSize: "18px",
    paddingRight:"7px"
  };

  return (
    <div id="header">
        <div className="container">
            <h1>Where in the world?</h1>
            <div className="dark-mode-box">
            <BsMoonFill style={style}/> Dark Mode
            </div>
        </div>
    </div>
  )
}

export default Header