import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import {Footer} from "../footer/Footer";
import {usersList} from "../../constants";
import {UserCard} from "../user-card/UserCard";

// todo: здесь нужно сделать импорт Footer из '../footer/Footer'

// todo: здесь нужно сделать импорт usersList из '../../constants'
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserCard user = {usersList[0]} />

      <Footer/>

    </div>
  );
}

export default App;
