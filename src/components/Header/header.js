import React from 'react';
import './header.css';
import Profile from './Profile/profile';
import { NavLink } from 'react-router-dom';
import Dropdown from './Dropdown/dropdown';
import Theme from './darkLight/Theme';

const Header = () => {
  return (
    <div className='my-header'>
      <nav>
        <div className="profile">
          <Profile/>
        </div>

        <ul className="links">
          <Dropdown link = "Home" http="/baseHome"/>
          <Dropdown link = "Setting" http="/setting"/>
          <Dropdown link = "Blog" http="/blog"/>
          <Dropdown link = "Profile" http="/profile"/>
          <Dropdown link = "Main" http="/"/>
          <li><i className="fa-solid fa-gear"></i></li>
          <>
            {/* dark-light */}
            {/* <i className="fa-solid fa-sun"></i> */}
            <Theme/>
          </>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
