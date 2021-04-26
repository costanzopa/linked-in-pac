import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  Home,
  SupervisorAccount,
  BusinessCenter,
  Chat,
  Notifications,
} from '@material-ui/icons';
import HeaderOption from './HeaderOption';
import './Header.styles.css';

const Header = (props) => {
  return (
    <div className="header">
      <div className="header__left">
        <img src="linkedin.svg" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="avatar.jpeg" title="Me" />
      </div>
    </div>
  );
};
export default Header;
