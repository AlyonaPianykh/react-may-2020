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
import { postsList } from './constants';
import UserPage from './components/user-page/UserPage';
import NotFoundPage from './components/not-found-page/NotFoundPage';

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

          <Route path="*" render={(routerProps) => <NotFoundPage {...routerProps}/>}/>
          {/*<Route path="/users/:userId"*/}
          {/*       render={(routerProps) => {*/}
          {/*         return (<UserPage {...routerProps} />);*/}
          {/*       }}*/}
          {/*/>*/}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;

// done_todo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
// const UserPage = (props) =>

// done_todo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
// done_todo 1: добавить кнопку навигации на back to home page
// const NotFoundPage = () =>