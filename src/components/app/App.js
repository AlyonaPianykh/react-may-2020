import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import {Footer} from '../footer/Footer';
import {UserCard} from '../user-card/UserCard'
import {usersList} from "../../constants";

//done: здесь нужно сделать импорт Footer из '../footer/Footer'
//done: здесь нужно сделать импорт usersList из '../../constants'
//done: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
        <Footer/>
        <UserCard user = {usersList[0]}/>
      {/*  done: здесь нужно использовать Footer по аналогии с Header */}

      {/*  done: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}
    </div>
  );
}

export default App;
