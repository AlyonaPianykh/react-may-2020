import React, { Component } from 'react';
import { connect } from 'react-redux';
import { accessToken, usersList } from '../../constants';
import PostCard from '../post-card/PostCard';
import { getPosts } from '../../actions/postsAction';

class PostsList extends Component {
  componentDidMount() {
    debugger
    const { posts, isLoading } = this.props;
    if (!posts.length) {
      this.props.getPosts && this.props.getPosts();
    }
  }

  render() {
    const { posts, isLoading } = this.props;

    debugger
    return (
      <div>
        <div>Posts page</div>
        {
          isLoading && <div>Loading</div>
        }
        {
          !isLoading && posts.map((item) => {
            const user = usersList.find(user => user.id === item.user_id);
            const author = user ? `${user.first_name} ${user.last_name}` : '';

            return <PostCard
              post={item}
              key={item.id}
              author={author}
            />;
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { postsReducer } = store;
  return {
    posts: postsReducer.posts,
    isLoading: postsReducer.isPostsLoading
  };
};
const mapDispatchToProps = ({
  getPosts
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);