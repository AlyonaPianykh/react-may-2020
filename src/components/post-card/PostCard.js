import React from 'react';

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';


export function PostCard(props) {
  console.log(props);

  const { post, hasImage, comments, author } = props;

  console.log('comments', comments);
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

      {/*<div className="may-post-card-img">*/}
      {/*  {*/}
      {/*    hasImage ? (*/}
      {/*      <img src={kittyUrl} />*/}
      {/*      ) : (*/}
      {/*        <img src={DefaultImg} />*/}
      {/*    )*/}
      {/*  }*/}
      {/*</div>*/}

      {/*<div className="may-post-card-img" >*/}
      {/*  {*/}
      {/*    renderImage()*/}
      {/*  }*/}
      {/*</div>*/}

      {hasImage && (
        <div className="may-post-card-img" id="my-block" onClick={() => {alert('ghvcdhfvbdfsjvbdf')}}>
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
        <footer className="blockquote-footer">{author}
        </footer>
      </div>
    </div>
  );
}

export default PostCard;
