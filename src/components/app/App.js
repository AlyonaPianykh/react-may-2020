import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import  { PostCard as Card } from '../post-card/PostCard';
import { postsList, allComments, usersList } from '../../constants';

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
      <div>content will appear here soon</div>

      {/*<div className="d-flex posts-container">*/}
      {/*  {*/}
      {/*    renderList()*/}
      {/*  }*/}
      {/*</div>*/}

      <div className="d-flex posts-container">
        {
          postsList.map((item, index) => {
            const odd = index % 2 !== 0;
            const author = usersList.find( user => user.id === item.user_id);
            const comments = allComments.filter( comment => comment.post_id === item.id);

            return <Card post={item} key={item.id} hasImage={odd} author={author} comments={comments}/>
          })
        }
      </div>
      <div className="d-flex posts-container">
      </div>
      <Footer />
    </div>
  );
}

export default App;
