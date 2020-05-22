import React from 'react';

import './Comment.scss'

export function Comment ({newComment}) {

    if (!newComment) return null;
    const {name, email, body} = newComment;

    return (
        <div className="may-user-card card">


            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <div className="card-text">
                    <div>{email}</div>
                    <div>{body}</div>
                </div>
            </div>
        </div>
    );
}
