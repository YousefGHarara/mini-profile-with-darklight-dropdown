import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./dropdown.css";

const arr1 = ["Blog1", "Blog2", "Blog3", "Blog4"];

const Dropdown = ({link, http}) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const ref = useRef();

  return (
    <li
      className="dropdown"
      ref={ref}
      onMouseEnter={() => setOpenDropdown(true)}
      onMouseLeave={() => setOpenDropdown(false)}
    >
      <div className="selected">
        <NavLink to={http}>{link}</NavLink>
      </div>

      <div className={`dropdown-item ${openDropdown ? "active" : "inactive"}`}>
        {arr1.map((v, i) => {
          return (
            <p key={i} onClick={(e) => console.log(e.target.textContent)}>
              {v}
            </p>
          );
        })}
      </div>
    </li>
  );
};

export default Dropdown;
