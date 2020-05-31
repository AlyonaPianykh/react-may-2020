import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { PostCard } from '../post-card/PostCard';

import { postsList } from '../../constants';
import {usersList} from '../../constants';
import {UserCard} from '../../components/user-card/UserCard';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div className="App">
            <Header/>
            <div className="d-flex posts-container">
                {
                    postsList.map((item,index)=>{
                        return (
                            <PostCard key={item.id} post={item}/>
                        );
                    })
                }
            </div>
            <Footer/>
        </div>
    )
}
export default App;
