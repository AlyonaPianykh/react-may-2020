import React from 'react'

export function Comment( props ) {
    const {name, email, body} = props;
    return (
        <div>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <p>{body}</p>
        </div>
    )
}
