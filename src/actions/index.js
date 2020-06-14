import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  UPDATE_STATUS,
  USER_ADD } from '../action-types';

export const inc = () => {
  return {
    type: INCREMENT,
    payload: 5
  };
};

export const dec = () => {
  return {
    type: DECREMENT,
    payload: 2
  };
};

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
};

export const removeTodo = (todo) => {
  return {
    type: REMOVE_TODO,
    payload: todo
  }
};

export const updateTodo = (todo) => {
  return {
    type: UPDATE_TODO,
    payload: todo
  }
};
export const updateStatusTodo = (todo) => {
  return{
    type: UPDATE_STATUS,
    payload: todo
  }
};

//  добавить функцию на toggle статуса тудушки
//
// todo 2: добавить функцию на добавление пользователя
//  использовать ее в форме по созданию пользователя
export const userAdd = (newUser) => {
  return{
    type: USER_ADD,
    payload: newUser
  }
};