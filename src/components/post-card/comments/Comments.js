import React from "react";

export const Comment = (props) => {
    const { comm} = props
    const {name, email, body} = comm
    return (
        <div className='blockquote-footer'>

            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    )
}