import React from "react";
import Menu from "./Menu";

function Header({ darkMode, modeToggle }) {
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} modeToggle={modeToggle} />
      </div>
    </div>
  );
}

export default Header;
