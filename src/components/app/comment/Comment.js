import React from 'react';

import './Comment.scss'

export function Comment(props) {
  const { user } = props;

  if (!comments) return null;
  const { name, email, body } = comments;

  return (
    <div className="may-user-card card">
        <div className="card-body">
            <h4 className="card-title">{name}</h4>
            <h4 className='card-email'>{email}</h4>
            <div className="card-text">{body}</div>
        </div>
    </div>
  );
}

