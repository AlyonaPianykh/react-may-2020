import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  TOGGLE_STATUS_CHANGE
} from '../action-types';

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
export const toggleStatusTodo = (id) => {
  return {
    type: TOGGLE_STATUS_CHANGE,
    payload: id
  }
};

// odo 1: добавить функцию на toggle статуса тудушки
//
// todo 2: добавить функцию на добавление пользователя
//  использовать ее в форме по созданию пользователя
