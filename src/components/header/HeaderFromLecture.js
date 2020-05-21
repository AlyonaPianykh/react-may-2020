import React from 'react';
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
              links.map((value, index) => {
                  return(
                      <a key={index} href={value.url}>{value.name}</a>
                  )
              })
          }

      </div>

      <UserInfo user={user} />
    </div>
  );
};
