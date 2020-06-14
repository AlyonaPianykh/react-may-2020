import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  STATUS_TODO } from '../action-types';

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
// DONEtodo 1: добавить функцию на toggle статуса тудушки
//
export const setStatusTodo = (todo) => {
  return {
    type: STATUS_TODO,
    payload: todo
  }
}

// todo 2: добавить функцию на добавление пользователя
//  использовать ее в форме по созданию пользователя
