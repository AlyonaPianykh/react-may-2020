import React from 'react';

import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';
import {Comments} from './../Comments/Comments'
import divWithClassName from "react-bootstrap/cjs/divWithClassName";

export function PostCard(props) {
    console.log(props);
    // todo: достать пропсу comments из props ниже в 9й строке
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

            {comments.length > 0 &&
            comments.map((item) => {
                return <Comments comment={item}/>
            })
            }

            <div className="blockquote-footer">Author:
                <cite title="Source Title">{author}</cite>
            </div>


        </div>


    );
}

export default PostCard;
