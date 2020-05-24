import React from 'react';

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';
import {App} from "../app/App";
import {Comment} from "../comments/comment";
import {allComments} from "../../constants";
export function PostCard(props) {

  const { post, hasImage, comment, author } = props;

  console.log('comment', comment);
  const { title, body } = post;

  const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

  const renderImage = () => {
    return hasImage ? (
      <img src={kittyUrl} />
    ) : (
      <img src={DefaultImg} />
    );
  };

  return (
    <div className="may-post-card card">

      {hasImage && (
        <div className="may-post-card-img" id="my-block" onClick={() => {alert('hi')}}>
          <img src={kittyUrl} />
        </div>
      )
      }
      {!hasImage && (
        <div className="may-post-card-img">
          <img src={DefaultImg} />
        </div>
      )}

      <div className="card-body">
        <h4 className="card-title title">{title}</h4>
        <div className="card-text body">
          {body}
        </div>
        <footer className="blockquote-footer">
          {author}
        </footer>
      </div>
      <div className="post-comment">
        { comment.map((value, index) => {
        return(<Comment key={index} comment={value}/>)})}
      </div>
    </div>
  );
}

export default PostCard;
