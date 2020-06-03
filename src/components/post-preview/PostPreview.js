import React, { Component } from 'react';

import PostCard from '../post-card/PostCard';
import { PostsMenuList } from './PostsMenuList';
import './PostPreview.scss';

const CN = 'may-post-preview';

export class PostPreview extends Component {
  constructor(props) {
    super(props);

    const { posts } = props;
    this.state = {
      selectedPost: posts ? posts[2].id : null
    };

    console.log('PostPreview constructor')
  }

  componentDidMount() {
    console.log('PostPreview componentDidMount');
    // document.addEventListener('click', this.showMessage)
  }

  componentWillUnmount() {
    console.log('PostPreview componentWillUnmount');
    // document.removeEventListener('click', this.showMessage)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
     console.log('PostPreview componentDidUpdate', this.state.selectedPost, prevState.selectedPost)
  }

  showMessage = () => {
    alert('hello')
  };

  onPostSelect = (postId) => {
    this.setState({
      selectedPost: postId
    })
  };

  render() {
    const { selectedPost } = this.state;
    const { posts } = this.props;

    const post = posts.find(item => item.id === selectedPost);
    console.log('PostPreview render');
    return (
      <div className={CN}>
        <div className={`${CN}-list`}>
          <PostsMenuList posts={posts} onSelect={this.onPostSelect}/>
        </div>
        <div className={`${CN}-content`}>
          <PostCard post={post} className={`${CN}-card`} withCommentsLoading />
        </div>
      </div>
    );
  }
}