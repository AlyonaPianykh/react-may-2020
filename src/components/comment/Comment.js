import React from 'react';

export const Comment = (props) => {

  console.log(1);

  const { comment } = props;
  if (!comment) return null;

  const { name, email, body } = comment;

  return (
    <div className="may-comment">
      <blockquote className="blockquote">
        <p className="mb-0">{body}</p>
        <footer className="blockquote-footer"> Author:
          <cite title="Source Title">
            <span> {name}</span>
            <br/>
            <span>{email}</span>
          </cite>
        </footer>
      </blockquote>
    </div>
  );
}
