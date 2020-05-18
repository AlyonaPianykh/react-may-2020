import React from 'react';

//todo здесь нужно сделать импорт стилей из './UserCard.scss'
import './UserCard.scss'

// todo здесь нужно сделать экспорт функии под названием UserCard с аргументом props
export const UserCard = (props)=>{
    //  нужно деструктуризировать объект props и достать из него переменную user
    const {user} = props
    //  сделать проверку если !user (т.е. он или undefined или null или путая строка или 0), то вернуть null
    if(!user){ return null}
    //  иначе:
    //  с помощью деструктуризации достанем из  объекта user такие поля как first_name, last_name, email, address, _links
    const {first_name, last_name, email, address, _links} = user;
    //  вернем блок div c классом "may-user-card card",  он должен содержать в себе:
    return (<div className="may-user-card card">
        {/*//  1) блок img c src равным avatar.href и классом "may-user-card-avatar rounded-circle"*/}
        <img src={_links.avatar.href} className='may-user-card-avatar rounded-circle'/>
        {/*//  2) div с классом card-body*/}
        <div className='card-body'>
            {/*//  этот div будет содержать:*/}
            {/*//  - блок h4 с классом card-title, он должен вывести имя и фамилию (first_name, last_name)*/}
            <h4 className='card-title'>{first_name} {last_name}</h4>
            {/*//  - блок div c классом "card-text", содержащий 2 div блока для поля email и поля address*/}
            <div className='card-text'>
                <div>{email}</div>
                <div>{address}</div>
            </div>
        </div>

    </div>)
}
//  детальнее про деструктуризацию тут: https://learn.javascript.ru/destructuring#destrukturizatsiya-obekta







