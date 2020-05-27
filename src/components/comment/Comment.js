import React from "react";
import './Comment.scss';

export function Comment(props) {
    const {comments} = props;
    const {name, email, body} = comments;
    console.log(body);
    return (
        <div className="may-user-card card">
            <div className="card-body">
                <h4 className="card-title">{body}</h4>
                <div className="card-text">
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            </div>
        </div>

    )
}