import React, { Component } from 'react';
import PostCard from '../post-card/PostCard';
import { accessToken } from '../../constants';

class PostDetailsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: null,
      isLoading: false
    };
  }

  componentDidMount() {
    this.loadPost();
  }

  loadPost = async () => {

    const { match: { params: { id } } } = this.props;
    this.setState({
      isLoading: true,
    });

    let response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);

    if (response.ok) {
      let json = await response.json();

      const { result } = json;

      if (typeof (result) === 'object') { // во время выполнения запроса м.б. вариант когда result не массив
        this.setState({
          isLoading: false,
          error: '',
          post: result || undefined // изменена проверка, если results существовать не будет - закидываем пустой массив
        });
      }
    } else {
      this.setState({
        isLoading: false,
        error: response.status,
      });
    }
  };

  render() {
    const { post, isLoading } = this.state;
    return (
      <div>
        <div>Post Details Page</div>
        {
          isLoading && (<div>Loading</div>)
        }
        {
          !isLoading && post && (
            <PostCard post={post} withCommentsLoading/>
          )
        }
      </div>
    );
  }
}

export default PostDetailsPage;