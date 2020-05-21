import React from 'react';

import { socialMediaIcons } from '../../constants';

import './Footer.scss';

export function Footer(props) {
  return (
    <div className="may-footer">
      <div className="may-footer-content">
      <div className="may-footer-text">Some text about authors</div>
      <div className="may-footer-social-media-wrapper">
          {socialMediaIcons.map((icon, index) => {
              return (
                  <img key={index} src={icon.src} className="may-footer-social-media-icon" alt={icon.alt}/>
              );
          })}
      </div>
      </div>
      <div>All rights reserved. may-app © 2020</div>
    </div>
  );
}

