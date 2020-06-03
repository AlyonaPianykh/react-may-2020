import React from 'react';

import './Comment.scss'

export function Comment(props) {
  const { user } = props;

  if (!user) return null;

  return (
    <footer className="may-user-card card">

      <div className="card-body">
        <h4 className="card-title">{}</h4>
        <div className="card-text">
          <div>{email}</div>
          <div>{body}</div>
        </div>
      </div>
    </footer>
  );
}

