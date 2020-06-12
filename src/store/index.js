import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter, createRootReducer  } from '../reducers';
// todo: обратите внимание, тут есть отличие с лекцией
//  добавлена функция createRootReducer, которая собственно добавляет несколько редьюсеров
//  она используется при создании стора ниже
export const appStore = createStore(createRootReducer(), composeWithDevTools());

