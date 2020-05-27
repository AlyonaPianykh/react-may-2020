import React from 'react';

import { Comment } from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// donetodo: переписать эту компоненту, чтоб она стала классовой
//  в ней должно появиться свойство state
//  в котором будет флажок showComments
//  и будет кнопка, лейба которой будет либо "show comments" либо "hide comments"

export class PostCard extends React.Component {
  constructor (props) {
    super(props);
    const {post, hasImage, comments = [], author} = this.props;
    this.post = post;
    this.hasImage = hasImage;
    this.comments = comments;
    this.author = author;

    const {title, body} = this.post;
    this.title = title;
    this.body = body;
    this.kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

    this.state = {showComments: true};
  }

  onToggleCommentsClick = () => {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  // renderImage = () => {
  //   return hasImage ? (
  //       <img src={kittyUrl} />
  //   ) : (
  //       <img src={DefaultImg} />
  //   );
  // };

  render() {
    return (
        <div className="may-post-card card">
          {this.hasImage && (
              <div className="may-post-card-img" id="my-block" onClick={() => {
                alert('ghvcdhfvbdfsjvbdf');
              }}>
                <img src={this.kittyUrl} />
              </div>
          )
          }
          {!this.hasImage && (
              <div className="may-post-card-img">
                <img src={DefaultImg} />
              </div>
          )}

          <div>
            <h4 className="card-title title">{this.title}</h4>
            <div className="card-text body">
              {this.body}
            </div>
            <blockquote className="blockquote">
              <footer className="blockquote-footer">Author:
                <cite title="Source Title">{this.author}</cite>
              </footer>
            </blockquote>
          </div>

          {!!this.comments.length && (
                <button
                    type="button"
                    className="button btn btn-primary btn-sm"
                    onClick={this.onToggleCommentsClick}>{this.state.showComments? 'Hide': 'Show'} {'comments'}</button>
          )}

          {!!this.comments.length && this.state.showComments && <label>Comments:</label>}

          {
            this.comments.map(comment => (
                this.state.showComments && (
                    <Comment comment={comment} key={comment.id}/>
                )))
          }
        </div>
    );
  }
}

export default PostCard;

