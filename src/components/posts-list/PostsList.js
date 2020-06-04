import React, {Component} from 'react';
import {accessToken, usersList} from '../../constants';
import {PostCard} from '../post-card/PostCard';

class PostsList extends Component {
    state = {
        posts: [],
        // done_todo 2: добавить isLoading индикатор
        isLoading: false,
        error: '',
    };

    componentDidMount() {
        // done_todo 2: вызвать загрузку постов
        this.loadPosts();
    }

    loadPosts = async () => {
        // done_todo 2:
        //  проверьте лежит ли ваш accessToken в constants/index.js
        //  прежде чем отправить запрос - включите в true флажок загрузки в стейте isLoading
        //  выполните fetch запрос за поcтами на `https://gorest.co.in/public-api/posts?access-token=${accessToken}`
        //  похожий запрос выполнялся в компоненте PostCard в функции loadComments
        //  результат выполнения запроса нужно положить в стейт в posts
        //  когда запрос выполнится - не забудьте поменять индикатор загрузки isLoading на false
        this.setState({
            isLoading: true,
        });

        let response = await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`);
        if (response.ok) {
            let json = await response.json();
            const {result} = json;
            if (Array.isArray(result)) {
                this.setState({
                    isLoading: false,
                    posts: result || [],
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
        // done_todo 2: достать также лоадинг индикатор из стейта
        const {posts, isLoading, error} = this.state;

        return (
            <div>
                {!!error && <div className="text-center">{error}</div>}

                {/* done_todo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                если загрузка не идет то показываем список постов*/}
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
                    !isLoading && (
                        posts.map((item) => {
                            const user = usersList.find(user => user.id === item.user_id);
                            const author = user ? `${user.first_name} ${user.last_name}` : '';

                            return (
                                <div className="d-flex justify-content-center" key={item.id}>
                                    <PostCard post={item} author={author}/>
                                </div>
                            )
                        })
                    )
                }
            </div>
        );
    }
}

export default PostsList;