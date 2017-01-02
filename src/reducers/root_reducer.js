import { combineReducers } from 'redux';
import ChoicesReducer from './choices_reducer';
import UsersReducer from './users_reducer';


const rootReducer = combineReducers({
  choices: ChoicesReducer,
  users: UsersReducer
});

export default rootReducer;