import React from 'react';

import {Header} from '../header/HeaderFromLecture';
import {Footer} from '../footer/Footer';
import {PostCard} from "../post-card/PostCard";
import {UserCard} from "../user-card/UserCard";
import {postsList} from "../../constants";
import {usersList} from "../../constants";

import './App.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <div>content will appear here soon</div>
            <div  className="d-flex posts-container">
                {
                    postsList.map((item, index) => {
                        return (
                            <PostCard key={index} post={item}/>
                        )
                    })
                }
            </div>
            <div className="d-flex posts-container">
                {
                    usersList.map((item, index) => {
                        return (
                            <UserCard key={index} user={item}/>
                        )
                    })
                }
            </div>

            <Footer/>
        </div>
    );
}
export default App;