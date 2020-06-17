import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter, createRootReducer } from '../reducers';
import { POSTS_LOADED } from '../action-types';

export const logger = store => next => action => {
  console.log('logger middleware')
  const currentStoreState = store.getState();

  // console.log('hello from logger ', currentStoreState, action);
  //
  next(action);
};

export const trackPostsLoading = store => next => action => {
  console.log('trackPostsLoading middleware')
  if (action.type === POSTS_LOADED) {
    localStorage.setItem('postLoadedDate', `${Date.now()}`)
  }
  next(action);
};

export const appStore = createStore(createRootReducer(), composeWithDevTools(
  applyMiddleware(thunk, trackPostsLoading, logger)
));