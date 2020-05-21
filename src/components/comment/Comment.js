import React from "react";
import './Comment.css'

export const Comment = ({comm}) => {
    if (!comm) {return null}
    const {name,email,body} = comm;
    return (
        <div className={'container'}>
            <h5>{name}</h5>
            <h6>{email}</h6>
            <div>{body}</div>
        </div>
    )
};