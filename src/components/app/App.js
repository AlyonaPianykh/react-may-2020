import React from 'react';

import { Header } from '../header/HeaderFromLecture';
import { Footer } from '../footer/Footer';
import { PostCard as Card } from '../post-card/PostCard';
// todo: достать в строке 7 массив allComments из констант
import { postsList,usersList,allComments} from '../../constants'; // todo помимо константы postsList достать еще usersList
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
              postsList.slice(0,12).map((item, index) => {
                const odd = index % 2 !== 0;
                const comments = allComments.filter(value => value.post_id === item.id);
                const user = usersList.find(value => value.id === item.user_id)
                  return <Card key={ item.id }
                               post={ item }
                               comments={ comments }
                               author={ user }    /* ??? В чому мінус варіанту передати в пропсу масив user, а вже у Card його розібрати???*/
                               hasImage={ odd } />
              })}
        </div>

            {/*// todo: найти в массиве usersList пользователя, айди которого равно user_id в посте (т.е. в данном случае item)*/}
            {/*//  для этого можно использовать функцию массива find или findIndex*/}
            {/*//  передать имя и фамилию пользователя как пропсу author в Card*/}
            {/*//  использовать для этого стринговый литерал ``*/}
            {/*//  в Card под телом поста срендерить имя автора, используя blockquote-footer класс из бутстрапа*/}
            {/*//  пример тут: https://hackerthemes.com/bootstrap-cheatsheet/#blockquote-footer*/}


            {/*// todo: найти в массиве allComments комментарии, post_id которых = id поста  (т.е. в данном случае item.id)*/}
            {/*//  для этого можно использовать метод массива filter*/}
            {/*//  передать этот массив в Card как пропсу под названиес comments*/}


        <div className="d-flex posts-container users">
            {/*  todo: срендерить тут список пользователей, используя компонент UserCard */}
            {
            usersList.map(value => {
                return <User key={ value.id } user={ value }/>
            })}
        </div>

        <Footer />

    </div>
  )
}

export default App;
