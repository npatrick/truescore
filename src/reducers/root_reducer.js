import { combineReducers } from 'redux';
import ChoicesReducer from './choices_reducer';


const rootReducer = combineReducers({
  choices: ChoicesReducer
});

export default rootReducer;