import React from 'react';
import { links, user } from '../../constants';
import Logo from '../../assets/react.png';

import { UserInfo } from '../user-info/UserInfoFromLecture';

import './Header.scss';

export const Header = (props) => {
  console.log(links);
  return (
    (
      <div className="may-header navbar">
        <img src={Logo} className="may-header-logo" alt ="efrtg" />
  
      <div>
          <div className="may-header-links-wrapper">
              <div className="nav-item">
    
  </div>
        <div className="may-header-links-wrapper">
          <div className="nav-item">
          <span className="may-header-links-wrapper-link nav-link">
            {  links.map ((item) => {
              return <a href={item.url} > {item.name} </a>
            })
       }
       </span>
          </div>
    
        </div>
        </div>
        </div>
  
        <UserInfo user={user} />
      </div>
  )
  );
};
