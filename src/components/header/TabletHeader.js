import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '../../constants';
import Logo from '../../assets/react.png';

import { UserInfo } from '../user-info/UserInfoFromLecture';
import { DarkThemeContext } from '../../context/DarkThemeContext';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import './Header.scss';
import IconClose from "../../assets/icon-close.webp";
import HamburgerIcon from "../../assets/hamburger_icon.png";

export class TabletHeader extends Component {
    state = {
        isOpen: false
    };
    slidePanel = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    };

    render() {
        const {isOpen} = this.state;

        return (
            <DarkThemeContext.Consumer>
                {
                (value) => {
                    const {isDarkTheme, toggleTheme} = value;
                    return (
                        <CurrentUserContext.Consumer>
                            {
                            (value) => {
                                const {firstName, lastName, avatar} = value;
                                return (
                                    <div className={`may-header`}>
                                        <div className={`may-header-mobile-panel ${isOpen ? '' : 'none'} ${isDarkTheme ? 'dark' : ''}`}>
                                            <div className='close-btn'>
                                                <img src={IconClose} onClick={this.slidePanel} alt='closeBTN'/>
                                            </div>
                                            <img src={avatar} alt='avatar'/>
                                            <span>{firstName} </span>
                                            <span>{lastName}</span>
                                            <div >
                                                {
                                                    links.map(item => {
                                                        return (
                                                            <div className="nav-item" key={item.url}>
                                                                <NavLink to={item.url} activeClassName="active"
                                                                         className={`may-header-links-wrapper-link nav-link ${isDarkTheme ? 'dark' : ''}`}>
                                                                    {item.name}
                                                                </NavLink>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>


                                        </div>
                                        <img alt="menu" src={HamburgerIcon} onClick={this.slidePanel} />
                                        <button className={`btn btn-primary ${isDarkTheme && 'dark'}`}
                                                onClick={toggleTheme}>Darkmode: {isDarkTheme ? 'on' : 'off'}</button>

                                        <img src={Logo} className="may-header-mobile-logo" alt='logo' />
                                    </div>
                                )
                            }
                            }
                        </CurrentUserContext.Consumer>
                    )
                }
                }
            </DarkThemeContext.Consumer>
        );
    }
};
