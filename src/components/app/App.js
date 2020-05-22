import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';

import  { PostCard as Card } from '../post-card/PostCard';
// todo: достать в строке 7 массив allComments из констант
import { postsList, allComments, usersList } from '../../constants'; // todo помимо константы postsList достать еще usersList
// todo: тут сделать импорт  UserCard из components/user-card/UserCard
import { UserCard } from '../user-card/UserCard';

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
          postsList.map((post, index) => {
            const odd = index % 2 !== 0;



            let user = usersList.find((user)=>{
                if(user.id === post.user_id)
                    return user
            });

            // todo: найти в массиве allComments комментарии, post_id которых = id поста  (т.е. в данном случае item.id)
            //  для этого можно использовать метод массива filter
            //  передать этот массив в Card как пропсу под названиес comments

              let arr = allComments.filter((comment )=>{
                  return comment.post_id === post.id
              });


              return <Card post={post} key={post.id} hasImage={odd} author={`${user.first_name} ${user.last_name}`} comments={arr} />

          })
        }
      </div>

      <div className="d-flex posts-container">
              {
                  usersList.map((item,index)=>{
                      return <UserCard user={item}/>
                  })
              }
      </div>

      <Footer />
    </div>
  );
}

export default App;
