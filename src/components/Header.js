import Menu from "./Menu";

const Header = ({ darkMode, modeToggle }) => {
  return (
    <div className={`ui fixed menu ${darkMode ? "inverted" : ""}`}>
      <div className="menu item">Fwitter</div>
      <div className="right menu">
        <Menu darkMode={darkMode} modeToggle={modeToggle} />
      </div>
    </div>
  );
};

export default Header;
