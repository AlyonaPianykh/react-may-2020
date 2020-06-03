import React from 'react';
import { NavLink } from 'react-router-dom';
import { links, user } from '../../constants';
import Logo from '../../assets/react.png';

import { UserInfo } from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
  console.log(links);
  return (
    <div className="may-header navbar">
      <img src={Logo} className="may-header-logo" />

      <div className="may-header-links-wrapper">
        {
          links.map(item => {
            return  (
              <div className="nav-item" key={item.url}>
                <NavLink to={item.url} activeClassName="active" className="may-header-links-wrapper-link nav-link">{item.name}</NavLink>
              </div>
            )
          })
        }
      </div>

      <UserInfo user={user} />
    </div>
  );
};
