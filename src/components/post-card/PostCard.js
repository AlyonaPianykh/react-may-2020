import React from 'react';
import DefaultImg from '../../assets/default-empty-img.png';
import { Comment } from '../comment/Comment'
import './PostCard.scss';

export function PostCard(props) {

  const { post, hasImage, author, comments } = props;

  const { title, body } = post;

  const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

  return (
    <div className="may-post-card card">
      {
        <div className="may-post-card-img" id="my-block">
          <img src={hasImage ? kittyUrl : DefaultImg} alt="ololo" />
        </div>
      }

      <div className="card-body">
        <h4 className="card-title title">{title}</h4>
        <p className="mb-0 card-text body">{body}</p>
        <footer className="blockquote-footer">
          <cite title="Source Title">{author}</cite>
        </footer>
      </div>

      <div className="comments">
        {
          comments.map(item => {
            return <Comment comment={item} key={item.id} />
          })
        }
      </div>
    </div>
  );
}

export default PostCard;