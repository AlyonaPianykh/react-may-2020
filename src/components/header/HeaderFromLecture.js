import React from 'react';
import {links, user} from '../../constants';
import Logo from '../../assets/react.png';

import {UserInfo} from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
    console.log(links);
    return (
        <div className="may-header navbar">
            <img src={Logo} className="may-header-logo"/>

            <div className="may-header-links-wrapper">
                {/* dtodo: переписать рендеринг этих ссылок используя links.map метод */}
                {links.map((val, i) => <div className={`nav-item`} key={i}>
                    <a href={val.url} className={`may-header-links-wrapper-link nav-link`}>{val.name}</a>
                </div>)}

            </div>

            <UserInfo user={user}/>
        </div>
    );
};
