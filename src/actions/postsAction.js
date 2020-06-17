import { accessToken } from '../constants';
import {
  START_POSTS_LOADING,
  POSTS_LOADED,
  ERROR_LOADING_POSTS,
  STOP_POSTS_LOADING
} from '../action-types';

export const getPosts = () => {
  return (dispatch, getState) => {
    dispatch(startLoadingPosts());

    return fetch( `https://gorest.co.in/public-api/posts?access-token=${accessToken}`)
      .then(response => response.json())
      .then((data) => {
        console.log(dispatch, getState)
        debugger
        dispatch({
          type: POSTS_LOADED,
          payload: data.result
        });
        dispatch(stopLoadingPosts());

      })
      .catch((error) => {
        dispatch({
          type: ERROR_LOADING_POSTS,
          payload: error
        })
      })
  }
};

export const startLoadingPosts = () => {
  return {
    type: START_POSTS_LOADING
  }
};

export const stopLoadingPosts = () => {
  return {
    type: STOP_POSTS_LOADING
  }
};