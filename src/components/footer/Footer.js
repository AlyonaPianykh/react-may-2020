import React from 'react';

import {socialMediaIcons} from '../../constants';

import './Footer.scss';

export function Footer(props) {
    return (
        <div className="may-footer">
            <div className="may-footer-content">
                <div className="may-footer-text">Some text about authors</div>
                <div className="may-footer-social-media-wrapper">
                    {
                        socialMediaIcons.map((sc, id) => {
                            return (
                                <img key={id} className="may-footer-social-media-icon" src={sc.src} alt={sc.alt}/>
                            )
                        })
                    }
                </div>
            </div>
            <div>All rights reserved. may-app © 2020</div>
        </div>
    );
}