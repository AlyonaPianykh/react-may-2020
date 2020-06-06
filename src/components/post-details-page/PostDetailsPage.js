import React, { Component } from 'react';
import {accessToken} from "../../constants";
import PostCard from "../post-card/PostCard";

 export class PostDetailsPage extends Component {

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
      const { match: {params: id } } = this.props;

      if (accessToken) {
          console.log (id.id);
          this.setState({
              isLoading: true
          });
          let response = await fetch(`https://gorest.co.in/public-api/posts/${id.id}?access-token=${accessToken}`)
          if (response.ok) {
              let json = await response.json ();
              const { result } = json;
              if (typeof (result) === 'object') {
                  this.setState ({
                      post: result || undefined,
                      isLoading: false
                  })
              }
          }
      }
  };

  render() {
     const {post, isLoading} =this.state;

    return (
      <div>
        <div>Post Details Page</div>
          {!isLoading && post ? <PostCard post={post}/> : <h2>LOADING</h2>}
      </div>
    );
  }
}

export default PostDetailsPage;