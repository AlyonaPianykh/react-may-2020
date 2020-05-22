import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import TestCard, { PostCard as Card } from '../post-card/PostCard';
import { postsList, usersList } from '../../constants'; // todo помимо константы postsList достать еще usersList
// todo: тут сделать импорт  UserCard из components/user-card/UserCard
import {UserCard} from '../user-card/UserCard';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const renderList = () => {
    const res = [];

    for (let i = 0; i < 6; i++) {
      const item = postsList[i];
      res.push(<Card post={item} key={item.id}/>)
    }

    return res;
  };

  return (
    <div className="App">
      <Header />
      {/*<div>content will appear here soon</div>*/}
      {/*<div className="d-flex posts-container">*/}
      {/*  {*/}
      {/*    renderList()*/}
      {/*  }*/}
      {/*</div>*/}

      <div className="d-flex posts-container">
        {
          postsList.map((item, index) => {
            const odd = index % 2 !== 0;

            console.log(odd)
              return <Card post={item} key={item.id} hasImage={odd} />
          })
        }
      </div>

      <div className="d-flex posts-container">
          { usersList.map((user) => <UserCard key={user.id} user={user}/>)}
      {/*  todo: срендерить тут список пользователей, используя компонент UserCard */}
      </div>

      <Footer />
    </div>
  );
}

export default App;
