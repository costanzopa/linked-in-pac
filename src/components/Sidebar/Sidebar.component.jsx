import React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './Sidebar.styles.css';

const Sidebar = (props) => {
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
        <Avatar className="sidebar__avatar" src="avatar.jpg" />
        <h2>Pablo Costanzo</h2>
        <h4>costanzopa@gmail.com</h4>
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
