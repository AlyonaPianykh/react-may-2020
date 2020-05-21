import React from 'react';
import { links, user } from '../../constants';
import Logo from '../../assets/react.png';

import { UserInfo } from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = () => {
  return (
    <div className="may-header navbar">
      <img src={Logo} alt="logo" className="may-header-logo" />
      <div className="may-header-links-wrapper">
        {links.map((link, index) => (
          <div className="nav-item" key={index}>
            <a href={link.url} className="may-header-links-wrapper-link nav-link">{link.name}</a>
          </div>
        ))}
      </div>
      <UserInfo user={user} />
    </div>
  );
};
