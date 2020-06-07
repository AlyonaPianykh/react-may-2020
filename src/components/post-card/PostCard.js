import React, { Component, PureComponent } from 'react';
// todo 3: сделать импорт Link из react-router-dom
import { accessToken } from '../../constants';
import { Comment } from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

class PostCard extends PureComponent {
  state = {
    comments: [],
    isCommentsLoading: false,
    commentsLoaded: false,
    showComments: false,
    error: ''
  };

  componentDidMount() {
    const { post, withCommentsLoading } = this.props;

    // console.log('PostCard componentDidMount');
    if (post && withCommentsLoading) { // добавлена проверка withCommentsLoading нужно ли делать загрузку комментариев (чтоб в списке всех постов не загружать их)
      const { id } = post;
      id && this.loadComments(id);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log('PostCard componentDidUpdate', prevProps.post, this.props.post);
    // добавлена проверка withCommentsLoading нужно ли делать загрузку комментариев (чтоб в списке всех постов не загружать их)
    if (prevProps.post.id !== this.props.post.id && this.props.withCommentsLoading) {
      this.loadComments(this.props.post.id);
    }
  }

  loadComments = async (postId) => {
    this.setState({
      isCommentsLoading: true,
      showComments: true
    });

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
          comments: result || [] // изменена проверка, если results существовать не будет - закидываем пустой массив
        });
      }
    } else {
      this.setState({
        isCommentsLoading: false,
        commentsLoaded: false,
        error: response.status,
        commentsSectionExpanded: false
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
    //todo 3 : достать ниже url из  props.match по аналогии с UserCard строка 7
    const { post, hasImage, author = '', className = '' } = this.props;

    if (!post) {
      console.log('post is not defined');
      return null;
    }

    const { title, body } = post;
    const { comments, showComments, error, isCommentsLoading, commentsLoaded } = this.state;

    const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

    return (
      <div className={`may-post-card card ${className}`}>
        <div className="may-post-card-img" id="my-block">
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

        {
          <label onClick={this.onToggleComments} className="btn btn-link">{showComments ? 'Hide comments' : 'Show comments'}</label>
        }
        { !!error &&  <div>{error}</div> }

        {/* todo 3 : добавить ссылку Link на урлу с айди поста, где будут детали поста
                    по аналогии с 24 строкой в UserCard
                    рендерить линку только если id из пропсов-объекта match-объекта params не найдено (не существует)
        */}

        { showComments && !!comments.length && <label>Comments:</label> }
        { showComments && isCommentsLoading && <div>Loading...</div> }
        {
          showComments && !isCommentsLoading && commentsLoaded && !comments.length &&
          <div>No comments found.</div>
        }
        {
          showComments
          && !isCommentsLoading
          && commentsLoaded
          && !!comments.length
          && comments.map(comment => (<Comment comment={comment} key={comment.id} />))
        }
      </div>
    );
  }
}

// todo 3: подвязать PostCard с помощью withRouter к роутеру по аналогии с UserCard
export default PostCard;
