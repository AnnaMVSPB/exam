import { createStore, combineReducers } from 'redux';

const store = createStore(
    combineReducers({

       }));
export default store;
export type RootState = ReturnType<typeof store.getState>;
