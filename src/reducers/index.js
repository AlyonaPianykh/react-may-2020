/// todo: обратите внимание эта функция используется чтоб сделать больше одного редьюсера
//   на лекции мы не успели ее пройти - обговорим детальнее на следующей
import { combineReducers } from 'redux';

const defaultData =  {
  count: 0,
  property1: 'test',
  a: {
    b: 3,
    c: 'jghvhvh'
  }
};

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

export function createRootReducer() {
  return combineReducers({
    counter,
    // todo: обратите внимание, тут можно добавлять еще редьюсеры
  })
}