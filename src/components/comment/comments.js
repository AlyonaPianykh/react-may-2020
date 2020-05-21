import React from 'react';

export function Comment (props) {
    const {name, email, body, key} = props.comment;
    console.log([name, email, body, key]);
    return (
        <div className='comment' key={key}>
            <div className="comment-info">
                <div className="comment-info-name">{name}</div>
                <div className="comment-info-email">{email}</div>
            </div>
            <div className="comment-body">{body}</div>
        </div>
    )
}