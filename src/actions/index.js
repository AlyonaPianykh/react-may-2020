import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  REMOVE_TODO,
  UPDATE_TODO,
  ADD_USER,
  TOGGLE_TODO
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

// todo 1: добавить функцию на toggle статуса тудушки
export const toggleTodo = (obj)=>{
  return {
    type: TOGGLE_TODO,
    payload: obj
  }
};
// todo 2: добавить функцию на добавление пользователя
//  использовать ее в форме по созданию пользователя
export const addUser = (newUser)=>{
  debugger
  return {
    type: ADD_USER,
    payload: newUser
  }
};
