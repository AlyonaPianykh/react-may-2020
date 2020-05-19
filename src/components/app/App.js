import React from 'react';
import { Header } from '../header/HeaderFromLecture';
// todo: здесь нужно сделать импорт Footer из '../footer/Footer'
import {Footer} from "../footer/Footer";
// todo: здесь нужно сделать импорт usersList из '../../constants'
import {usersList} from "../../constants";
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'
import {UserCard} from "../user-card/UserCard";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Header />
        {/*<div>content will appear here soon</div>*/}
        {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}
        <UserCard user = {usersList} n={0}/>
        <UserCard user = {usersList} n={1}/>
        <UserCard user = {usersList} n={2}/>
        <UserCard user = {usersList} n={3}/>
        {/*  todo: здесь нужно использовать Footer по аналогии с Header */}
        <Footer/>
    </div>
  );
}

export default App;
