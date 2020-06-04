import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import { PostCard } from '../post-card/PostCard';

export class PostsList extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }
  state = {
    posts: [],
    // dtodo 2: добавить isLoading индикатор
    isPostsLoading: false
  };

  componentDidMount() {
    // dtodo 2: вызвать загрузку постов
    this.loadPosts();
  }

  loadPosts = async () => {
    // dtodo 2:
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в posts
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    if (!accessToken) return;
    this.setState({
      isPostsLoading: true
    });
    const response = await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`);
    if (response.ok) {
      const json = await response.json();
      const {result} = json;

      if (Array.isArray(result)) {
        this.setState({
          isPostsLoading: false,
          posts: result
        });
      }
    } else {
      this.setState({
        isPostsLoading: false
      });
    }
  };

  render() {
    // dtodo 2: достать также лоадинг индикатор из стейта
    const { posts, isPostsLoading } = this.state;

    return (
      <div>
        {/* dtodo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                    если загрузка не идет то показываем список постов
        */}
        {
          isPostsLoading && <div className="text-center">Loading posts...</div>
        }
        <div className="d-flex flex-wrap">
          {
            posts.map((item) => {
              const user = usersList.find(user => user.id === item.user_id);
              const author = user ? `${user.first_name} ${user.last_name}` : '';

              return <PostCard
                post={item}
                key={item.id}
                author={author}
                // withCommentsLoading
              />;
            })
          }
        </div>
      </div>
    );
  }
}

