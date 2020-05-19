import React from "react";
import "../footer/Footer.scss"
import {socialMediaIcons} from "../../Contetnt/Index";


export const Footer = () =>{
    return (
        <div className="my-footer">
            <div className="my-footer-content">
                <div>Some text about authors</div>
                <div className="my-footer-social-media-wrapper">
                    <img className="my-footer-social-media-icon" src={socialMediaIcons[0].src}/>
                    <img className="my-footer-social-media-icon" src={socialMediaIcons[1].src}/>
                    <img className="my-footer-social-media-icon" src={socialMediaIcons[2].src}/>
                </div>
            </div>
            <div>All rights reserved. may-app © 2020</div>
        </div>
    )
};