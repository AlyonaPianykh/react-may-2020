import React, { Component } from 'react';
import {accessToken} from "../../constants";
import {PostCard} from "../post-card/PostCard";

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
    this. loadPost();
  }

  loadPost = async () => {
    // todo 3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
    const {match: {params: {Id}}} =  this.props;
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    await this.setState({
      isLoading: true
    });
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
    await fetch(`https://gorest.co.in/public-api/posts/${Id}?access-token=${accessToken}`)
        .then(response => {if (response.ok){
          return response.json()
        }})
        .then(json => {if (typeof json.result === 'object') this.setState({
          post: json.result
        })});
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    await this.setState({
      isLoading: false
    });
    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив
  };

  render() {
const {post, isLoading} = this.state;
    //todo 3: достать пост из стейта
    return (
      <div>
        <div>Post Details Page</div>
        {
          // todo 3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
        }
        {isLoading && <div>Loading...</div>}
        {!isLoading && <PostCard post={post}/>}
      </div>
    );
  }
}

// // todo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default PostDetailsPage;