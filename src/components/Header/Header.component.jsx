import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
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
        <HeaderOption />
      </div>
    </div>
  );
};
export default Header;
