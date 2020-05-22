import React from 'react';

import {socialMediaIcons} from "../../constants";

import './Footer.scss'


export const Footer = (props) => {
    return <div className='may-footer'>
        <div className="may-footer-content">
            Some text about authors
            <div className="may-footer-social-media-wrapper">
                {
                    socialMediaIcons.map((value, index) => {
                        return (
                            <img src={value.src} alt={value.alt} key={index}
                                 className="may-footer-social-media-icon"/>
                        )
                    })
                }
            </div>
        </div>
        <div>All rights reserved. may-app © 2020</div>
    </div>
}


