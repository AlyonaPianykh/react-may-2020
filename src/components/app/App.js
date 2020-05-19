import React from 'react';
import {Header} from '../header/HeaderFromLecture';

import Footer from "../footer/Footer";

// todo: здесь нужно сделать импорт usersList из '../../constants'
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {usersList} from "../../constants";
import UserCard from "../user-card/UserCard";


function App() {
    return (
        <div className="App">
            <Header/>
            <div>content will appear here soon</div>
            <Footer/>
            <div className="card-group">
                {usersList.map( user => (
                    <UserCard
                        key = {user.id}
                        props={user}
                    />
                ))}
            </div>

        </div>
    );
}

export default App;
