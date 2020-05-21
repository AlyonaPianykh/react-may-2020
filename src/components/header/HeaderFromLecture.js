import React from 'react';
import { links, user } from '../../constants';
import Logo from '../../assets/react.png';
import { UserInfo } from '../user-info/UserInfoFromLecture';
import './Header.scss';

const Links = () => {
    return links.map(({url,name}, index) => {
        return (
            <div key={index} className={"nav-item"}>
                <a href={url} className={"may-header-links-wrapper-link nav-link"}>{name}</a>
            </div>
        )
    })
};

export const Header = (props) => {
  return (
    <div className="may-header navbar">
        <img src={Logo} className="may-header-logo"  alt={'logo'}/>

        <div className="may-header-links-wrapper">
            {/* todo: переписать рендеринг этих ссылок используя links.map метод */}
            <Links/>
        </div>

        <UserInfo user={user} />
    </div>
  )
};
