import { createStore, combineReducers } from 'redux';
import todoReducer from '../reducers/todo';
import { loadState, saveState } from './localStorage';


const persistedState = loadState();
export default () => {
//Store creation
    
    const store = createStore(
        combineReducers({
            todo: todoReducer
        }), persistedState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

    store.subscribe(() => {
        saveState(store.getState());
    });
    return store;
}
