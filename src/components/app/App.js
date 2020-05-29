import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import PostCard  from '../post-card/PostCard';
import { postsList, allComments, usersList } from '../../constants';
import { UserCard } from "../user-card/UserCard";
import { Comment } from "../comment/Comment";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const renderList = () => {
    const res = [];

    for (let i = 0; i < 6; i++) {
      const item = postsList[i];
      res.push(<PostCard post={item} key={item.id}/>)
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

            const user = usersList.find(user=> user.id === item.user_id);
            const {first_name, last_name} = user;
            const author = `${first_name} ${last_name}`;
            const comments = allComments.filter(value => value.post_id === item.id);

            return <PostCard post={item} key={item.id} hasImage={odd} author={author} comments={comments}/>
          })
        }
      </div>

      <div className="d-flex posts-container">
          {allComments.map((item) => {
              return(<div className="comment-item">
                  <Comment comment={item} />
              </div>)
          })}
          {usersList.map((item, index) => {return(<UserCard key={item.id} user={item}/>)})}
      </div>


    </div>
  );
}

export default App;
