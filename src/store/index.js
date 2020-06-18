import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { counter, createRootReducer  } from '../reducers';
export const appStore = createStore(createRootReducer(), composeWithDevTools());