import React from 'react';

export const Comment = ({comment}) => {
    const {name, email, body} = comment;

    return (
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <a className="card-link" href={email}>{email}</a>
            <p className="text-secondary">{body}</p>
        </div>
    );
}