import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';

import HomePage from './components/home-page/HomePage';
import  UsersListPage  from './components/users-list/UsersList';
import { Header } from './components/header/HeaderFromLecture';
import { Footer } from './components/footer/Footer';
import { PostPreview } from './components/post-preview/PostPreview';

import { postsList, usersList } from './constants';
import PostsList from './components/posts-list/PostsList';
import PostDetailsPage from './components/post-details-page/PostDetailsPage';
import TodoPage from './components/todo-page/TodoPage';
import UserPage from './components/user-page/UsersPage';
import  { appStore } from './store';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Router>
          <Header />

          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/todos" component={TodoPage} exact />

            <Route path="/users" component={UsersListPage} exact />
            <Route path="/users/:userId"
                   render={(routerProps) => {
                       return (<UserPage {...routerProps} />);
                   }}
            />

            {/*
            ttodo 2: добавить роут "/posts", который покажет компонент PostsList
          */}
            <Route path="/posts" component={PostsList} exact />
            <Route path="/posts/:id"
                   render={(routerProps) => {
                     return (<PostDetailsPage {...routerProps} />);
                   }}
            />

            <Route path="/post-preview" render={(routerProps) => {
              // debugger
              return (
                <PostPreview posts={postsList} {...routerProps} />
              );
            }} />

            <Redirect from="/" to="/home" exact />
            {/*<Redirect from="*" to="/home"/>*/}

            <Route path="*">
              <NotFoundPage />
            </Route>

          </Switch>
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;

const NotFoundPage = () => {
  return <div>Page not found</div>;
};