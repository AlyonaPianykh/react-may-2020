import React from 'react';

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';
import {Comment} from "../comment/Comment";
import {allComments} from "../../constants";

export function PostCard(props) {
  console.log(props);
  // todo: достать пропсу comments из props ниже в 9й строке
  const { post, hasImage, comments, author } = props;
  console.log(comments);
  console.log('hasImage', hasImage);
  const { title, body } = post;
  const {first_name, last_name}=author;

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
      </div>

      <blockquote
          className = "blockquote" >
        < p
            className = "mb-0" > Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <footer className="blockquote-footer">{first_name}
          <cite title="Source Title">{last_name}</cite>
        </footer>
      </blockquote>
    {/*  todo: здесь нужно показать массив коментариев к посту (comments), который прилетит в props
          можно создать отдельную компоненту Comment по аналогии с тем, как мы делали PostCard, UserCard
          как она будет выглядеть зависит от вашей фантазии
          Для каждого комментария должны быть выведены такие поля:
          name - имя автора комментария
          email - почта автора комментария
          body - текст комментария
    */}
      {
        comments.map((value) => {
          return (
              <Comment key={value.id} comments={value}/>
          )
        })


      }



    </div>
  );
}

export default PostCard;
