import React from 'react';
import DefaultImg from '../../assets/default-empty-img.png';
import {Comment} from "../comment/Comment";
import './PostCard.scss';

export function PostCard(props) {
    // todo: достать пропсу comments из props ниже в 9й строке
    const {post, hasImage, comments, author} = props;

    const {title, body} = post;

    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

    return (
        <div className="may-post-card card">

            {hasImage && (
                <div className="may-post-card-img" id="my-block" onClick={() => {
                    alert('ghvcdhfvbdfsjvbdf')
                }}>
                    <img src={kittyUrl}/>
                </div>
            )
            }
            {!hasImage && (
                <div className="may-post-card-img">
                    <img src={DefaultImg}/>
                </div>
            )}

            <div className="card-body">
                <h4 className="card-title title">{title}</h4>
                <div className="card-text body">
                    {body}
                    <footer className="blockquote-footer">
                        {author}
                    </footer>
                    {comments && comments.map(value => {
                        return(
                            <Comment key={value.id} comment={value}/>
                        )
                    })}
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
        </div>
    );
}

