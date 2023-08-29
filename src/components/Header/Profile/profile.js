import React, { useEffect, useRef, useState } from "react";
import {
  img1,
  user_icon,
  edit_icon,
  setting_icon,
  mail_icon,
  weather_icon,
} from "../../../assets/";
import "./profile.css";

const Profile = () => {
  // const details = [
  //   {
  //     text: "user",
  //     img: { user_icon },
  //   },
  //   {
  //     text: "edit",
  //     img: { edit_icon },
  //   },
  //   {
  //     text: "setting",
  //     img: { setting_icon },
  //   },
  //   {
  //     text: "E-mail",
  //     img: { mail_icon },
  //   },
  //   {
  //     text: "Weather",
  //     img: { weather_icon },
  //   },
  // ];

  const ref = useRef();

  useEffect(() => {
    const handle = (e) => {
      if (!ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handle);

    return () => {
      document.removeEventListener("click", handle);
    };
  });

  const [open, setOpen] = useState(false);

  return (
    <div className="my-profile" ref={ref}>
      <div className="image" onClick={() => setOpen(!open)}>
        <img src={img1} alt="yousef" />
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>
          Yousef Harara
          <br />
          <span>Web Designer</span>
        </h3>

        <ul>
          <DropdownItem img={user_icon} text="User" />
          <DropdownItem img={setting_icon} text="Setting" />
          <DropdownItem img={edit_icon} text="Edit" />
          <DropdownItem img={mail_icon} text="E-mail" />
          <DropdownItem img={weather_icon} text="Weather" />
        </ul>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <li key={props.key} className="dropdownItem">
      <img src={props.img} alt="123" />
      <p>{props.text}</p>
    </li>
  );
}
export default Profile;
