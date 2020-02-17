import {createStore, combineReducers} from 'redux';
import countReducer from '../reducers/countReducer.js';
import getMessageReducer from '../reducers/messageReducer.js';

const rootReducer = combineReducers({
  count: countReducer,
  msg: getMessageReducer,
});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
