import React, {Component} from 'react';
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Logo from '../../assets/react.png';
import {UserContext} from "../../context/UserContext";
import Close from '../../assets/icon-close.webp';
import {UserInfo} from "../user-info/UserInfoFromLecture";


// donetodo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
export class MobileHeader extends Component {
    state = {
        isOpen: false
    }
    onClickMenu = () => {
        this.setState({isOpen: true})
    }
    onUnclickMenu = () => {
        this.setState({isOpen: false})
    }

    // onClickMenu = () => {
    //     this.setState({isOpen : !this.state.isOpen})
    // }

    render() {
        const {isOpen} = this.state
        return (
            <UserContext.Consumer>
                {
                    value => (
                        <div>
                            <div className="may-header-mobile">
                                <img alt="menu" src={HamburgerIcon} onClick={this.onClickMenu}/>
                                <img src={Logo} className="may-header-mobile-logo"/>
                            </div>
                            {isOpen &&
                            <div className={`may-header-mobile-panel ${! isOpen? 'n Action': ''}`}>
                                <div className="close-btn">
                                    <img src={Close} alt="close-button" onClick={this.onUnclickMenu}/>
                                </div>
                                <UserInfo/>
                                {/*<div>*/}
                                {/*in this case can be also like this*/}
                                {/*    <img src={value.avatar} className='user-info-avatar'/>*/}
                                {/*    <div className='user-info-details'>*/}
                                {/*        <span>{value.firstName} </span>*/}
                                {/*        <span>{value.lastName}</span>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>}
                        </div>
                    )
                }
            </UserContext.Consumer>

        );
    }
}



