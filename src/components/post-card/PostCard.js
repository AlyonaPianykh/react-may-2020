import React from 'react';

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

export function PostCard(props) {
  
  const { post, hasImage } = props;
  const { title, body } = post;
  const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

  return (
    <div className="may-post-card card">
      {hasImage && (
        <div className="may-post-card-img" id="my-block" onClick={() => {alert('ghvcdhfvbdfsjvbdf')}}>
          <img src={kittyUrl} alt="kitty" />
        </div>
      )
      }
      {!hasImage && (
        <div className="may-post-card-img">
          <img src={DefaultImg} alt="default_image"/>
        </div>
      )}
      <div className="card-body">
        <h4 className="card-title title">{title}</h4>
        <div className="card-text body">
          {body}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
