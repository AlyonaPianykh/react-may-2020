import React from 'react';
import { Header } from '../header/HeaderFromLecture';

// todo: здесь нужно сделать импорт Footer из '../footer/Footer'
// todo: здесь нужно сделать импорт usersList из '../../constants'
// todo: здесь нужно сделать импорт UserCard из '../user-card/UserCard'
import { Footer } from '../footer/Footer';
import { usersList } from '../../constants';
import { UserCard } from '../user-card/UserCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      {/*  todo: здесь нужно использовать Footer по аналогии с Header */}
      {/*  todo: здесь нужно использовать UserCard по аналогии с Header, как пропсу user передать usersList[0]*/}
      <UserCard user={usersList[0]} />
      <Footer/>
    </div>
  );
}

export default App;
