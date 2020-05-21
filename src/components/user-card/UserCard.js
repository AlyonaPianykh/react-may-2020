import React from 'react';

import './UserCard.scss'

export function UserCard(props) {
    const {user} = props;

    if (!user) return null;

    const {first_name, last_name, email, address, _links: {avatar}} = user;
    return (
        <div key={user.id} className="may-user-card card">

            <img src={user.avatar} alt="user avatar" className="may-user-card-avatar rounded-circle"/>

            <div className="card-body">
                <h4 className="card-title">{user.first_name} {user.last_name}</h4>
                <div className="card-text">
                    <div>{user.email}</div>
                    <div>{user.address}</div>
                </div>
            </div>
        </div>
    );
}
