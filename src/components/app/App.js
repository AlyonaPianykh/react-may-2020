import React from 'react';
import {Header} from '../header/HeaderFromLecture';
import {Footer} from '../footer/Footer';
import {PostCard} from "../post-card/PostCard";
import {UserCard} from "../user-card/UserCard";
import {postsList} from "../../constants";
import {usersList} from "../../constants";

import './App.scss'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div className="App">
            <Header/>
            <div>content will appear here soon</div>
            {/*<div className="d-flex posts-container">*/}
            {/*    <PostCard post={postsList[0]}/>*/}
            {/*    <PostCard post={postsList[1]}/>*/}
            {/*    <PostCard post={postsList[2]}/>*/}
            {/*    <PostCard post={postsList[3]}/>*/}
            {/*    <PostCard post={postsList[4]}/>*/}
            {/*</div>*/}
            <Footer/>

            <div className="d-flex posts-container">
            <UserCard user = {usersList[0]} />
            <UserCard user = {usersList[1]} />
            <UserCard user = {usersList[2]} />
            <UserCard user = {usersList[3]} />
            <UserCard user = {usersList[4]} />
            </div>
        </div>
    );
}

export default App;
