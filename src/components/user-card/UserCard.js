import React from 'react';

//todo здесь нужно сделать импорт стилей из './UserCard.scss'
import './UserCard.scss';
// import divWithClassName from "react-bootstrap/cjs/divWithClassName";


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
    const {user} = props;
    if(!user) {
        return null;
    } else {
        const {first_name, last_name, email, address, _links} = user;
        return (
            <div className="may-user-card card">
                <img src="https://lorempixel.com/250/250/people/?87340" className="may-user-card-avatar rounded-circle" alt="photo"/>
                <div className="card-body">
                    <h4 className="card-title">{first_name} {last_name}</h4>
                    <div className="card-text">
                        <div>{email}</div>
                        <div>{address}</div>
                    </div>
                </div>
            </div>
        )
    }
};