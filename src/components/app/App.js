import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import  { PostCard as Card } from '../post-card/PostCard';
import { usersList, postsList } from '../../constants';
import { allComments } from '../../constants';
import {UserCard} from '../user-card/UserCard' 

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // const renderList = () => {
  //   const res = [];

  //   for (let i = 0; i < 6; i++) {
  //     const item = postsList[i];
  //     res.push(<Card post={item} key={item.id}/>)
  //   }

  //   return res;
  // };

  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>

      {/* <div className="d-flex posts-container">
       {
          renderList()
       }
      </div> */}

      <div className="d-flex posts-container">
        {
          postsList.map((item, index) => {
            const odd = index % 2 !== 0;
            const comment = [];
            allComments.filter ( value => {
             if (value.post_id === item.id) {
             comment.push (value)  
              }
              return comment
            })
            console.log(odd)
              return <Card post={item} key={item.id} hasImage={odd} comment = {comment}/>
          })
        }
      </div>

      <div className="d-flex posts-container">
      {
        usersList.map ((item, index) => {
          return <UserCard user = {item} key = {index} />
        })
      }
      </div>

      <Footer />
    </div>
  );
}

export default App;
