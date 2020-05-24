import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import {usersList} from '../../constants';
import { UserCard } from '../user-card/UserCard';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <div>content will appear here soon</div>
            <Footer/>
            <div className="user-card-wrapper">
                <div className="row justify-content-center">
                    <UserCard user={usersList[0]}/>
                    <UserCard user={usersList[1]}/>
                </div>
                <div className="row justify-content-center">
                    <UserCard user={usersList[2]}/>
                    <UserCard user={usersList[3]}/>
                </div>
            </div>
        </div>
    );
}

export default App;
