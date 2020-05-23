import React from 'react';

import './Comment.scss'

export function Comment(props) {
    const { comment } = props;
    const {name, email, body} = comment;

    if (!comment) return null;

    return (
        <div className="comment-card card">
            <div className="card-body comment-bg" >
                <h5 className="comment-name">{name}</h5>
                <div>{email}</div>
                <div className="comment-text">
                    <div>{body}</div>
                </div>
            </div>
        </div>
    );
}
