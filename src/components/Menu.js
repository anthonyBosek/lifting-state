const Menu = ({ darkMode, modeToggle }) => {
  return (
    <div className="menu item">
      <div className="ui toggle checkbox">
        <input
          type="checkbox"
          name="public"
          checked={darkMode}
          onChange={modeToggle}
        />
        <label>Toggle Dark Mode</label>
      </div>
    </div>
  );
};

export default Menu;
