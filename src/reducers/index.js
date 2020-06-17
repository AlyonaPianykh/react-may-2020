import { combineReducers } from 'redux';
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO,TODO_IS_DONE,ADD_USER} from '../action-types';
import { usersList } from '../constants/index';


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
function todoReducer(store = todoDefaultStore, action) {
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
      copyOfArray.splice(index, 1);
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
    // ttodo 1: добавить обработку toggle статуса тудушки
      case TODO_IS_DONE: {
          const { id, doneStatus } = action.payload;
          const {todos} = store;
          const copyOfArray = [...todos];
          const todo = copyOfArray.find(item => item.id === id);
          if (todo) {
              todo.doneStatus = !doneStatus;

              return {
                  todos: copyOfArray
              };
          }}
    default: return store;
  }
}

function counter(store = defaultData, action) {
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
}


// ttodo 2: создать еще 1 редьюсер usersReducer
//   как начальное значение задать объект в котором будет пропертя users со значением usersList (из констант)
//   реализовать добавление пользователя с помощью редакса
//   т.е. перенести логику из компонент в стор
//   найти все компоненты, которые используют константу usersList и подписать их на стор ( с помощью connect функции)
//   чтобы они могли читать массив пользвателей из стора, а не из константы
const usersDefaultStore = {
    usersList
};
function usersReducer(store = usersDefaultStore,action) {
    switch (action.type) {
        case ADD_USER: {
            const newUser = action.payload;
            const {usersList} = store;
            return {
                usersList: [...usersList,newUser]
            }
        }
        default: return store
    }
}

export const createRootReducer = () => {
  return combineReducers({
    counter,
    todoReducer,
    usersReducer
    // ttodo 2: добавить тут usersReducer

   // ttodo: обратите внимание, тут можно добавлять еще редьюсеры
  });
};
