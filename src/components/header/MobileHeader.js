import React, { Component } from "react";

import HamburgerIcon from "../../assets/hamburger_icon.png";
import Logo from "../../assets/react.png";
import CloseIcon from "../../assets/icon-close.webp";
import { UserInfo } from "../user-info/UserInfoFromLecture";

//  переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
export class MobileHeader extends Component {
  state = {
    isMenuOpen: false,
  };
  menuToggle = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };
  render() {
    const { isMenuOpen } = this.state;
    return (
      <div className={`may-header-mobile`}>
        <img alt="menu" src={HamburgerIcon} onClick={this.menuToggle} />
        <img src={Logo} className="may-header-mobile-logo" alt="logo" />

        <div className={`may-header-mobile-panel ${!isMenuOpen ? "none" : ""}`}>
          <div className="close-btn" onClick={this.menuToggle}>
            <img src={CloseIcon} alt="close menu" />
          </div>
          <UserInfo />
        </div>
      </div>
    );
  }
}

export default MobileHeader;
