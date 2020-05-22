import React from 'react';
import {links, user} from '../../constants';
import Logo from '../../assets/react.png';

import {UserInfo} from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
    return (
        <div className="may-header navbar">
            <img src={Logo} className="may-header-logo"/>

            <div className="may-header-links-wrapper">
                {
                    links.map((value, index) => {
                        return (
                            <div className="nav-item" key={index}>
                                <a href={value.url} className="may-header-links-wrapper-link nav-link">{value.name}</a>
                            </div>
                        )
                    })
                }
            </div>

            <UserInfo user={user}/>
        </div>
    );
};
