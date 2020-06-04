import React, { Component } from 'react';
import { accessToken, usersList } from '../../constants';
import PostCard from '../post-card/PostCard';

class PostsList extends Component {
  state = {
    posts: [],
    // ttodo 2: добавить isLoading индикатор
    isLoading: false
  };

  componentDidMount() {
    // ttodo 2: вызвать загрузку постов
      this.loadPosts()
  }

  loadPosts = async () => {
    // ttodo 2:
    //  проверьте лежит ли ваш accessToken в constants/index.js
      !accessToken && console.warn('No Posts...');
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
      this.setState({isLoading:true});
    //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
      fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`)
          .then((response) => {
              return response.json()
          })
          .then((data) => {
              console.log('data',data);
              this.setState({
                  posts:data.result || [],
                  isLoading: false
              })
          })
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в posts
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
  };

  loading = () => {
      return (
          <div className="text-center">
              <span className='text-primary'>Loading...</span>
              <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
              </div>
          </div>
      )};

  render() {
    // ttodo 2: достать также лоадинг индикатор из стейта
    const { posts, isLoading } = this.state;

    return (
      <div className='d-flex flex-wrap'>
        {/*<div>Posts page</div>*/}

        {/* ttodo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
        если загрузка не идет то показываем список постов*/}
        {isLoading && this.loading()}
        {
        !isLoading && posts && posts.map((item) => {
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