import React,{Component} from 'react';
import HamburgerIcon from '../../assets/hamburger_icon.png';
import Logo from '../../assets/react.png';
import {CurrentUserContext} from "../../context/CurrentUserContext";
import Close from '../../assets/icon-close.webp';
import {UserInfo} from "../user-info/UserInfoFromLecture";

export class MobileHeader extends Component {
     state= {
         isPanelOpen: false
     };

    onMenuClick = () => {
        this.setState({
            isPanelOpen: true
        });
    }

    onBtnCloseClick = () => {
        this.setState({
            isPanelOpen: false
        });
    }

    render() {
        const { isPanelOpen } = this.state;
        return (
            <CurrentUserContext.Consumer>
                {
                    value => (
                        <div>
                            <div className="may-header-mobile">
                                <img alt="menu" src={HamburgerIcon} onClick={this.onMenuClick}/>
                                <img src={Logo} className="may-header-mobile-logo" />
                            </div>
                            <div className={`may-header-mobile-panel ${!isPanelOpen?'none':''}`}>
                                <div className="close-btn">
                                    <img src={Close} alt="close-button" onClick={this.onBtnCloseClick}/>
                                </div>
                                {/*<UserInfo />*/}
                                <div>
                                    <img src={value.avatar} />
                                    <div>
                                        <span>{value.firstName} </span>
                                        <span>{value.lastName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </CurrentUserContext.Consumer>

        );
    }
}




// dtodo переделать на классовый компонент
//  сделать так чтоб по нажатию на кнопочку меню слева на странице выезжала панелька
//   на панельке нужно отобразить пользователя который залогинен в данный момент
//  т.е. user из CurrentUserContext
// export function MobileHeader(props) {
//   return (
//     <div className={`may-header-mobile`}>
//       <img alt="menu" src={HamburgerIcon} />
//       <img src={Logo} className="may-header-mobile-logo" />
//     </div>
//   );
// }

