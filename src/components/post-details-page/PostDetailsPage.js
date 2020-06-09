import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {accessToken} from "../../constants";
import {PostCard} from "../post-card/PostCard";

class PostDetailsPageComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: null,
      // dtodo 3: добавить isLoading флажок - индикатор загрузки
      isLoading: false
    };
  }

  componentDidMount() {
    // ddtodo 3: вызвать загрузку инфрмации про пост loadPost
    this.loadPost();
  }

  loadPost = async () => {
    const {match: {params: {id}}} = this.props;
    debugger
    // todo 3:
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

    let response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      let json = await response.json();
      const {result} = json;
      console.log('typeof(result)==="object"', typeof (result) === "object");
      if (typeof (result) === "object") {
        this.setState({
          post: result,
          isLoading: false

        })
      }
    } else {
      alert("Ошибка HTTP: " + response.status);
      this.setState({
        isLoading: false
      })
    }
  };

  render() {

    //dtodo 3: достать пост из стейта
    const {post, isLoading} = this.state;
    return (
        <div>

          <div>Post Details Page</div>

          {
            // todo 3: если идет загрузка - показываем лоадинг индикатор
            //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
          }

          {
            isLoading && <div>Loading post details...</div>
          }

          {
            !isLoading && post !== null && <div><PostCard post={post} withCommentsLoading/></div>
          }
        </div>

    );
  }
}

export const PostDetailsPage = withRouter(PostDetailsPageComponent);







