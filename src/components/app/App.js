import React from 'react';

import { allComments } from '../../constants';
import { postsList } from '../../constants';
import { usersList } from '../../constants';
import { Header } from '../header/HeaderFromLecture';
import { PostCard } from '../post-card/PostCard';
import { UserCard } from '../user-card/UserCard'
import { Footer } from '../footer/Footer';

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

            const postAuthor = usersList.find(user => {
              return user.id === item.user_id;
            })

            const commentsList = allComments.filter(comment => {
              return comment.post_id === item.id;
            })

            return <PostCard post={item} author={`${postAuthor.first_name} ${postAuthor.last_name}`}
              comments={commentsList} key={item.id} hasImage={odd} />
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