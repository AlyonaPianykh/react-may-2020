import { POSTS_LOADED, START_POSTS_LOADING, STOP_POSTS_LOADING } from '../action-types';

const defaultValue = {
  posts: [],
  isPostsLoading: false
};

export const postsReducer = (store = defaultValue, action) => {
  switch(action.type) {
    case POSTS_LOADED: {
      return {
        ...store,
        posts: action.payload,
      }
    }
    case START_POSTS_LOADING: {
      return {
        ...store,
        isPostsLoading: true
      }
    }
    case STOP_POSTS_LOADING: {
      return {
        ...store,
        isPostsLoading: false
      }
    }

    default: return store;
  }
};