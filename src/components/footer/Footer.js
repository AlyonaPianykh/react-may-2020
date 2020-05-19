import React from 'react';
import {socialMediaIcons} from "../../constants";
import './Footer.scss';

function Footer() {

    const rights = "All rights reserved. may-app © 2020";
    const aboutUs = "Some text about authors";

    return (
        <div className="may-footer">
            <div className="may-footer-content">
                <div>
                    {aboutUs}
                </div>
                <div className="may-footer-social-media-wrapper">
                    {socialMediaIcons.map(icon => (
                        <img key={icon.alt} className="may-footer-social-media-icon"
                             src={icon.src} alt={icon.alt}/>
                    ))}

                </div>
            </div>
            <div>
                {rights}
            </div>

        </div>
    )

}

export default Footer;