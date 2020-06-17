import React from 'react';
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Logo from '../../assets/react.png';


// todo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
export function MobileHeader(props) {
  return (
    <div className={`may-header-mobile`}>
      <img alt="menu" src={HamburgerIcon} />
      <img src={Logo} className="may-header-mobile-logo" />
    </div>
  );
}

