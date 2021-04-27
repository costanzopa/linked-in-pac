import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { auth } from '../../firebase/firebase.utils';
import { userLogout } from '../../redux/user/user.actions';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Header = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const logOutClick = () => {
    dispatch(userLogout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src="linkedin.svg" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption
          onClick={logOutClick}
          avatar={user ? user.photoURL : 'avatar.jpg'}
          title="Me"
        />
      </div>
    </div>
  );
};
export default Header;
