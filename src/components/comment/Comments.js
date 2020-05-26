import React from "react";
import "./Comments.scss"

export function Comment(props) {
    const { comment } = props;
    if (!comment) return null;
    const {name, email, body} = comment;
    return (
        <div className="blockquote"> Comments:
        <div className="mb-0">{body}</div>
            <a className="blockquote-footer">{name} {email}</a>
        </div>
    )}