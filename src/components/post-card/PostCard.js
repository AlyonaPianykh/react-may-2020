import React, {Component} from 'react';

import { Comment } from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// todo: переписать эту компоненту, чтоб она стала классовой
//  в ней должно появиться свойство state
//  в котором будет флажок showComments
//  и будет кнопка, лейба которой будет либо "show comments" либо "hide comments"

export class PostCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showComments: false,
    }
  };

  // Просто пример как можно рендерить картинки с условием
  /*const renderImage = () => {
    return hasImage ? (
      <img src={kittyUrl} />
    ) : (
      <img src={DefaultImg} />
    );
  };*/

  render() {
    const btnLabel = "show comments";
    const { post, hasImage, comments = [], author } = this.props;
    const { title, body } = post;
    const {showComments} = this.state;

    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;
    return (
      <div className="may-post-card card">
        {hasImage && (
          <div className="may-post-card-img" id="my-block" onClick={() => {alert('ghvcdhfvbdfsjvbdf');}}>
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
            <div>{post.id}</div>
            {body}
          </div>
          <blockquote className="blockquote">
            <footer className="blockquote-footer">Author:
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>

        {!!comments.length && <button onClick={() => this.setState({showComments: !this.state.showComments})}>
          {showComments ? 'Hide comments'  : 'Show comments'}
        </button>}
        {
          showComments && <label>Comments:</label>
        }
        {showComments && comments.map(comment => (<Comment comment={comment} key={comment.id}/>))}
      </div>
    );
  }
}

