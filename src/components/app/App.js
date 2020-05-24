import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import TestCard, { PostCard as Card } from '../post-card/PostCard';
import {allComments, user} from '../../constants/index';
import {postsList, usersList} from '../../constants';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {UserCard} from "../user-card/UserCard";

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
      <div>content will appear here soon</div>
      <div className="d-flex posts-container">
        {
          postsList.map((item, index) => {
            const odd = index % 2 !== 0;

              let user = usersList.find(user => user.id === item.user_id);

              let {first_name, last_name} = user;

              let author = `${first_name} ${last_name}`;

              let comment = allComments.filter(value => value.post_id === item.id);
              console.log(comment);

              return <Card post={item} key={item.id} hasImage={odd} author={author} comment={comment}/>
          })
        }
      </div>

      <div className="d-flex posts-container">
          {
              usersList.map((item, index) => {
                  return (
                      <UserCard user={item} key={index}/>
                  )
              })
          }

      </div>

      <Footer />
    </div>
  );
}

export default App;
