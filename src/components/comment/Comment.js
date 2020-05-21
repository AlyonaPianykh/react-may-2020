import React from 'react';

import './Comment.scss'

export function Comment(props) {
    const { comment } = props;

    if (!comment) return null;

    const { body, name, email } = comment;

    return (
        <div className="may-comment card">
            <div className="card-body">
                <h4 className="comment-title">{name}</h4>
                <div className="comment-text">
                    <div>{email}</div>
                </div>
                <div className="comment-text">
                    <div>{body}</div>
                </div>
            </div>
        </div>
    );
}
