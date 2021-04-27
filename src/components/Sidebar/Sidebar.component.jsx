import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';

import './Sidebar.styles.css';
import { selectCurrentUser } from '../../redux/user/user.selector';

const Sidebar = (props) => {
  const user = useSelector(selectCurrentUser);

  const recentItems = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="background.jpg" alt="" />
        <Avatar
          className="sidebar__avatar"
          src={user ? user.photoURL : 'avatar.jpg'}
        />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who view you?</p>
          <p className="sidebar__statNumber">2,456</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,456</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems('zerotomastery.io')}
        {recentItems('bigdata')}
        {recentItems('digitalmarketing')}
        {recentItems('innovation')}
      </div>
    </div>
  );
};
export default Sidebar;
