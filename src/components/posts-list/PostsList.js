import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import PostCard from '../post-card/PostCard';

class PostsList extends Component {
  state = {
    posts: [],
    // donetodo 2: добавить isLoading индикатор
    isLoading: false
  };

  componentDidMount() {
    // donetodo 2: вызвать загрузку постов
    this.loadPosts();
  }

  loadPosts = async () => {
    // donetodo 2:
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в posts
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    this.setState({
      isLoading: true,
    });

    let response = await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`);

    if (response.ok) {
      let json = await response.json();

      const { result } = json;

      if (Array.isArray(result)) { // во время выполнения запроса м.б. вариант когда result не массив
        this.setState({
          isLoading: false,
          error: '',
          posts: result || [] // изменена проверка, если results существовать не будет - закидываем пустой массив
        });
      }
    } else {
      this.setState({
        isLoading: false,
        error: response.status,
        commentsSectionExpanded: false
      });
    }
  };

  render() {
    // donetodo 2: достать также лоадинг индикатор из стейта
    const { posts, isLoading } = this.state;

    return (
      <div>
        <div>Posts page</div>

        {/* donetodo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                    если загрузка не идет то показываем список постов
        */}
        {
            isLoading && <div>LOADING...</div>
        }
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

export default PostsList;