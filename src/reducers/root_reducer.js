import { combineReducers } from 'redux';
import ComparisonReducer from './comparison_reducer';
import UsersReducer from './users_reducer';


const rootReducer = combineReducers({
  comparison: ComparisonReducer,
  users: UsersReducer
});

export default rootReducer;