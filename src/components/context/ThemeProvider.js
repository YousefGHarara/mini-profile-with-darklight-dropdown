import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
