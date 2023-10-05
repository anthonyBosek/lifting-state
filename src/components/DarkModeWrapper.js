const DarkModeWrapper = (props) => {
  return (
    <div id="wrapper" className={props.darkMode ? "dark-mode" : ""}>
      {props.children}
    </div>
  );
};

export default DarkModeWrapper;
