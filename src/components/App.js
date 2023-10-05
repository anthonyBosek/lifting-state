import { useState } from "react";
import DarkModeWrapper from "./DarkModeWrapper";
import Header from "./Header";
import TweetsContainer from "./TweetsContainer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const modeToggle = () => setDarkMode((prev) => !prev);

  return (
    <DarkModeWrapper darkMode={darkMode}>
      <Header darkMode={darkMode} modeToggle={modeToggle} />
      <TweetsContainer />
    </DarkModeWrapper>
  );
};

export default App;
