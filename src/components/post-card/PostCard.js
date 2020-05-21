import React from 'react';

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';
import {Comments} from "../comments/Comments";

export function PostCard(props) {
    // todo: достать пропсу comments из props ниже в 9й строке
    const {post, hasImage, author, comments} = props;
    const {title, body} = post;
    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

    // if (!comments) return null;
    // const { name, email, body } = comments;
    // const renderImage = () => {
    //   return hasImage ? (
    //     <img src={kittyUrl} />
    //   ) : (
    //     <img src={DefaultImg} />
    //   );
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
                <div className="may-post-card-img" id="my-block" onClick={() => {
                    alert('ghvcdhfvbdfsjvbdf')
                }}>
                    <img src={kittyUrl} alt="cat"/>
                </div>
            )
            }
            {!hasImage && (
                <div className="may-post-card-img">
                    <img src={DefaultImg} alt="car"/>
                </div>
            )}

            <div className="card-body">
                <h4 className="card-title title">{title}</h4>
                <div className="card-text body">
                    {body}
                    <footer className="blockquote-footer">{author}
                    </footer>
                </div>
            </div>

            {/*  todo: здесь нужно показать массив коментариев к посту (comments), который прилетит в props
          можно создать отдельную компоненту Comment по аналогии с тем, как мы делали PostCard, UserCard
          как она будет выглядеть зависит от вашей фантазии
          Для каждого комментария должны быть выведены такие поля:
          name - имя автора комментария
          email - почта автора комментария
          body - текст комментария
    */}
            {comments.map(comments => {
                return (
                    <Comments comment={comments} key={comments.id}/>
                );
            })}
        </div>
    );
}

export default PostCard;
