import React from 'react';
import {socialMediaIcons} from "../../constants";
import './Footer.scss';

export const Footer = () => {
    return (
        <div className='may-footer'>
            <div className='may-footer-content'>
                <div>Some text about authors</div>
                {
                    socialMediaIcons.map((item, index)=>{
                        return(
                            <div key={index} className='may-footer-social-media-wrapper'>
                                <img src={item.src} alt={item.alt}
                                     className='may-footer-social-media-icon'/>
                            </div>
                        )
                    })
                }
            </div>
            <div>All rights reserved. may-app © 2020</div>
        </div>
    )};