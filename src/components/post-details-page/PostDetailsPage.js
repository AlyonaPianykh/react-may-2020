import React, { Component } from 'react';
import {accessToken} from "../../constants";
import {PostCard} from "../post-card/PostCard";
import '../posts-list/PostList.scss'
import {withRouter} from "react-router";

class PostDetailsPage extends Component {

  constructor(props) {
    super(props);
    // this.history = this.props.match.history;
    this.state = {
      post: null,
      // done_todo 3: добавить isLoading флажок - индикатор загрузки
      isLoading: true
    };
  }

  componentDidMount() {
    // done_todo 3: вызвать загрузку инфрмации про пост loadPost
    this.loadPost(this.props.match.params.id);
  }

  loadPost = async (id) => {
    // done_todo 3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив
    let response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);

    if (response.ok) {
      let json = await response.json();
      const {result} = json;

      if (result.constructor === Object) {
        this.setState({
          post: result || {},
          isLoading: false
        })
      }
    }
  };



  render() {
    const {post, isLoading} = this.state;
    //done_todo 3: достать пост из стейта
    return (
      <div>
        <div className="post-list-heading">Post Details Page</div>
        { isLoading && <div className="post-list-loading">Loading...</div>}
        {
          // done_todo 3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
        }
        {!isLoading && post && <PostCard post={post}/>}
      </div>
    );
  }
}

// // done_todo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default PostDetailsPage;