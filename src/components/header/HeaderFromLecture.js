import React from 'react';
import {links, socialMediaIcons, user} from '../../constants';
import Logo from '../../assets/react.png';

import { UserInfo } from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
  console.log(links);
  return (
    <div className="may-header navbar">
      <img src={Logo} className="may-header-logo" />

      <div className="may-header-links-wrapper">
        {/* todo: переписать рендеринг этих ссылок используя links.map метод */}
        <div className="nav-item">
            {links.map(value => {
                return(
                    <a href={value.url}className="may-header-links-wrapper-link nav-link">{value.name}</a>
                )
            })}
        </div>
      </div>

      <UserInfo user={user} />
    </div>
  );
};
