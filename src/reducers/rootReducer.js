import { combineReducers } from 'redux';
import TodoApp from './reducer';

const rootReducer = combineReducers({
  index: TodoApp,
});

export default rootReducer;
