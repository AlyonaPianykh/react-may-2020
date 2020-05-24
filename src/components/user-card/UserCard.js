import React from 'react';

//todo здесь нужно сделать импорт стилей из './UserCard.scss'
import './UserCard.scss';
import { usersList } from "../../constants";

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
const { usersList } = props;

if (!usersList) return null;

const { first_name, last_name, email, address, _links } = usersList;
console.log(_links);
    return (
        <div className="may-user-card-wrapper">

            <div className="may-user-card">
                <img src={usersList[0]._links.avatar.href} className="may-user-card-avatar rounded-circle"/>
                <div className="card-body">
                    <h4 className="card-title">{usersList[0].first_name} {usersList[0].last_name}</h4>
                    <div className="card-text">
                        <div>
                            {usersList[0].email}
                        </div>
                        <div>
                            {usersList[0].address}
                        </div>
                    </div>
                </div>
            </div>

            {/*<div className="may-user-card">*/}
            {/*    <img src={usersList[1]._links.avatar.href} className="may-user-card-avatar rounded-circle"/>*/}
            {/*    <div className="card-body">*/}
            {/*        <h4 className="card-title">{usersList[1].first_name} {usersList[1].last_name}</h4>*/}
            {/*        <div className="card-text">*/}
            {/*            <div>*/}
            {/*                {usersList[1].email}*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                {usersList[1].address}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="may-user-card">*/}
            {/*    <img src={usersList[2]._links.avatar.href} className="may-user-card-avatar rounded-circle"/>*/}
            {/*    <div className="card-body">*/}
            {/*        <h4 className="card-title">{usersList[2].first_name} {usersList[2].last_name}</h4>*/}
            {/*        <div className="card-text">*/}
            {/*            <div>*/}
            {/*                {usersList[2].email}*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                {usersList[2].address}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="may-user-card">*/}
            {/*    <img src={usersList[3]._links.avatar.href} className="may-user-card-avatar rounded-circle"/>*/}
            {/*    <div className="card-body">*/}
            {/*        <h4 className="card-title">{usersList[3].first_name} {usersList[3].last_name}</h4>*/}
            {/*        <div className="card-text">*/}
            {/*            <div>*/}
            {/*                {usersList[3].email}*/}
            {/*            </div>*/}
            {/*            <div>*/}
            {/*                {usersList[3].address}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}