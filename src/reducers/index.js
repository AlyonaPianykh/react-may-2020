import { combineReducers } from 'redux';
import {ADD_TODO, REMOVE_TODO, TOGGLE_STATUS_CHANGE, UPDATE_TODO} from '../action-types';

const defaultData =  {
  count: 0,
  property1: 'test',
  a: {
    b: 3,
    c: 'jghvhvh'
  }
};

const todoDefaultStore = {
  todos: []
};
export function todoReducer(store = todoDefaultStore, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = action.payload;
      const {todos} = store;

      return {
        todos: [...todos, newTodo]
      };
    }
    case REMOVE_TODO: {
      const {id} = action.payload;
      const {todos} = store;

      const index = todos.findIndex(item => item.id === id);
      const copyOfArray = [...todos];
      copyOfArray.splice(index, 1)
      if (index > -1) {
        return {
          todos: copyOfArray
        };
      }
      return store;
    }
    case UPDATE_TODO: {
      const { id } = action.payload;
      const {todos} = store;
      const copyOfArray = [...todos];
      const index = todos.findIndex(item => item.id === id);

      if (index > -1) {
        copyOfArray[index] = action.payload;

        return {
          todos: copyOfArray
        };
      }
      return store;
    }
    case TOGGLE_STATUS_CHANGE: {
      const { id } = action.payload;
      const {todos} = store;
      const copyOfArray = [...todos];
      const index = todos.findIndex(item => item.id === id);

      if (index > -1) {
        copyOfArray[index].doneStatus = !copyOfArray[index].doneStatus;

        return {
          todos: copyOfArray
        };
      }
      return store;
    }
    // todo 1: добавить обработку toggle статуса тудушки
    default: return store;
  }
}

export function counter(store = defaultData, action) {
  let res;
  switch (action.type) {
    case 'INCREMENT': {
      const { count } = store;
      res = {
        ...store,
        count: store.count + action.payload
      };
      break;
    }
    case 'DECREMENT': {
      const { count} = store;
      res = {
        ...store,
        count: count - action.payload
      };
      break;
    }
    default: res = store; break;
  }
  return res;
};


// todo 2: создать еще 1 редьюсер usersReducer
//   как начальное значение задать объект в котором будет пропертя users со значением usersList (из констант)
//   реализовать добавление пользователя с помощью редакса
//   т.е. перенести логику из компонент в стор
//   найти все компоненты, которые используют константу usersList и подписать их на стор ( с помощью connect функции)
//   чтобы они могли читать массив пользвателей из стора, а не из константы

export const createRootReducer = () => {
  return combineReducers({
    counter,
    todoReducer
    // todo 2: добавить тут usersReducer

   // todo: обратите внимание, тут можно добавлять еще редьюсеры
  });
};
