import React, { Component } from 'react';
import {accessToken} from "../../constants";
import PostCard from "../post-card/PostCard";

class PostDetailsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: null,
      error: '',
      isLoading: false
      // donetodo 3: добавить isLoading флажок - индикатор загрузки
    };
  }

  componentDidMount() {
    this.loadPost();
    // donetodo 3: вызвать загрузку инфрмации про пост loadPost
  }

  loadPost = async () => {
    // donetodo 3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив

    this.setState({
      isLoading: true
    });

    const {match: {params: {id}}} =  this.props;

    let res = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);
    if (res.ok) {
      let json = await res.json();
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
        error:res.status,
      })
    }
  };

  render() {

    //donetodo 3: достать пост из стейта
    const { post, error, isLoading } = this.state
    return (
      <div>
        <div>Post Details Page</div>
        {
          // donetodo 3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
        }
        {!!error && <div>error</div>}
        {
          isLoading && <div className="spinner-border" role="status">
            <div className="sr-only">Loading...</div>
          </div>
        }
        {!isLoading && !error && <PostCard post={post} withCommentsLoading={true}/>}

      </div>
    );
  }
}

// // todo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default PostDetailsPage;