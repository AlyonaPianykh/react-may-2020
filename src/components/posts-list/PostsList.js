import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import { PostCard } from '../post-card/PostCard';

class PostsList extends Component {
  state = {
    posts: [],
    // 2: добавить isLoading индикатор
    isLoading:false,
    error:''
  };

  componentDidMount() {
    // 2: вызвать загрузку постов
    this.loadPosts();
  }

  loadPosts = async () => {
    //  2:
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    this.setState({
      isLoading: true
    });

    //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в posts
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    let response = await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`);

    if (response.ok) {
      let json = await response.json();
      const { result } = json;
      if (Array.isArray(result)) {
        this.setState({
          isLoading:false,
          error:'',
          posts:result
        });
      }
    } else {
      this.setState({
        isLoading:false,
        error:response.status,
      })
    }
  };

  render() {
    //  2: достать также лоадинг индикатор из стейта
    const { posts, isLoading, error } = this.state;
    console.log(posts);
    return (
      <div className="container text-center">

        {/*  2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                    если загрузка не идет то показываем список постов
        */}
        {!!error && <div>error</div>}
        {
          isLoading && <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
        }
        { !isLoading && !error && <div className="d-flex d-flex posts-container"> {
          posts.map((item) => {
            const user = usersList.find(user => user.id === item.user_id);
            const author = user ? `${user.first_name} ${user.last_name}` : '';

            return <PostCard
                post={item}
                key={item.id}
                author={author}
            />;
          })
        }</div>
        }
      </div>
    );
  }
}

export default PostsList;