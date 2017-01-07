import { FETCH_PROMPTS } from '../actions/actions.js';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch( action.type ) {
    
    case FETCH_PROMPTS:
      return action.payload.data

    default:
      return state;
  }
}