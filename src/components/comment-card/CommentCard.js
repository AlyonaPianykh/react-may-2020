import React from "react";

import './CommentCard.scss'

export const CommentCard = ({comment}) => {
    const {name, email, body} = comment;

    return (
        <div className="comment">
            <h5 className="comment-title">{name}</h5>
            <a className="comment-link" href={email}>{email}</a>
            <div className="comment-text">{body}</div>
        </div>
    )
};