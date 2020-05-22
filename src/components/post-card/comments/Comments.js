import React from "react";
import './commentsStyle.css'

export const Comment = (props) => {
    const { comm } = props
    if (!comm) return null
    const {name, email, body} = comm
    return (
        <div className='comment'>
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
            <hr/>
        </div>
    )
}