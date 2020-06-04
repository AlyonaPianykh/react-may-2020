import React, { Component } from 'react';
import {accessToken, usersList} from "../../constants";
import {PostCard} from "../post-card/PostCard";
const CN = 'may-post-preview';
class PostDetailsPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      post: null,
      // dtodo 3: добавить isLoading флажок - индикатор загрузки
      isPostLoading: false
    };
  }

  componentDidMount() {
    // dtodo 3: вызвать загрузку инфрмации про пост loadPost
    this.loadPost();
  }

  loadPost = async () => {
    // dtodo 3:
    //  достать id поста из props посредством пропсов, которые дает нам роутер
    //  проверьте лежит ли ваш accessToken в constants/index.js
    //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
    //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
    //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
    //  результат выполнения запроса нужно положить в стейт в post
    //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
    //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив

    const {match: {params: {id}}} = this.props;
    if (!accessToken) return;

    this.setState({
      isPostLoading: true
    });

    const response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);
    if (response.ok) {
      const json = await response.json();
      const {result} = json;

      if (result.constructor.name === 'Object') {
        this.setState({
          isPostLoading: false,
          post: result
        });
      }
    } else {
      this.setState({
        isPostLoading: false
      });
    }
   }

  render() {
    //dtodo 3: достать пост из стейта
    const { post, isPostLoading } = this.state;

    return (
      <div>
        <div className="text-center">Post Details Page</div>
        {
          // dtodo 3: если идет загрузка - показываем лоадинг индикатор
          //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
          isPostLoading && <div className="text-center">Loading posts...</div>
        }
        {
          !isPostLoading && post &&
          <PostCard post={post} className={`${CN}-card`} />
        }
      </div>
    );
  }
}

// // dtodo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter
export default PostDetailsPage;