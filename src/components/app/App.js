import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import TestCard, { PostCard as Card } from '../post-card/PostCard';
import { postsList } from '../../constants';
import { usersList } from '../../constants';
import { UserCard } from '../user-card/UserCard'

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>

      <div className="d-flex posts-container">
        {
          postsList.map((item, index) => {
            const odd = index % 2 !== 0;
            return <Card post={item} key={item.id} hasImage={odd} />
          })
        }
      </div>

      <div className="d-flex posts-container">
        {
          usersList.map(user => {
            return <UserCard user={user} key={user.id} />
          })
        }
      </div>
      <Footer />
    </div>
  );
}

export default App;