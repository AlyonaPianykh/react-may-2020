import React, {useDebugValue} from 'react';

import Comment from "../app/Comment/Comment";

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

export function PostCard(props) {
    const {post, hasImage, author, comments} = props;

    const {title, body} = post;

    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

    const renderImage = () => {
        return hasImage ? (
            <img src={kittyUrl}/>
        ) : (
            <img src={DefaultImg}/>
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
                </div>
            </div>

            <blockquote className="blockquote">
                {/*<p className="mb-0">{author}</p>*/}
                <footer className="blockquote-footer">{author}
                    {/*<cite title="Source Title">Source Title</cite>*/}
                </footer>
            </blockquote>

            {
                comments.map(value => {
                    return <Comment comments={value} key={value.id} />
                })
            }

        </div>
    );
}

export default PostCard;
