import React from 'react';

import './Footer.scss';

export function Footer(props) {

  const {icons} = props;

  return (
    <div className="may-footer">
      <div className="may-footer-content">
      <div className="may-footer-text">Some text about authors</div>
      <div className="may-footer-social-media-wrapper">
      {icons.map((icon, index )=> (
          <img className="may-footer-social-media-icon" src={icon.src} alt={icon.alt} key={index} />
        ) )}
      </div>
      </div>
      <div>All rights reserved. may-app © 2020</div>
    </div>
  );
}