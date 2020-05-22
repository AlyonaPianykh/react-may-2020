import React from "react";
import "./Comment.scss"

export function Comment({comment}) {

    if (!comment) return null;
    const {name, email, body} = comment;

    return (
        <div className="may-comment">
            <div className="comment-title">{name}</div>
            <div>{email}</div>
            <div className="comment-body">{body}</div>
        </div>
    );
}