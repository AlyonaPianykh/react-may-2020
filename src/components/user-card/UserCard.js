import React from 'react';

import {usersList} from "../app/App";

import './UserCard.scss';


// todo здесь нужно сделать экспорт функии под названием UserCard с аргументом props
//  нужно деструктуризировать объект props и достать из него переменную user
//  детальнее про деструктуризацию тут: https://learn.javascript.ru/destructuring#destrukturizatsiya-obekta
//  сделать проверку если !user (т.е. он или undefined или null или путая строка или 0), то вернуть null
//  иначе:
//  с помощью деструктуризации достанем из  объекта user такие поля как first_name, last_name, email, address, _links
//  вернем блок div c классом "may-user-card card",  он должен содержать в себе:
//  1) блок img c src равным avatar.href и классом "may-user-card-avatar rounded-circle"
//  2) div с классом card-body
//  этот div будет содержать:
//  - блок h4 с классом card-title, он должен вывести имя и фамилию (first_name, last_name)
//  - блок div c классом "card-text", содержащий 2 div блока для поля email и поля address
export const UserCard = (props) => {
    const {usersList} = props;
    if (!usersList) return null;

    return (
        <div className="may-user-card card">
            <img className="may-user-card-avatar rounded-circle" src={usersList._links.avatar.href} alt=""/>
            <div className="card-body">
                <h4 className="card-title">{usersList.first_name} {usersList.last_name}</h4>
                <div className="card-text">
                    <div>{usersList.email}</div>
                    <div>{usersList.address}</div>
                </div>
            </div>
        </div>
    )
}