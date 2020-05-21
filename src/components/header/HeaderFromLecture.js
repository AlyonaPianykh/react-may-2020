import React from 'react';
import {links, user} from '../../constants';
import Logo from '../../assets/react.png';

import {UserInfo} from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
    //console.log(links);
    return (
        <div className="may-header navbar">
            <img src={Logo} className="may-header-logo"/>

            <div className="may-header-links-wrapper">
                {/* todo: переписать рендеринг этих ссылок используя links.map метод */}
                {
                    links.map((link, index) => {
                        return <div key={index}  className="nav-item" >
                            <a key={link.id} href={link.url} className="may-header-links-wrapper-link nav-link">{link.name}</a>
                        </div>;
                    })
                }
            </div>

            <UserInfo user={user}/>
        </div>
    );
};
