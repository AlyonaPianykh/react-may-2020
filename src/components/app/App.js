import React from 'react';

import {Header} from '../header/HeaderFromLecture';
import {Footer} from '../footer/Footer';
import {PostCard} from '../post-card/PostCard';
import {postsList, usersList} from '../../constants'; // todo помимо константы postsList достать еще usersList
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
                        return <PostCard key={item.id} post={item} hasImage={odd}/>
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