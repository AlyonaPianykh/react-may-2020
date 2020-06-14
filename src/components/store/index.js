import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let defaultStore = {
    count: 0,
    lol: 1
};

export function counter (store = defaultStore, action) {
    switch (action.type) {
        case 'increment':
            return {
                count: store.count + 1
            }
        case 'decrement':
            const {count} = store;
            return {
                count: count - 1
            }
        default: return store
    }
}
export const appStore = createStore( counter, composeWithDevTools());