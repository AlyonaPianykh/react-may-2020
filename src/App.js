import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import HomePage from './components/home-page/HomePage';
import { UsersListPage } from './components/users-list/UsersList';
import { Header } from './components/header/HeaderFromLecture';
import { Footer } from './components/footer/Footer';
import { PostPreview } from './components/post-preview/PostPreview';

import { postsList, usersList } from './constants';
import { UserCard } from './components/user-card/UserCard';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />

        <Switch>
          {/*<Route path="/" exact>*/}
          {/*  <HomePage />*/}
          {/*</Route>*/}
          <Route path="/home" exact>
            <HomePage />
          </Route>
          <Route path="/users" component={UsersListPage} exact />
          <Route path="/users/:userId"
                 render={(routerProps) => {
                   return (<UserPage {...routerProps} />);
                 }}
          />

          {/*
            todo 2: добавить роут "/posts", который покажет компонент PostsList
          */}

          {/*
            todo 3: добавить роут "/posts/:id", который покажет компонент PostDetailsPage
          */}

          <Route path="/post-preview" render={(routerProps) => {
            debugger
            return (
              <PostPreview posts={postsList} {...routerProps} />
            );
          }} />

          <Redirect from="/" to="/home" exact />
          {/*<Redirect from="*" to="/home"/>*/}

          <Route path="*">
            <NotFoundPage/>
          </Route>

        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
// todo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
const UserPage = (props) => {
  const { match: { params: { userId } }, history } = props;

  const user = usersList.find(item => item.id === userId);

  const toUsersList = () => {
    history.push('/users');
  };
  const toHomePage = () => {
    history.push('/home');
  };
  debugger
  return (
    <div>
      <button className="btn btn-primary m-2" type="button" onClick={toUsersList}> Go back to users list</button>
      <button className="btn btn-primary m-2" type="button" onClick={toHomePage}> Go back to homepage</button>
      {
        !!user && (
          <UserCard user={user}/>
        )
      }
    </div>
  );
};
// todo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
const NotFoundPage = () => {
  // todo 1: добавить кнопку навигации на back to home page
  //  подумайте, как для этого надо изменить эту страницу
  return <div>Page not found</div>
};