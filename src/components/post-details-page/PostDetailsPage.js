import React, { Component } from 'react';
import {accessToken} from "../../constants";

import { PostCard } from "../post-card/PostCard";

class PostDetailsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: null,
      //  3: добавить isLoading флажок - индикатор загрузки
      isLoading:false,
      error:''
    };
  }

  componentDidMount() {
    //  3: вызвать загрузку инфрмации про пост loadPost
    this.loadPost();
  }

  loadPost = async () => {
    //  3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
    const {match: {params: {id}}} =  this.props;
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    this.setState({
      isLoading: true
    });
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив
    let response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);
    if (response.ok) {
      let json = await response.json();
      const { result } = json;
      if (typeof result === "object") {
        this.setState({
          isLoading:false,
          error:'',
          post:result
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

    // 3: достать пост из стейта
    const { isLoading, error, post } = this.state;
    return (
      <div>
        {
          //  3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
        }
        {!!error && <div>error</div>}
        {
          isLoading && <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
        }
        {!isLoading && !error && <PostCard post={post} withCommentsLoading={true}/>}
      </div>
    );
  }
}

// //  3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default PostDetailsPage;