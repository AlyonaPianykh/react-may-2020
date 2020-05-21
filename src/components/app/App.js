import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { UserCard } from '../user-card/UserCard';
import { PostCard } from '../post-card/PostCard';

import { postsList, usersList } from '../../constants';
import {socialMediaIcons} from '../../constants';

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
              return <PostCard post={item} key={item.id} hasImage={odd} />
          })
        }
      </div>
      <div className="d-flex posts-container">
      {usersList.map(user => (
        <UserCard user={user} key={user.id}/>
      ))}
      </div>
      <Footer icons = {socialMediaIcons}/>
    </div>
  );
}

export default App;
