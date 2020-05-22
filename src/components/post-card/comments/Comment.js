import React from 'react';




export function Comment (props){

    const {comment} = props
    const {name, email, body } = comment;

    return <div> 
        <div>{name} {email}</div>
        <div> {body}</div>
    </div>
}