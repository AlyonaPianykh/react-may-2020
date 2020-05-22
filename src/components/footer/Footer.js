import React from 'react';

import {links, socialMediaIcons} from '../../constants';

import './Footer.scss';

export function Footer(props) {
  return (
    <div className="may-footer">
      <div className="may-footer-content">
      <div className="may-footer-text">Some text about authors</div>
      <div className="may-footer-social-media-wrapper">
        {/*<img className="may-footer-social-media-icon" src={socialMediaIcons[0].src} alt={socialMediaIcons[0].alt}/>*/}
        {/*<img className="may-footer-social-media-icon" src={socialMediaIcons[1].src} alt={socialMediaIcons[1].alt}/>*/}
        {/*<img className="may-footer-social-media-icon" src={socialMediaIcons[2].src} alt={socialMediaIcons[2].alt}/>*/}
          {socialMediaIcons.map((value, index) =>{
              return(
                  <img key={index} src={value.src} className='may-footer-social-media-icon ' alt={value.alt}></img>
              )
          })};
      </div>
      </div>
      <div>All rights reserved. may-app © 2020</div>
    </div>
  );
}

