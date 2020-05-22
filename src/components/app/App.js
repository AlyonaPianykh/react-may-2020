import React from 'react';
import { Header } from '../header/HeaderFromLecture';

import {Footer} from "../footer/Footer";
import {usersList} from '../../constants'
import {UserCard} from '../user-card/UserCard'

// todo: здесь нужно сделать импорт Footer из '../footer/Footer'ddddd
// todo: здесь нужно сделать импорт usersList из '../../constants'
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />

        <div>content will appear here soon</div>
        <UserCard user={usersList[0]}/>
      <Footer />

        {/*todo: здесь нужно использовать Footer по аналогии с Header */}
      {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}
    </div>
  );
}

export default App;
