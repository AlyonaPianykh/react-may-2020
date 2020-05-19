import React from 'react';
import { socialMediaIcons } from '../../constants';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="may-footer">
      <div className='may-footer-content'>
        <div>
          Some text about authors
        </div>
        <div className='may-footer-social-media-wrapper'>
          <img src={socialMediaIcons[0].src} className='may-footer-social-media-icon'
            alt={socialMediaIcons[0].alt} />
          <img src={socialMediaIcons[1].src} className='may-footer-social-media-icon'
            alt={socialMediaIcons[1].alt} />
          <img src={socialMediaIcons[2].src} className='may-footer-social-media-icon'
            alt={socialMediaIcons[2].alt} />
        </div>
      </div>
      <div>
        All rights reserved. may-app © 2020
      </div>
    </div>
  );
}