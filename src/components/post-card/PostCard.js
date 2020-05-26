import React, {Component} from 'react';

import {Comment} from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// donetodo: переписать эту компоненту, чтоб она стала классовой
//  в ней должно появиться свойство state
//  в котором будет флажок showComments
//  и будет кнопка, лейба которой будет либо "show comments" либо "hide comments"
export class PostCard extends Component {
    state = {
        showComments: false
    }

    showOrHide = () => {
        this.setState({showComments: !this.state.showComments})
    }

    render() {
        const {post, hasImage, comments = [], author} = this.props
        const {title, body} = post
        const {showComments} = this.state
        const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`
        return (
            <div className="may-post-card card">
                {hasImage && (
                    <div className="may-post-card-img" id="my-block" onClick={() => {
                        alert('ghvcdhfvbdfsjvbdf');
                    }}>
                        <img src={kittyUrl} alt={`lol`}/>
                    </div>
                )
                }
                {!hasImage && (
                    <div className="may-post-card-img">
                        <img src={DefaultImg} alt={`lol`}/>
                    </div>
                )}

                <div className="card-body">
                    <h4 className="card-title title">{title}</h4>
                    <div className="card-text body">
                        {body}
                    </div>
                    <blockquote className="blockquote">
                        <footer className="blockquote-footer">Author:
                            <cite title="Source Title">{author}</cite>
                        </footer>
                    </blockquote>
                {!!comments.length && <label onClick={this.showOrHide}>Show/Hide</label>}
                </div>

                {showComments && (comments.map(comment => (<Comment comment={comment} key={comment.id}/>)))
                }
            </div>
        )
    }
}





