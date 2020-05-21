import React from 'react';
import './UserCard.scss'

export function UserCard  (props) {
    const {user} = props;
    if (!user) return null;
    const {first_name, last_name, email, address, _links} = user;
    return (
        <div className='may-user-card card'>
            <img src={_links.avatar.href} className='may-user-card-avatar rounded-circle' alt={'img'}/>
            <div className='card-body'>
                <h4 className='card-title'>
                    <span>{first_name}</span>
                    <span>{last_name}</span>
                </h4>
                <div className='card-text'>
                    <div>{email}</div>
                    <div>{address}</div>
                </div>
            </div>
        </div>


    )
}
