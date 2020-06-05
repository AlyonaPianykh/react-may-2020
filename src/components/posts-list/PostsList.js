import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import PostCard from '../post-card/PostCard';
import { withRouter } from 'react-router';

class PostsList extends Component {
  state = {
    posts: [],
    // todo 2: добавить isLoading индикатор
    isLoading: false
  };

  componentDidMount() {
    // todo 2: вызвать загрузку постов
  this.loadPosts();
  }

  loadPosts = async () => {

    // todo 2:
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в posts
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false

    this.setState({isLoading: true})
    let response = await fetch(`https://gorest.co.in/public-api/comments?access-token=${accessToken}&post_id=${postId}`);

  };

  render() {
    // todo 2: достать также лоадинг индикатор из стейта
    const { posts } = this.state;

    return (
      <div>
        <div>Posts page</div>

        {/* todo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                    если загрузка не идет то показываем список постов
        */}
        {
          posts.map((item) => {
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

export const PostsListPage = withRouter(PostsList);;