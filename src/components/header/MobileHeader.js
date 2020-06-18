import React, {Component} from 'react';
import {CurrentUserContext} from '../../context/CurrentUserContext'
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Logo from '../../assets/react.png';
import IconClose from '../../assets/icon-close.webp';


// ttodo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
class MobileHeader extends Component {

    state = {
        isOpen: false
    };
    slidePanel = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        const {avatar} = this.context;
        const {isOpen} = this.state;
        return (
            <div className={`may-header-mobile`}>
                <div className={`may-header-mobile-panel ${isOpen ? '' : 'none'}`}>
                    <div className='close-btn'>
                        <img src={IconClose} onClick={this.slidePanel} alt='closeBTN'/>
                    </div>
                    <img src={avatar} alt='avatar'/>
                </div>
                <img alt="menu" src={HamburgerIcon} onClick={this.slidePanel} />
                <img src={Logo} className="may-header-mobile-logo" alt='logo' />
            </div>
        );
    }
}

MobileHeader.contextType = CurrentUserContext;
export default MobileHeader
