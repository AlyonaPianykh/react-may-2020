import React, {Component} from 'react';
import {accessToken} from "../../constants";
import {PostCard} from "../post-card/PostCard";

export class PostDetailsPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            post: null,
            // done_todo 3: добавить isLoading флажок - индикатор загрузки
            isLoading: false,
            error: '',
        };
    }

    componentDidMount() {
        // done_todo 3: вызвать загрузку инфрмации про пост loadPost
        this.loadPost();
    }

    loadPost = async () => {
        // done_todo 3:
        //  достать id поста из props посредством пропсов, которые дает нам роутер
        //  проверьте лежит ли ваш accessToken в constants/index.js
        //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
        //  выполните fetch запрос за поcтом на `https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`
        //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
        //  результат выполнения запроса нужно положить в стейт в post
        //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
        //  обратите внимание, что результат выполнения запроса - ОБЪЕКТ, а не массив
        const {match: {params: {id}}} = this.props;
        this.setState({
            isLoading: true,
        });

        let response = await fetch(`https://gorest.co.in/public-api/posts/${id}?access-token=${accessToken}`);
        if (response.ok) {
            let json = await response.json();
            const {result} = json;
            if (result instanceof Object) {
                this.setState({
                    isLoading: false,
                    post: result || null,
                    error: '',
                });
            }
        } else {
            this.setState({
                isLoading: false,
                error: response.status,
            });
        }
    };

    render() {
        //done_todo 3: достать пост из стейта
        const {post, isLoading, error} = this.state;
        return (
            <div>
                {!!error && <div className="text-center">{error}</div>}
                {// done_todo 3: если идет загрузка - показываем лоадинг индикатор
                    //    если нет и пост существует - показываем карточку поста PostCard, в которую как пропсу post передаем наш post из state
                }
                {
                    isLoading && (
                        <div className="text-center">
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )
                }

                {
                    !isLoading && post && (
                        <div className="d-flex justify-content-center">
                            <PostCard post={post}/>
                        </div>
                    )
                }
            </div>
        );
    }
}

// // done_todo 3: обратите внимание - если в App.js вы не передали routerProps в компоненту - то здесь нужно использовать withRouter