import React, {Component} from 'react';

import {Comment} from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// done_todo: переписать эту компоненту, чтоб она стала классовой
//  в ней должно появиться свойство state
//  в котором будет флажок showComments
//  и будет кнопка, лейба которой будет либо "show comments" либо "hide comments"

export class PostCard extends Component {
    state = {
        showComments: true,
    }

    onShowHideClick = () => {
        this.setState({
            showComments: !this.state.showComments
        })
    };

    render() {
        const {showComments} = this.state;
        const {post, hasImage, comments = [], author} = this.props;
        const {title, body} = post;
        const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;
        // const renderImage = () => {
        //     return hasImage ? <img src={kittyUrl} alt="cat"/> : <img src={DefaultImg} alt="DefaultImg"/>;
        // };

        return (
            <div className="may-post-card card">

                <button
                    onClick={this.onShowHideClick}
                    type="button"
                    className="btn btn-outline-secondary ">
                    hide/show comment
                </button>
                {
                    showComments && (<div>

                        {hasImage && (<div className="may-post-card-img" id="my-block"
                                           onClick={() => alert('You clicked on the image')}>
                            <img src={kittyUrl} alt="cat"/>
                        </div>)
                        }

                        {!hasImage && (<div className="may-post-card-img">
                            <img src={DefaultImg} alt="DefaultImg"/>
                        </div>)
                        }

                        <div className="card-body">
                            <h4 className="card-title title">{title}</h4>
                            <div className="card-text body">{body}</div>
                            <blockquote className="blockquote">
                                <footer className="blockquote-footer">Author:
                                    <cite title="Source Title">{author}</cite>
                                </footer>
                            </blockquote>
                        </div>

                        {!!comments.length && <label>Comments:</label>}
                        {
                            comments.map(comment => (<Comment comment={comment} key={comment.id}/>))
                        }

                    </div>)
                }

            </div>
        );
    }
}

export default PostCard;