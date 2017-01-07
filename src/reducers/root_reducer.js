import { combineReducers } from 'redux';
import ComparisonReducer from './comparison_reducer';
import UsersReducer from './users_reducer';
import PromptReducer from './prompt_reducer.js';
import PromptsReducer from './prompts_reducer.js';
import ChoiceReducer from './choices_reducer.js';
// import StatsReducer from './stats_reducer.js';


const rootReducer = combineReducers({
  comparison: ComparisonReducer,
  users: UsersReducer,
  prompt: PromptReducer, // obj containing prompt data
  prompts: PromptsReducer //array of prompt objects
});

export default rootReducer;