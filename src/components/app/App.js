import React from 'react';
import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { usersList } from '../../constants';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      <UserCard user={usersList[0]} />
      <Footer />
    </div>
  );
}

export default App;