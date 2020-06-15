import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import { Provider } from 'react-redux';

import HomePage from './components/home-page/HomePage';
import { UsersListPage } from './components/users-list/UsersList';
import { Header } from './components/header/HeaderFromLecture';
import { Footer } from './components/footer/Footer';
import { PostPreview } from './components/post-preview/PostPreview';

import { postsList, usersList } from './constants';
import { UserCard } from './components/user-card/UserCard';
import PostsList from './components/posts-list/PostsList';
import PostDetailsPage from './components/post-details-page/PostDetailsPage';
import TodoPage from './components/todo-page/TodoPage';
import  { appStore } from './store';

class App extends Component {
  render() {
    return (
        <Provider store={appStore}>
          <Router>
            <Header />

            <Switch>
              {/*<Route path="/" exact>*/}
              {/*  <HomePage />*/}
              {/*</Route>*/}
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
            donetodo 2: добавить роут "/posts", который покажет компонент PostsList
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
const UserPage = (props) => {
  const { match: { url, path, params: { userId } }, history } = props;

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
              <UserCard user={user} />
          )
        }
      </div>
  );
};
const NotFoundPage = () => {
  return <div>Page not found</div>;
};