import React from 'react';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

export function PostCard(props) {

  const { post: { title, body }, hasImage } = props;
  const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

  // const renderImage = () => {
  //   return hasImage ? (
  //       <img src={kittyUrl} alt={'kitty'}/>
  //     ) : (
  //       <img src={DefaultImg} alt={'no img'}/>
  //     )
  // };

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
        <div className="may-post-card-img" id="my-block" onClick={() => {alert("its funny, isn't it?")}}>
          <img src={kittyUrl} alt={'kitty'} />
        </div>
      )}
      {!hasImage && (
        <div className="may-post-card-img">
          <img src={DefaultImg} alt={'no img'} />
        </div>
      )}

      <div className="card-body">
        <h4 className="card-title title">{title}</h4>
        <div className="card-text body">
          {body}
        </div>
      </div>
    </div>
  )
}

export default PostCard;
