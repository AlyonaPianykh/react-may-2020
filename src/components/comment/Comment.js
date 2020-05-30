import React from 'react';
import './Comment.scss';


export function Comment(props) {
    const { comments } = props;
    if (!comments) return null;
    const { name, email, body } = comments;
    console.log(name, email, body);
    return (
        <div className="may-user-card card">
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <h4 className='card-email'>{email}</h4>
                <div className="card-text">{body}</div>
            </div>
        </div>
    );
}