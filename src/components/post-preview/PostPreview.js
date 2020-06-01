import React, { Component } from 'react';

import { PostCard } from '../post-card/PostCard';
import { PostsMenuList } from './PostsMenuList';
import './PostPreview.scss';

const CN = 'may-post-preview';

export class PostPreview extends Component {
  constructor(props) {
    super(props);

    const { posts } = this.props; // PostsLists [{},{},{},...]

    this.state = {
      selectedPostId: posts.length ? posts[2].id : null // id начального поста
    };

    // console.log('PostPreview constructor')
  }

  // componentDidMount() {
  //   console.log('PostPreview componentDidMount');
  //   document.addEventListener('click', this.showMessage)
  // }
  //
  // componentWillUnmount() {
  //   console.log('PostPreview componentWillUnmount');
  //   document.removeEventListener('click', this.showMessage)
  // }
  //
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //    console.log('PostPreview componentDidUpdate', this.state.selectedPost, prevState.selectedPost)
  // }

  onPostSelect = (postId) => {
    this.setState({
      selectedPostId: postId  // изменять на id кликнутого поста
    })
  };

  render() {
    const { selectedPostId } = this.state;
    const { posts } = this.props; // PostsLists [{},{},{},...]
    const post = posts.find(post => post.id === selectedPostId); // получить текущий пост по id - {}


    // console.log('PostPreview render')
    return (
      <div className={CN}>
        <div className={`${CN}-list`}>
          <PostsMenuList posts={posts} onSelect={this.onPostSelect} />
        </div>
        <div className={`${CN}-content`}>
          <PostCard post={post} className={`${CN}-card`} withCommentsLoading hasImage />
          {/*<PostCard post={post} className={`${CN}-card`} hasImage />*/}
        </div>
      </div>
    );
  }
}