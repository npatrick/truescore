import { combineReducers } from 'redux';
import ComparisonReducer from './comparison_reducer';
import UsersReducer from './users_reducer';


const rootReducer = combineReducers({
  choices: ComparisonReducer,
  users: UsersReducer
});

export default rootReducer;