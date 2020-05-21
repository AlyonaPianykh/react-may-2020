import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { PostCard as Card } from '../post-card/PostCard';
import { postsList,usersList} from '../../constants'; // todo помимо константы postsList достать еще usersList
// todo: тут сделать импорт  UserCard из components/user-card/UserCard
import { UserCard as User } from '../user-card/UserCard';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <Header />

        <div className="d-flex posts-container posts">
            {
              postsList.slice(0,6).map((item, index) => {
                const odd = index % 2 !== 0;
                  return <Card post={item} key={item.id} hasImage={odd} />
              })
            }
        </div>

        <div className="d-flex posts-container users">
            {/*  todo: срендерить тут список пользователей, используя компонент UserCard */}
            {
                usersList.slice(0,6).map(value => {
                    return <User key={value.id} user={value}/>
                })
            }
        </div>

        <Footer />
    </div>
  );
}

export default App;
