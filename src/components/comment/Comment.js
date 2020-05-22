import React from 'react';

import './Comment.scss';

export function Comment(props) {

  const { comment } = props;

  if (!comment) return false;

  const { name, email, body } = comment;
  return (
    <div className="comment">
      <h4 className="comment_author">{name}</h4>
      <p className="comment_email">{email}</p>
      <p className="comment_body">{body}</p>
    </div>
  )
}