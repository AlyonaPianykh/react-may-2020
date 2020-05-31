import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import {usersList} from '../../constants';
import {UserCard} from '../user-card/UserCard'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      <Footer />
        {usersList.map(value => {
            return (
                <UserCard key={value.id} user={value}/>
            )
        })}
    </div>
  );
}

export default App;
