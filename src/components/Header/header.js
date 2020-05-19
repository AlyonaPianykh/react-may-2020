import {links,user} from "../../Contetnt/Index";
import logo from "../../img/logo.svg";
import React from "react";
import {UserInfo} from "../UserInfo/UserInfo";

export const Header = () => {

    return (
        <div className="my-header">
            <img className="my-header-logo" src={logo}/>
            <div className='my-header-wrap'>
                <a href={links[0].url} className="my-header-wrap-link">{links[0].name}</a>
                <a href={links[1].url} className="my-header-wrap-link">{links[1].name}</a>
                <a href={links[2].url} className="my-header-wrap-link">{links[2].name}</a>
            </div>
            <UserInfo user = {user}/>
        </div>
    )
};