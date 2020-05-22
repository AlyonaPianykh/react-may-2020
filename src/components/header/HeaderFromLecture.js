import React from 'react';
import { links, user } from '../../constants';
import Logo from '../../assets/react.png';

import { UserInfo } from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
  console.log(links);
  return (
    <div className="may-header navbar">
      <img src={Logo} className="may-header-logo" alt='Ivy'/>

      <div className="may-header-links-wrapper">
        <div className="nav-item">
          <a href={links[0].url} className="may-header-links-wrapper-link nav-link">{links[0].name}</a>
        </div>
        <div className="nav-item">
          <a href={links[1].url} className="may-header-links-wrapper-link nav-link">{links[1].name}</a>
        </div>
        <div className="nav-item">
          <a href={links[2].url} className="may-header-links-wrapper-link nav-link">{links[2].name}</a>
        </div>
      </div>

      <UserInfo user={user} />
    </div>
  );
};
