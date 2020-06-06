import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import PostCard from '../post-card/PostCard';

export class PostsList extends Component {
  state = {
    posts: [],
    isLoading: false
  };

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts = async () => {
    if (accessToken) {
      this.setState({
        isLoading: true
      });
      let response = await fetch(`https://gorest.co.in/public-api/posts?_format=json&access-token=${accessToken}`);

      if (response.ok) {
        let json = await response.json();
        const { result } = json;
        this.setState({
          posts: result
        })
      }
      this.setState({
        isLoading: false
      })
    }

  };

  render() {
    const { posts, isLoading } = this.state;

    return (
        <div className='d-flex justify-content-center flex-wrap'>

          { !isLoading ?
              posts.map((item) => {
                const user = usersList.find(user => user.id === item.user_id);
                const author = user ? `${user.first_name} ${user.last_name}` : '';

                return <PostCard
                    post={item}
                    key={item.id}
                    author={author}
                />;
              }) : <h2>LOADING.....</h2>
          }
        </div>
    );
  }
}

export default PostsList;

