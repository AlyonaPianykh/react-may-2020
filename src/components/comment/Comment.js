import React from "react";

import './Comment.scss';

export function PostsComments({comment}) {
    if (comment.length === 0) return null;
    return (
        comment.map(item => {
            return (
                <div className='post-comment'>
                    <span>Comment from: </span>
                    <div>Name: {item.name}</div>
                    <div>email: {item.email}</div>
                    <div className='post-comment-body'>
                        <p>{item.body}</p>
                    </div>
                </div>
            );
        })
    );
}