import React, {Component} from 'react';
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Logo from '../../assets/react.png';
import Close from '../../assets/icon-close.webp'
import './Header.scss'
import {UserInfo} from "../user-info/UserInfoFromLecture";


// todo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext

export class MobileHeader extends Component{
    state = {
        isOpen: false,
        isClosed: true
    };
    toggle = ()=>{
        this.setState({
            isOpen: true,
            isClosed: !this.state.isClosed
    })
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
    }

    render() {
        const {isOpen, isClosed} = this.state;
        return (
            <div className={`may-header-mobile`}>
                <img alt="menu" src={HamburgerIcon} onClick={this.toggle} />
                {isOpen &&
                <div className={`may-header-mobile-panel${isClosed? ' none':''}`}>
                    <div className='close-btn' onClick={this.toggle}> <img src={Close} alt="close" /></div>,
                    <UserInfo/>
                </div>
                }
                <img src={Logo} className="may-header-mobile-logo" />
            </div>
        );
    }

}

