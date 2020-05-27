import React from 'react';

import { socialMediaIcons } from '../../constants';

import './Footer.scss';

export const Footer = () => {
    return (
        <div className={'may-footer'}>
            <div className={'may-footer-content'}>
                <div>Some text about authors</div>
                <div className={'may-footer-social-media-wrapper'}>
                    {
                        socialMediaIcons.map((value, index)=>{
                            return (
                                <img key={index} src={value.src} alt={value.alt}  className={'may-footer-social-media-icon'}/>
                            )
                        })
                    }

                </div>
            </div>
            <div>All rights reserved. may-app © 2020</div>
        </div>
    )
}

