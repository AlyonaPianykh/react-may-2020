import React from "react";

import './Comment.scss'

const Comment = (props) => {
    const {comments} = props;

    return <div className="card">
        <div className="card-body may-comment">
            <p className="card-text">{comments.body}</p>
        </div>
        <div className="card-footer">
            {comments.name}
            <div className='email'>
                {comments.email}
            </div>
        </div>
    </div>

}

export default Comment;