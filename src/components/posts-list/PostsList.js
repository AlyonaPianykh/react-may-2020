import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import {PostCard} from '../post-card/PostCard';

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
    this.setState({
      isLoading: true
    });
    //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
    await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`)
        .then(response => {if (response.ok) return response.json()})
        .then(json => {
          if(Array.isArray(json.result)) this.setState({
            posts: json.result
    })
        }
    );
    //  похожий запрос выполнaялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в posts
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
   await this.setState({
      isLoading: false
    });
    await console.log(this.state.posts);
  };

  render() {
    // todo 2: достать также лоадинг индикатор из стейта
    const { posts, isLoading } = this.state;

    return (
      <div>
        <div>Posts page</div>

        {/* todo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                    если загрузка не идет то показываем список постов
        */}
        {isLoading && <div>Loading...</div>}
        {!isLoading && <div className='d-flex flex-wrap'>
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
        </div>}

      </div>
    );
  }
}

export default PostsList;