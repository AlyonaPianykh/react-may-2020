import React from 'react';
import './UserCard.scss';

export const UserCard= (props)=>{
    const { user } = props;
    if (!user) return null;

    const {first_name, last_name, email, address, _links} = user;

    return (<div className='may-user-card card'>
            <img src = {_links.avatar.href} className='may-user-card-avatar rounded-circle'/>
            <div className='card-body'>
                <h4 className='card-title'>{first_name } {last_name}</h4>
                <div className='card-text'>
                    <div>{email}</div>
                    <div>{address}</div>
                </div>
            </div>
        </div>
    );
};