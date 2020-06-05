import React, { Component } from 'react';
import {withRouter} from "react-router";
import {accessToken} from '../../constants/index'
import PostCard from '../post-card/PostCard'

class PostDetailsPage extends Component {

  constructor(props) {
    super(props);

      this.state = {
      post: null,
      // ttodo 3: добавить isLoading флажок - индикатор загрузки
        isLoading: false
    };
  }

  componentDidMount() {

      // ttodo 3: вызвать загрузку инфрмации про пост loadPost
      this.loadPost();
  }

  loadPost = async () => {
    // todo 3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
      const {match:{params:{id}}} = this.props;
    //  проверьте лежит ли ваш accessToken в constants/index.js
      !accessToken && console.error('You do not have access');
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
      this.setState({isLoading: true});
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
      let response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`) ;
      if (response.ok) {
          let json = await response.json();
          const { result } = json;

          result ? this.setState({isLoading:false, post:result}) : console.error('No data')
      }
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false

    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив
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

    //ttodo 3: достать пост из стейта
      const {post, isLoading} = this.state;
    return (
      <div>
        <div>Post Details Page</div>
        {
          // ttodo 3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
        }
          {isLoading && this.loading()}

          {!isLoading && post && <PostCard post={post}/>}


      </div>
    );
  }
}

// todo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default PostDetailsPage = withRouter(PostDetailsPage);