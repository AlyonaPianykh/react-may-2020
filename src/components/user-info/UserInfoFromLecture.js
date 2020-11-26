import React from 'react';
import {CurrentUserContext} from "../../context/CurrentUserContext";
import './UserInfo.scss';


export const UserInfo = () => {
    // d_todo тут нужно использовать пользователя из CurrentUserContext
    //   и тогда из пропсов мы его доставать не будем
    //   попробуйте достать пользователя с помощью использования Consumer, код нужно будет поменять
    return (
        <CurrentUserContext.Consumer>
            {
                (value) => {
                    if (!value) return null;
                    const {firstName, lastName, avatar} = value;
                    return (
                        <div className="user-info">
                            <img src={avatar} className="user-info-avatar rounded-circle" alt="user avatar"/>
                            <div className="user-info-details">
                                <span>{firstName} </span>
                                <span>{lastName}</span>
                            </div>
                        </div>
                    )
                }
            }
        </CurrentUserContext.Consumer>
    );
};