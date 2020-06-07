import React, {Component, PureComponent} from 'react';

import {accessToken} from '../../constants';
import {Comment} from '../comment/Comment';
import DefaultImg from '../../assets/default-empty-img.png';
import './PostCard.scss';

// done_todo: делаем открывание/закрывание комментариев по кнопочке и добавляем лоадинг индикатор на загрузку комментариев

export class PostCard extends PureComponent {
    constructor(props) {
        super(props);
        console.log('PostCard constructor ');
    }

    state = {
        comments: [],
        // done_todo в стейт добавить флажок isCommentsLoading, который будет означать идет ли загрузка в данный момент, по умолчанию false
        // done_todo в стейт добавить флажок commentsLoaded, который будет означать загрузились ли коментарии, по умолчанию false
        // done_todo в стейт добавить флажок showComments, который будет означать отображается ли секция с коментариями в данный момент, по умолчанию false
        // done_todo в стейт добавить строку error, чтоб хранить значения ошибок, если возникнут
        isCommentsLoading: false,
        commentsLoaded: false,
        showComments: false,
        error: ""
    };

    componentDidMount() {
        const {post, withCommentsLoading} = this.props;

        console.log('PostCard componentDidMount');
        if (post && withCommentsLoading) { // добавлена проверка withCommentsLoading нужно ли делать загрузку комментариев (чтоб в списке всех постов не загружать их)
            const {id} = post;
            id && this.loadComments(id);
        }
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('PostCard componentDidUpdate', prevProps.post, this.props.post);
    //     // добавлена проверка withCommentsLoading нужно ли делать загрузку комментариев (чтоб в списке всех постов не загружать их)
    //     if (prevProps.post.id !== this.props.post.id && this.props.withCommentsLoading) {
    //         this.loadComments(this.props.post.id);
    //     }
    // }

    loadComments = async (postId) => {

        //  done_todo поменять стейт так, чтоб было понятно что секция с комментариями открыта и началась загрузка
        //  done_todo т.е. isCommentsLoading и showComments станут true
        this.setState({
            isCommentsLoading: true,
            showComments: true,
        });

        let response = await fetch(`https://gorest.co.in/public-api/comments?access-token=${accessToken}&post_id=${postId}`);
        console.log(postId, 'dasha');
        if (response.ok) {
            let json = await response.json();

            const {result} = json;
            // debugger

            if (Array.isArray(result)) { // во время выполнения запроса м.б. вариант когда result не массив
                this.setState({
                    // done_todo указать, что лоадинг закончился, т.е. isCommentsLoading будет false,
                    //  а commentsLoaded станет true (т.е. запрос был выполнен)
                    //  в error записываем пустую строку '' - показываем, что ошибки нет
                    isCommentsLoading: false,
                    commentsLoaded: true,
                    error: "",
                    comments: result
                });
            }
        } else {
            // done_todo поменять стейт так, чтоб
            //  лоадинг закончился, т.е. isCommentsLoading будет false,
            //  а commentsLoaded станет false (т.е. запрос не был выполнен ввиду ошибки)
            //  в error пойдет значение response.status
            //  и закроем секцию коментариев т.е. commentsSectionExpanded будет false
            this.setState({
                isCommentsLoading: false,
                commentsLoaded: false,
                error: response.status,
                commentsSectionExpanded: false
            });
        }
    };

    onToggleComments = () => {
        // done_todo
        //    меняем в стейт значение showComments на противоположное (по аналогии как мы делали isOpen для PanelFromLecture
        this.setState({
            showComments: !this.state.showComments
        })
    };

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //   const { post: curPost } = this.props;
    //   const { post: nextPost } = nextProps;
    //
    //   return curPost.id !== nextPost.id
    // }

    render() {
        const {post, hasImage, author = '', className = ''} = this.props;
        const {title, body} = post;
        {/* done_todo с помощью  деструктуризации достать из this.state проперти showComments, error, isCommentsLoading, commentsLoaded */
        }
        const {comments, showComments, error, isCommentsLoading, commentsLoaded} = this.state;

        const kittyUrl = `https://cataas.com/cat/says/hello%20world!?${Math.random() * 1000}`;

        console.log('PostCard render');
        return (
            <div className={`may-post-card card ${className}`}>
                <div className="may-post-card-img" id="my-block" onClick={() => {
                    alert('ghvcdhfvbdfsjvbdf');
                }}>
                    <img src={hasImage ? kittyUrl : DefaultImg}/>
                </div>
                <div className="card-body">
                    <h4 className="card-title title">{title}</h4>
                    <div className="card-text body">
                        {body}
                    </div>
                    <blockquote className="blockquote">
                        <footer className="blockquote-footer">Author:
                            <cite title="Source Title">{author}</cite>
                        </footer>
                    </blockquote>
                </div>

                {
                    // done_todo: добавить label, в котором как children будет если showComments = true - надпись "Hide comments",
                    //    иначе - "Show comments"
                    //    повесить на нее onClick событие this.onToggleComments
                    //    как класс задать ей "btn btn-link"
                }
                <label className="btn btn-link" onClick={this.onToggleComments}>
                    {showComments ? "Hide comments" : "Show comments"}
                </label>

                {/* done_todo создать div который будет как children содержать error, если !!error */}
                {!!error && <div>{error}</div>}

                {/* done_todo в строке ниже изменить условие если showComments = true то показываем <label>Comments:</label>*/}
                {showComments && <label>Comments:</label>}
                {
                    //done_todo если секция комментариев открыта, т.е. showComments = true
                    //   и идет загрузка комментариев, т.е. isCommentsLoading = true
                    // показываем лоадинг индикатор (можно просто строку с надписью "Loading comments ..." в div)
                }
                {showComments && isCommentsLoading && <div>Loading comments ...</div>}
                {
                    //done_todo если секция комментариев открыта, т.е. showComments = true
                    //   но НЕ идет загрузка комментариев, т.е. isCommentsLoading = false
                    //   и запрос уже был выполнен т.е. commentsLoaded = true
                    //   и массив comments пустой, т.е. !comments.length
                    // показываем сообщение, что нет результатов (div с надписью "No comments for this post yet" в div)
                }
                {
                    showComments &&
                    !isCommentsLoading &&
                    commentsLoaded &&
                    !comments.length &&
                    <div>No comments for this post yet</div>
                }
                {
                    // done_todo если секция комментариев открыта, т.е. showComments = true
                    //   и НЕ идет загрузка комментариев, т.е. isCommentsLoading = false
                    //   и запрос уже был выполнен т.е. commentsLoaded = true
                    //   и массив comments НЕ пустой, т.е. !!comments.length
                    //    то:
                    showComments && !isCommentsLoading && commentsLoaded && !!comments.length &&
                    comments.map(comment => (<Comment comment={comment} key={comment.id}/>))
                }
            </div>
        );
    }
}

export default PostCard;
