import React from 'react';
import { Header } from '../header/HeaderFromLecture';


// do: здесь нужно сделать импорт Footer из '../footer/Footer'
import  {Footer}  from '../footer/Footer';
// do: здесь нужно сделать импорт usersList из '../../constants'
import {usersList} from '../../constants';
// do: здесь нужно сделать импорт UserCard из '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserCard} from "../user-card/UserCard";

function App() {

  return (
    <div className="App">
      <Header />
<div>content will appear here soon</div>
      {/*  do: здесь нужно использовать Footer по аналогии с Header */}
        <UserCard user={usersList[0]}/>
      <Footer />
      {/*  do: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}

    </div>
  );
}

export default App;
