import React from 'react';

import {Header} from '../header/HeaderFromLecture';
import {Footer} from '../footer/Footer';
import {PostCard as Card} from '../post-card/PostCard';

// todo помимо константы postsList достать еще usersList
// todo: достать массив allComments из констант
import {postsList, usersList, allComments} from '../../constants';

// todo: тут сделать импорт  UserCard из components/user-card/UserCard
import {UserCard} from "../user-card/UserCard";

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <div>content will appear here soon</div>
            <div className="d-flex posts-container">
                {
                    postsList.map((item, index) => {
                        const odd = index % 2 !== 0;
                        // todo: найти в массиве usersList пользователя, айди которого равно user_id в посте (т.е. в данном случае item)
                        //  для этого можно использовать функцию массива find или findIndex
                        //  передать имя и фамилию пользователя как пропсу author в Card
                        //  использовать для этого стринговый литерал ``
                        //  в Card под телом поста срендерить имя автора, используя blockquote-footer класс из бутстрапа
                        //  пример тут: https://hackerthemes.com/bootstrap-cheatsheet/#blockquote-footer
                        const usersComments = usersList.find(user => {
                            return user.id === item.user_id
                        })

                        // todo: найти в массиве allComments комментарии, post_id которых = id поста  (т.е. в данном случае item.id)
                        //  для этого можно использовать метод массива filter
                        //  передать этот массив в Card как пропсу под названиес comments
                        const commentsPosts = allComments.filter(comment => {
                            return comment.post_id === item.id
                        })

                        return <Card post={item} key={item.id} hasImage={odd}
                                     author={`${usersComments.first_name} ${usersComments.last_name}`}
                                     comments={commentsPosts}/>
                    })
                }
            </div>

            {/*  todo: срендерить тут список пользователей, используя компонент UserCard */}
            <div className="d-flex posts-container">
                {
                    usersList.map(item => {
                        return <UserCard key={item.id} user={item}/>
                    })
                }
            </div>
            <Footer/>
        </div>
    );
}

export default App;