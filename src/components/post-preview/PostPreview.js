import React, { Component } from 'react';

import PostCard from '../post-card/PostCard';
import { PostsMenuList } from './PostsMenuList';
import './PostPreview.scss';
import { getPosts } from '../../actions/postsAction';
import { connect } from 'react-redux';

const CN = 'may-post-preview';

class PostPreviewComponent extends Component {
  constructor(props) {
    super(props);

    debugger
    const { posts } = props;
    this.state = {
      selectedPost: posts.length ? posts[2].id : null
    };

    console.log('PostPreview constructor');
  }

  componentDidMount() {
    const {posts, getPosts} = this.props;

    debugger
    if (!posts.length) {
      getPosts && getPosts();
    }
    // document.addEventListener('click', this.showMessage)
  }

  componentDidUpdate (prevProps, prevState) {
    debugger
    if ((prevProps.posts.length !== this.props.posts.length) && this.props.posts.length) {
      this.setState({
        selectedPost:  this.props.posts[1].id
      });
    }
  }


  componentWillUnmount() {
    console.log('PostPreview componentWillUnmount');
    // document.removeEventListener('click', this.showMessage)
  }

  showMessage = () => {
    alert('hello');
  };

  onPostSelect = (postId) => {
    this.setState({
      selectedPost: postId
    });
  };

  render() {
    const { selectedPost } = this.state;
    const { posts } = this.props;

    const post = posts.find(item => item.id === selectedPost);

    if (!post) return (<div>No posts yet</div>);

    return (
      <div className={CN}>
        <div className={`${CN}-list`}>
          <PostsMenuList posts={posts} onSelect={this.onPostSelect} />
        </div>
        <div className={`${CN}-content`}>
          <PostCard post={post} className={`${CN}-card`} withCommentsLoading />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { postsReducer } = store;
  return {
    posts: postsReducer.posts
  };
};
const mapDispatchToProps = ({
  getPosts
});

export const PostPreview = connect(mapStateToProps, mapDispatchToProps)(PostPreviewComponent);