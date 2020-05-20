import React from 'react';
import './UserCard.scss'
import {map} from "react-bootstrap/cjs/ElementChildren";
//todo здесь нужно сделать импорт стилей из './UserCard.scss'

function UserCard(props) {
    const {user} = props;
    const {first_name, last_name, email, address, _links} = user;
    const person = first_name + " " + last_name;
    console.log(user);

    const personalId = "user"+props.num;
    return (
        <div className='may-user-card card' id={personalId}>
            <img src="https://via.placeholder.com/250" alt={person} className='may-user-card-avatar rounded-circle'/>
            <div className="card-body">
                <h4 className='card-title'>{person}</h4>
                <div className="card-text">
                    <div className="email">{email}</div>
                    <div className="address">{address}</div>
                </div>
            </div>
        </div>
    )
}

export const UserCards = function (props) {
    console.log(props);
    const {users} = props;
    if (!users) return null;
    console.log(users);
    // const {first_name, last_name, email, address, _links} = user[0];
    // const person = first_name + " " + last_name;

    return (
        <section className='cards-section'>
            <h2>Users Cards</h2>
            <div className='cards-container'>
                {
                    users.map(function (val, num) {
                        return (<UserCard user={users[num]} num={num}/>)
                    })
                }
            </div>
        </section>

        /*<div className='may-user-card card'>
            <img src="https://via.placeholder.com/250" alt={person} className='may-user-card-avatar rounded-circle'/>
            <div className="card-body">
                <h4 className='card-title'>{person}</h4>
                <div className="card-text">
                    <div className="email">{email}</div>
                    <div className="address">{address}</div>
                </div>
            </div>
        </div>*/
    )
}

// todo здесь нужно сделать экспорт функии под названием UserCard с аргументом props
//  нужно деструктуризировать объект props и достать из него переменную user
//  детальнее про деструктуризацию тут: https://learn.javascript.ru/destructuring#destrukturizatsiya-obekta
//  сделать проверку если !user (т.е. он или undefined или null или путая строка или 0), то вернуть null
//  иначе:
//  с помощью деструктуризации достанем из  объекта user такие поля как
//  first_name, last_name, email, address, _links
//  вернем блок div c классом "may-user-card card",  он должен содержать в себе:
//  1) блок img c src равным avatar.href и классом "may-user-card-avatar rounded-circle"
//  2) div с классом card-body
//  этот div будет содержать:
//  - блок h4 с классом card-title, он должен вывести имя и фамилию (first_name, last_name)
//  - блок div c классом "card-text", содержащий 2 div блока для поля email и поля address
