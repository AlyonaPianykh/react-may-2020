import React, {Component} from 'react';
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Close from '../../assets/close_icon.png';
import Logo from '../../assets/react.png';
import './Header.scss';
import {CurrentUserContext} from '../../context/CurrentUserContext';

// dtodo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
export class MobileHeader extends Component {
    static contextType = CurrentUserContext;
    state = {
        menuStatus: false,
    };
    clickMenu = () => {
        console.log('click')
        this.setState({menuStatus: !this.state.menuStatus});
    }

    render() {
        const {menuStatus} = this.state;
        const currentUserContextValue = this.context;
        const {avatar, firstName, lastName} = currentUserContextValue;
        return (
            <div className={`may-header-mobile`}>
                <img alt="menu" src={HamburgerIcon} onClick={this.clickMenu}/>
                <img src={Logo} className="may-header-mobile-logo"/>
                <div className={`may-header-mobile-panel${menuStatus ? ' none' : ""}`}>
                    <div className={'close-btn'}>
                        <img className={'close'} src={Close} alt="close" onClick={this.clickMenu}/>
                    </div>
                    <div className="user-info">
                        <img src={avatar} className="user-info-avatar rounded-circle"/>
                        <div className="user-info-details">
                            <span>{firstName} </span>
                            <span>{lastName}</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


