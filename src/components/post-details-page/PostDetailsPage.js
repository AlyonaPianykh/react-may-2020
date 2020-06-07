import React, { Component } from 'react';
import { withRouter } from "react-router";
import {accessToken} from "../../constants";
import PostCard from "../post-card/PostCard";

class PostDetailsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: null,
      // todo 3: добавить isLoading флажок - индикатор загрузки
      isLoading: false
    };
  }

  componentDidMount() {
    // todo 3: вызвать загрузку инфрмации про пост loadPost
    this.loadPost()
  }

  loadPost = async () => {
    console.log(this.props)
    // todo 3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив
    const  { match: {params:{id}} } = this.props;
    this.setState({
      isLoading: true
    });

    let response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);

    if (response.ok) {
      let json = await response.json();

      const { result } = json;

      if (typeof (result) === "object") { // во время выполнения запроса м.б. вариант когда result не массив
        this.setState({
          isLoading: false,
          commentsLoaded: true,
          error: '',
          posts: result || undefined // изменена проверка, если results существовать не будет - закидываем пустой массив
        });
      }
    } else {
      this.setState({
        isLoading: false,
        error: response.status
      });
    }

  };

  render() {

    //todo 3: достать пост из стейта
    const { posts, isLoading } = this.state;
    return (
      <div>
        <div>Post Details Page</div>
        {
          // todo 3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
            isLoading && (<div>...Loading</div>)
        }
        {
          !isLoading && posts && <PostCard post={posts} withCommentsLoading/>
        }
      </div>
    );
  }
}

// // todo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default withRouter( PostDetailsPage );