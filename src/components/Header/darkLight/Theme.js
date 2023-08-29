import React, { useContext } from "react";
import "./theme.css";
import { ThemeContext } from "../../context/ThemeProvider";

const Theme = () => {

  const {changeTheme, theme} = useContext(ThemeContext);

  return (
    <li className={`theme ${theme}`} onClick={() => changeTheme(theme === "dark" ? "" : "dark")}>
      {/* <i className="fa-regular fa-sun "></i> */}
      <ion-icon name="sunny" className="sun"></ion-icon>
      <ion-icon name="moon" className="moon"></ion-icon>
    </li>
  );  
};

export default Theme;
