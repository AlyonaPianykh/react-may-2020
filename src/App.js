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
import { UserPage} from "./components/userPage/UserPage";
import { NotFoundPage} from "./components/notFoundPage/NotFoundPage";
import { postsList, usersList } from './constants';
import { UserCard } from './components/user-card/UserCard';
import PostsList from "./components/posts-list/PostsList";
import PostDetailsPage from "./components/post-details-page/PostDetailsPage";

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
          <Route path="/posts" component={PostsList} exact />

          {/*
            todo 3: добавить роут "/posts/:id", который покажет компонент PostDetailsPage
          */}
            <Route path="/posts/:id" render={(routerProps) => {
                debugger
                return (
                    <PostDetailsPage  {...routerProps} />
                );
            }} />

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


// todo 1: вынести эту функцию в отдельную компоненту: сощздать папку, js файл
