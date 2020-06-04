import React, {Component} from 'react';
import {accessToken, usersList} from '../../constants';
import {PostCard} from "../post-card/PostCard";
import './PostList.scss'

class PostsList extends Component {
    state = {
        posts: [],
        // done_todo 2: добавить isLoading индикатор
        isLoading: true
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
        let response = await fetch(`https://gorest.co.in/public-api/posts?access-token=${accessToken}`);

        if (response.ok) {
            let json = await response.json();
            const {result} = json;

            if (Array.isArray(result)) {
                this.setState({
                    posts: result || [],
                    isLoading: false
                })
            }
        }
    };

    render() {
        // done_todo 2: достать также лоадинг индикатор из стейта
        const {posts, isLoading} = this.state;

        return (
            <div>
                <div className="post-list-heading">Posts page</div>
                {/* done_todo 2: ниже добавить проверку если сейчас идет загрука то показываем лоадинг индикатор (как в задании 7)
                    если загрузка не идет то показываем список постов */}
                <div className="post-list flex-wrap">
                    {isLoading && <div className="post-list-loading">Loading . . .</div>}
                    {posts.map((item) => {
                        const user = usersList.find(user => user.id === item.user_id);
                        const author = user ? `${user.first_name} ${user.last_name}` : '';

                        return <PostCard
                            post={item}
                            key={item.id}
                            author={author}
                        />;
                    })
                    }
                </div>
            </div>
        );
    }
}

export default PostsList;