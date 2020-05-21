import React from "react";

export function Comment(props) {
const {comment} = props;
if (!comment) return null;
const {name, email,body, id} = comment;
    return (
    <div className="card comments  text-white bg-dark">
        <div className="card-header">{name}</div>
        <div className='card-title'>{email}</div>
        <div className='card-text'>{body}</div>
    </div>
    )
}