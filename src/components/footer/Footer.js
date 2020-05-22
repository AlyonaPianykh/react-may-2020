import React from 'react';

import {socialMediaIcons} from '../../constants';

import './Footer.scss';

export function Footer(props) {
    return (
        <div className="may-footer">
            <div className="may-footer-content">
                <div className="may-footer-text">Some text about authors</div>
                <div className="may-footer-social-media-wrapper">
                    {socialMediaIcons.map((val, i) =>
                        <img className="may-footer-social-media-icon" key={i} src={val.src} alt={val.alt}/>)}
                </div>
            </div>
            <div>All rights reserved. may-app © 2020</div>
        </div>
    );
}

