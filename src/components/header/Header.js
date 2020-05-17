import React from 'react';
import Logo from '../../assets/react.png';
import { UserInfo } from '../userInfo/UserInfo';
import { links } from '../../constants';

import './Header.scss';

export const Header = (props) => {
  return (
    <header className="may-header navbar">
      <img className="may-header-logo" alt="app logo" src={Logo} />

      <div className="may-header-links-wrapper">
        <div className="nav-item">
          <a href={links[0].url}  className="may-header-links-wrapper-link nav-link">{links[0].name}</a>
        </div>
        <div className="nav-item">
          <a href={links[1].url}  className="may-header-links-wrapper-link nav-link">{links[1].name}</a>
        </div>
        <div className="nav-item">
          <a href={links[2].url} className="may-header-links-wrapper-link nav-link">{links[2].name}</a>
        </div>
      </div>

      <UserInfo />

    </header>
  );
};