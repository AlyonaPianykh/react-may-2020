import React from 'react';

import './UserCard.scss'

export const UserCard = ({user}) => {
    if(!user) return null;
    const {first_name, last_name, email, address, _links:{avatar:{href}}} = user;
    return (
        <div className='may-user-card card' style={{float:'left'}}>
            <img className='may-user-card-avatar rounded-circle' src={href} alt='avatar'/>
            <div className='card-body'>
                <h4 className='card-title'>{user.first_name},{user.last_name}</h4>
                <div className='card-text'>
                    <div>{user.email}</div>
                    <div>{user.address}</div>
                </div>
            </div>
        </div>
    )
}