import React from "react";
import Navbar from "./components/Navbar";
import Booklist from "./components/Booklist";
import ToggleTheme from "./components/ToggleTheme";
import ThemeContextProvider from "../src/contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Booklist />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
