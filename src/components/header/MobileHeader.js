import React from 'react';
import {UserInfo} from "../user-info/UserInfoFromLecture";

import HamburgerIcon from '../../assets/hamburger_icon.png';
import Logo from '../../assets/react.png';
import CloseIcon from '../../assets/icon-close.webp';

import './Header.scss'

// d_todo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext

export class MobileHeader extends React.Component {
    state = {
        isPanelOpen: false,
        isBtnOpenPanel: true
    }

    togglePanel = () => {
        this.setState({
            isPanelOpen: true,
            isBtnOpenPanel: !this.state.isBtnOpenPanel
        })
    };

    render() {
        const {isPanelOpen, isBtnOpenPanel} = this.state;
        return (
            <div className={`may-header-mobile`}>
                <img alt="menu" src={HamburgerIcon} onClick={this.togglePanel}/>
                {
                    isPanelOpen && (
                        <div className={`may-header-mobile-panel ${isBtnOpenPanel && 'none'}`}>
                            <div className="close-btn">
                                <img src={CloseIcon} alt="close icon" onClick={this.togglePanel}/>
                            </div>
                            <UserInfo/>
                        </div>
                    )
                }
                <img alt="logo" src={Logo} className="may-header-mobile-logo"/>
            </div>
        );
    }
}