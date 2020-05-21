import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import  { PostCard} from '../post-card/PostCard';
import { postsList } from '../../constants'; // todo помимо константы postsList достать еще usersList
import { usersList } from "../../constants";
// todo: тут сделать импорт  UserCard из components/user-card/UserCard
import { UserCard } from '../user-card/UserCard'

import './App.scss';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div>content will appear here soon</div>
      <div className="d-flex flex-wrap">
        {
          postsList.map((item, index) => {
            const odd = index % 2 !== 0;

            console.log(odd)
              return <PostCard post={item} key={item.id} hasImage={odd} />
          })
        }
      </div>

      <div className="d-flex">
      {/*  todo: срендерить тут список пользователей, используя компонент UserCard */}
          {usersList.map(value => {
              return (
                  <UserCard key={value.id} user={value} />
              )
          })}
      </div>

      <Footer />
    </div>
  );
}

export default App;
