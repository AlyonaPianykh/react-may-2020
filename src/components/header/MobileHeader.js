import React, {Component} from 'react';
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Close from '../../assets/close_icon.png';
import Logo from '../../assets/react.png';
import './Header.scss';
import { CurrentUserContext } from '../../context/CurrentUserContext';

// todo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
export class MobileHeader extends Component{
    static contexType = CurrentUserContext;
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
    console.log(currentUserContextValue)
    return (
        <div className={`may-header-mobile`}>
            <img alt="menu" src={HamburgerIcon} onClick={this.clickMenu} />
            <img src={Logo} className="may-header-mobile-logo" />
            <div className={`panelM${ menuStatus? ' visibl':""}`}>
            <img className={'close'} src={Close} alt="close" onClick={this.clickMenu}/>
            </div>

        </div>
    );
}
}


