import {accessToken} from "../constants";
import {POSTS_LOADED, START_LOADING_POSTS, STOP_LOADING_POSTS, ERROR_LOADING_POSTS} from "../action-types";

export const startLoadingPosts = () => {
    return {
        type: START_LOADING_POSTS
    }
}

export const stopLoadingPosts = () => {
    return {
        type: STOP_LOADING_POSTS
    }
}

export const getPosts = () => {
    return (dispatch, getState) => {
        dispatch(startLoadingPosts()); // запустить loader
        return (

            fetch( `https://gorest.co.in/public-api/posts?access-token=${accessToken}`)
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: POSTS_LOADED,
                        payload: data.result
                    });
                    dispatch(stopLoadingPosts()); //остановить loader
                }).catch(err => {
                    dispatch({
                        type: ERROR_LOADING_POSTS,
                        payload: err
                    })
                })
        );
    }
}

