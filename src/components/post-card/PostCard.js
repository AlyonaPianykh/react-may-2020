import React from 'react';

import { Comment } from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// donetodo: переписать эту компоненту, чтоб она стала классовой
//  в ней должно появиться свойство state
//  в котором будет флажок showComments
//  и будет кнопка, лейба которой будет либо "show comments" либо "hide comments"

export class PostCard extends React.Component {
  state = {showComments: true};

  onToggleCommentsClick = () => {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  render() {
    const {post, hasImage, comments = [], author} = this.props;
    const {title, body} = post;
    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;
    
    return (
        <div className="may-post-card card">
          {hasImage && (
              <div className="may-post-card-img">
                <img src={kittyUrl} />
              </div>
          )
          }
          {!hasImage && (
              <div className="may-post-card-img">
                <img src={DefaultImg} />
              </div>
          )}

          <div>
            <h4 className="card-title title">{title}</h4>
            <div className="card-text body">
              {body}
            </div>
            <blockquote className="blockquote">
              <footer className="blockquote-footer">Author:
                <cite title="Source Title">{author}</cite>
              </footer>
            </blockquote>
          </div>

          {!!comments.length && (
                <button
                    type="button"
                    className="button btn btn-primary btn-sm"
                    onClick={this.onToggleCommentsClick}>{this.state.showComments? 'Hide': 'Show'} {'comments'}</button>
          )}

          {!!comments.length && this.state.showComments && <label>Comments:</label>}

          {
            comments.map(comment => (
                this.state.showComments && (
                    <Comment comment={comment} key={comment.id}/>
                )))
          }
        </div>
    );
  }
}

export default PostCard;

