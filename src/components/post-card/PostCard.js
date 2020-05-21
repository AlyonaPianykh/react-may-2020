import React from 'react';
import './PostCard.scss';
export function PostCard(props) {
    const {post} = props;
    const {title, body} = post;

    return (
        <div className="may-post-card card">
            <div className="card-body">
                <h4 className="card-title title">{title}</h4>
                <p className="card-text body">
                    {body}
                </p>
                <a href="#!" className="btn btn-primary">Open post</a>
            </div>
        </div>
    );
}