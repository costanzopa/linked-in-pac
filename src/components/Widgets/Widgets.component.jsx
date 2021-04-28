import React from 'react';
import InfoIcon from '@material-ui/icons/Info';
import './Widgets.styles.css';
import { FiberManualRecord } from '@material-ui/icons';

const Widgets = (props) => {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle('DevITJobs', 'Top  news - 999 readers')}
      {newArticle('Aprende Google Drive', 'Elena Santos de Paz')}
    </div>
  );
};
export default Widgets;
