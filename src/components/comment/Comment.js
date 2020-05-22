import React from "react";
import "./Comment.scss"

export function Comment({comment}) {
    if (!comment) return null;
    const {name, email, body} = comment;
    return (
        <div className="may-comment">
            {name}
            {email}
            {body}
        </div>
    );
}