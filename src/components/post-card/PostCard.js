import React, { Component, PureComponent } from 'react';

import { accessToken } from '../../constants';
import { Comment } from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';
import Spin from "../spin/spin";


export class PostCard extends PureComponent {
  constructor(props) {
    super(props);
    console.log('PostCard constructor ');
  }

  state = {
    comments: [],
    isCommentsLoading: false,
    commentsLoaded: false,
    showComments: false,
    error: ''
  };

  componentDidMount() {
    const { post, withCommentsLoading } = this.props;

    console.log('PostCard componentDidMount');
    if (post && withCommentsLoading) { // добавлена проверка withCommentsLoading нужно ли делать загрузку комментариев (чтоб в списке всех постов не загружать их)
      const { id } = post;
      id && this.loadComments(id);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('PostCard componentDidUpdate', prevProps.post, this.props.post);
    // добавлена проверка withCommentsLoading нужно ли делать загрузку комментариев (чтоб в списке всех постов не загружать их)
    if (prevProps.post.id !== this.props.post.id && this.props.withCommentsLoading) {
      this.loadComments(this.props.post.id);
    }
  }

  loadComments = async (postId) => {

    this.setState({
      commentsLoading: true,
      showComments: true
    })

    let response = await fetch(`https://gorest.co.in/public-api/comments?access-token=${accessToken}&post_id=${postId}`);

    if (response.ok) {
      let json = await response.json();

      const { result } = json;
      debugger

      if (Array.isArray(result)) { // во время выполнения запроса м.б. вариант когда result не массив
        this.setState({
          isCommentsLoading: false,
          commentsLoaded: true,
          error: '',
          comments: result
        });
      }
    } else {
      this.setState({
        isCommentsLoading: false,
        commentsLoaded: false,
        error: response.status,
        showComments: false
      });
    }
  };

  onToggleComments = () => {
    this.setState({
      showComments: !this.state.showComments
    })
  };

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   const { post: curPost } = this.props;
  //   const { post: nextPost } = nextProps;
  //
  //   return curPost.id !== nextPost.id
  // }

  render() {
    const { post, hasImage, author = '', className = '' } = this.props;
    const { title, body } = post;
    const { comments, showComments, error, isCommentsLoading, commentsLoaded } = this.state;

    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

    console.log('PostCard render');
    return (
        <div className={`may-post-card card ${className}`}>
          <div className="may-post-card-img" id="my-block" onClick={() => {
            alert('ghvcdhfvbdfsjvbdf');
          }}>
            <img src={hasImage ? kittyUrl : DefaultImg} />
          </div>
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
          </div>

          {showComments ? (<label className="btn btn-link" onClick={this.onToggleComments}>Hide comment</label>)
              : (<label className="btn btn-link" onClick={this.onToggleComments}>Show comments</label>)}
          {!!error && (<div>{error}</div>)}
          {showComments && <label>Comments:</label>}
          {(showComments && isCommentsLoading) && (<Spin/>)}
          {(showComments && !isCommentsLoading && commentsLoaded && !comments.length) && (<div>No comments for this post yet</div>)}
          {(showComments && !isCommentsLoading && commentsLoaded && !!comments.length) &&
          comments.map(comment => (<Comment comment={comment} key={comment.id} />))}
        </div>
    );
  }
}

export default PostCard;
