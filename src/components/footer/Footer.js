import React from 'react';

import { socialMediaIcons } from '../../constants';

import './Footer.scss';

export function Footer(props) {
    let iconsArr = [];
    socialMediaIcons.forEach(elem => {
        iconsArr.push(<img className="may-footer-social-media-icon" src={elem.src} alt={elem.alt}/>)
    });

  return (
    <div className="may-footer">
      <div className="may-footer-content">
      <div className="may-footer-text">Some text about authors</div>
      <div className="may-footer-social-media-wrapper">
          {iconsArr}
      </div>
      </div>
      <div>All rights reserved. may-app © 2020</div>
    </div>
  );
}

